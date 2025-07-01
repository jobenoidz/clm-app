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
            // ->join('contact as p', 'p.id', '=', 'c.contact_id')
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
                // 'p.full_name',
                // 'p.position',
                // 'p.work_email',
                // 'p.work_phone'
                // DB::raw(
                //     '(SELECT GROUP_CONCAT(DISTINCT group_id)
                //     JOIN product_group as pg on group_id'
                // )
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
