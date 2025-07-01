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
            ->select('c.id', 'c.company_name', 'p.full_name', 'p.work_email', 'p.work_phone')
            ->where('type', '=', 'CLIENT')
            ->orderBy('c.company_name', 'asc')
            ->get();

        return Inertia::render('clients', [
            'clients' => $clients
        ]);
    }

    public function getClientDetails($id)
    {
        $client = DB::table('company as c')
            ->join('client as cl', 'cl.company_id', '=', 'c.id')
            ->join('contact as p', 'p.id', '=', 'c.contact_id')
            // ->leftJoin('client_avail_service as cas', 'cas.client_id', '=', 'cl.id')
            // ->leftJoin('service as s', 's.id', '=', 'cas.service_id')
            ->select(
                'c.id',
                'c.company_name',
                'c.address',
                // 'cl.date_added',
                // 'cl.field',
                // 'cl.organization',
                // 'cl.org_head',
                // 'cl.school_head',
                // 'cl.head_email',
                // 'p.full_name',
                // 'p.position',
                // 'p.work_email',
                // 'p.work_phone',
                // DB::raw('(SELECT GROUP_CONCAT(DISTINCT s.service_name) 
                // FROM client_avail_service cas2
                // JOIN service s ON s.id = cas2.service_id
                // WHERE cas2.client_id = cl.id) as services'),
                // DB::raw('(SELECT GROUP_CONCAT(DISTINCT cas3.group_id) 
                // FROM client_avail_service cas3
                // WHERE cas3.client_id = cl.id) as group_ids')
            )
            ->where('c.id', $id)
            ->first();

        Log::info('CLIENT', ['client' => $client]);
        Log::info($id);
        return response()->json(
            $client
        );
    }
}
