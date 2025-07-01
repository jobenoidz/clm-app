<?php

use App\Http\Controllers\ClientsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', 'login');

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('/clients', [ClientsController::class, 'fetchClients'])->name('clients');
Route::get('/client/{id}', [ClientsController::class, 'getClientDetails']);

Route::get('/leads', function () {
    return Inertia::render('leads');
})->name('leads');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');

});

require __DIR__ . '/auth.php';
