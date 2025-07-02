<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class ClientsController extends Controller
{
    //
    public function fetchClients()
    {
        $clients = DB::table('company as c')
            ->join('contact as p', 'c.contact_id', '=', 'p.id')
            ->leftJoin('client_avail_service as a', function ($join) {
                $join->on('c.id', '=', 'a.client_id')
                    ->whereRaw('a.availment_status = (
                    SELECT a2.availment_status 
                    FROM client_avail_service a2 
                    WHERE a2.client_id = a.client_id
                    ORDER BY FIELD(a2.availment_status, "For Renewal", "New", "Ongoing")
                    LIMIT 1
                )');
            })
            ->select(
                'c.id',
                'c.company_name',
                'p.full_name',
                'p.work_email',
                'p.work_phone',
                'a.availment_status as status'
            )
            ->where('c.type', 'CLIENT')
            ->orderBy('c.company_name', 'asc')
            ->get();

        return Inertia::render('clients', [
            'clients' => $clients
        ]);
    }

    public function getClientDetails($id)
    {
        $client = DB::table('company as c')
            ->join('client as cl', 'cl.company_id', '=', 'c.id', 'inner')
            ->join('contact as p', 'p.id', '=', 'c.contact_id', 'inner')
            ->select(
                'c.id',
                'c.company_name',
                'c.address',
                'cl.date_added',
                'cl.field',
                'cl.organization',
                'cl.org_head',
                'cl.school_head',
                'cl.head_email',
                'p.full_name',
                'p.position',
                'p.work_email',
                'p.work_phone',
            )
            ->where('c.id', $id)
            ->first();

        $availed = DB::table('client_avail_service as a')
            ->join('product_group as g', 'a.group_id', '=', 'g.id', 'inner')
            ->select(
                'a.group_id',
                'g.group_name'
            )
            ->distinct()
            ->where('client_id', 1)
            ->get()
            ->toArray();

        // $status = DB::table('client_avail_service as a')
        //     ->select('a.availment_status')
        //     ->where('a.client_id', $id)
        //     ->orderByRaw("FIELD(availment_status, 'For Renewal', 'New', 'Ongoing')")
        //     ->first();

        Log::info('ID', ['id' => $id]);
        Log::info('CLIENT', ['client' => $client]);
        Log::info('AVAILED', ['availed' => $availed]);
        // Log::info('STATUS', ['status' => $status->availment_status]);
        return response()->json(
            [
                'client' => $client,
                'availed' => $availed,
                // 'status' => $status->availment_status
            ]
        );
    }
}
