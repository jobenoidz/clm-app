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
            ->join('lead as l', 'c.id', '=', 'l.company_id')
            ->join('lead_status as s', 'l.status', '=', 's.id')
            ->select(
                'c.id',
                'c.company_name',
                'p.full_name',
                'p.work_email',
                'p.work_phone',
                's.status_name as status',
                'l.assigned_to',
            )
            ->where('c.type', 'LEAD')
            ->when($status !== 'all', function ($query) use ($status) {
                if ($status === 'new') {
                    // Check if assigned_to is null or not (adjust as needed)
                    return $query->where('s.status_name', 'LIKE', $status)
                        // ->whereNull('l.assigned_to')
                    ;
                } else {
                    return $query->where('s.status_name', 'LIKE', $status);
                }
            })
            ->orderBy('c.company_name', 'asc')
            ->get();

        // Log::info('LEADS FETCH', ['leads' => $leads]);

        return Inertia::render('leads', [
            'leads' => $leads
        ]);
    }
}
