<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class ClientsController extends Controller
{
    //
    public function fetchClients($status)
    {
        $clients = DB::table('company as c')
            ->join('contact as p', 'c.contact_id', '=', 'p.id')
            ->leftJoinSub(
                DB::table('client_avail_service')
                    ->select('client_id')
                    ->selectRaw('
                            SUBSTRING_INDEX(
                                GROUP_CONCAT(
                                    availment_status 
                                    ORDER BY FIELD(availment_status, "For Renewal", "Ongoing", "New")
                                    SEPARATOR ","
                                ), 
                                ",", 
                                1
                            ) as top_status
                        ')
                    ->groupBy('client_id'),
                'a',
                'c.id',
                '=',
                'a.client_id'
            )
            ->select(
                'c.id',
                'c.company_name',
                'p.full_name',
                'p.work_email',
                'p.work_phone',
                'a.top_status as status'
            )
            ->where('c.type', 'CLIENT')
            ->when($status != 'all', function ($query) use ($status) {
                $query->where('a.top_status', 'LIKE', $status);

            })
            ->orderBy('c.company_name', 'asc')
            ->get();

        // Log::info('CLIENT FETCH', ['clients' => $clients]);

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
                'cl.category',
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

        // Log::info('ID', ['id' => $id]);
        // Log::info('CLIENT', ['client' => $client]);
        // Log::info('AVAILED', ['availed' => $availed]);
        return response()->json(
            [
                'client' => $client
            ]
        );
    }

    public function viewClientServices($clientId)
    {
        $clientServices = DB::table('client_avail_service as avail')
            ->join('product_group as g', 'g.id', '=', 'avail.group_id')
            ->join('service as s', 's.id', '=', 'avail.service_id')
            ->join('client as cl', 'cl.id', '=', 'avail.client_id')
            ->select([
                's.id',
                'avail.sq_num',
                'g.group_name',
                's.service_name',
                'avail.agreement_status as status',
                'avail.contract_type',
                DB::raw("DATE_FORMAT(avail.date_signed, '%b.  %e, %Y') as date_signed")
            ])
            ->where('avail.client_id', $clientId)
            ->get()
            ->toArray();

        Log::info('Group Services', ['clientServices' => $clientServices]);

        return response()->json([
            'clientServices' => $clientServices
        ]);
    }


}
