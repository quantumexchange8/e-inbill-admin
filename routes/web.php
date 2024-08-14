<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MerchantController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware('auth')->group(function () {

    /**
     * ==============================
     *           Dashboard
     * ==============================
     */
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
     /**
     * ==============================
     *           Sales Analysis
     * ==============================
     */

     /**
     * ==============================
     *           Merchant
     * ==============================
     */
    Route::prefix('merchant')->group(function () {
        Route::get('/merchant', [MerchantController::class, 'merchant'])->name('merchant.merchant');
        Route::get('/add-merchant', [MerchantController::class, 'addMerchant'])->name('merchant.add-merchant');
    });

     /**
     * ==============================
     *           Module
     * ==============================
     */

     /**
     * ==============================
     *           Invoice
     * ==============================
     */

     /**
     * ==============================
     *           Configuration
     * ==============================
     */


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
