<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('/clients', function () {
    return Inertia::render('clients');
})->name('clients');

Route::get('/leads', function () {
    return Inertia::render('leads');
})->name('leads');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
