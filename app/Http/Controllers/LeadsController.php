<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class LeadsController extends Controller
{
    //
    public function fetchLeads($status)
    {
        //status is nullable
        $leads = DB::table('company as c')
            ->join('contact as p', 'c.contact_id', '=', 'p.id')
            ->join('leads as l', 'c.id', '=', 'l.company_id')
            ->join('lead_status as s', 'l.status', '=', 's.id')
            ->select(
                'c.id',
                'c.company_name',
                'p.full_name',
                'p.work_email',
                'p.work_phone',
                's.status_name as status',
                'c.assigned_to',
            )
            ->where('c.type', 'LEAD')
            ->when($status !== 'all', function ($query) use ($status) {
                if ($status === 'new') {
                    // Check if assigned_to is null or not (adjust as needed)
                    return $query->where('s.status_name', 'LIKE', $status)
                        // ->whereNull('l.assigned_to')
                    ;
                } else if ($status === 'rejected_or_lost') {
                    return $query->whereIn('s.status_name', ['rejected', 'lost']);
                } else {
                    return $query->where('s.status_name', 'LIKE', $status);
                }
            })
            ->orderBy('c.company_name', 'asc')
            ->get();

        Log::info('LEADS FETCH', ['leads' => $leads]);

        return Inertia::render('leads', [
            'leads' => $leads
        ]);
    }

    public function getLeadDetails($id)
    {
        $lead = DB::table('company as c')
            ->join('leads as l', 'l.company_id', '=', 'c.id', 'inner')
            ->join('lead_status as s', 'l.status', '=', 's.id')
            ->join('contact as p', 'p.id', '=', 'c.contact_id', 'inner')
            ->leftJoin('users as u', 'c.assigned_to', '=', 'u.id')
            ->select(
                'c.id',
                'c.company_name',
                'c.address',
                'l.key_decision_maker',
                'l.domain',
                's.status_name as status',
                DB::raw("DATE_FORMAT(l.rt_date, '%b.  %e, %Y') as rt_date"),
                'l.lead_source as source',
                DB::raw("DATE_FORMAT(l.date_added, '%b.  %e, %Y') as date_added"),
                DB::raw("DATE_FORMAT(l.initial_contact_date, '%b.  %e, %Y') as initial_contact_date"),
                DB::raw("DATE_FORMAT(l.last_contacted, '%b.  %e, %Y') as last_contacted"),
                'p.full_name',
                'p.position',
                'p.work_email',
                'p.work_phone',
                'c.assigned_to',
                'u.name as assigned_user_name',
                'u.email as assigned_user_email',
                'l.timeline',
                'l.challenges',
                'l.needs_or_requirements as needs',
                'l.remarks',
                'l.notes'
            )
            ->where('c.id', $id)
            ->first();

        // Log::info('ID', ['id' => $id]);
        // Log::info('CLIENT', ['client' => $client]);
        // Log::info('AVAILED', ['availed' => $availed]);
        return response()->json(
            [
                'lead' => $lead,
            ]
        );
    }

    public function addLead(Request $request)
    {
        DB::beginTransaction();

        try {
            $contactId = DB::table('contact')->insertGetId([
                'full_name' => $request->input('contact_person'),
                'position' => $request->input('position'),
                'work_email' => $request->input('work_email'),
                'work_phone' => $request->input('work_phone'),
                'created_at' => now(),
                'updated_at' => now(),

            ]);

            $companyId = DB::table('company')->insertGetId([
                'company_name' => $request->input('company_name'),
                'address' => $request->input('address'),
                'contact_id' => $contactId,
                'type' => 'LEAD',
                'created_at' => now(),
                'updated_at' => now(),

            ]);

            DB::table('leads')->insert([
                'company_id' => $companyId,
                'key_decision_maker' => $request->input('key_decision_maker'),
                'domain' => $request->input('domain'),
                'lead_source' => $request->input('lead_source'),
                'rt_date' => $request->input('rt_date'),
                'timeline' => $request->input('timeline'),
                'challenges' => $request->input('challenges'),
                'needs_or_requirements' => $request->input('needs'),
                'remarks' => $request->input('remarks'),
                'notes' => $request->input('notes'),
                'date_added' => now(),
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::commit();

            return redirect()->back()->with('success', 'Lead added successfully.');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error adding lead', ['message' => $e->getMessage()]);
            return redirect()->back()->with('error', 'Failed to add lead.');
        }
    }

    public function updateStatus(Request $request, $id)
    {
        $status = $request->input('status');
        $statusId = DB::table('lead_status')->where('status_name', $status)->value('id');
        if ($statusId) {
            DB::table('leads')->where('company_id', $id)->update(['status' => $statusId]);
            return response()->json(['success' => true]);
        }
        return response()->json(['success' => false, 'message' => 'Invalid status'], 400);
    }

    public function assignUser(Request $request, $id)
    {
        $userId = $request->input('user_id');
        DB::table('company')
            ->where('id', $id)
            ->update(['assigned_to' => $userId]);
        return response()->json(['success' => true]);
    }

    public function getSalesReps()
    {
        $users = DB::table('users')
            ->select('id', 'name', 'email')
            ->where('user_type', 4)
            ->get();
        return response()->json(['users' => $users]);
    }
}
