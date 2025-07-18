<?php

use App\Http\Controllers\ClientsController;
use App\Http\Controllers\LeadsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', 'login');

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('/clients-{status}', [ClientsController::class, 'fetchClients'])->name('clients');
Route::get('/client/{id}', [ClientsController::class, 'getClientDetails']);
Route::get('/client/{clientId}/services', [ClientsController::class, 'viewClientServices']);
Route::post('/add-client', [ClientsController::class, 'addClient']);

Route::get('/leads-{status}', [LeadsController::class, 'fetchLeads'])->name('leads');
Route::get('/lead/{id}', [LeadsController::class, 'getLeadDetails']);
Route::post('/add-lead', [LeadsController::class, 'addLead']);

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');

});

require __DIR__ . '/auth.php';
