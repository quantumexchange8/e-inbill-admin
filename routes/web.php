<?php

use App\Http\Controllers\ConfigurationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\MerchantController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\SalesController;
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
    Route::prefix('sales')->group(function () {
        Route::get('/sales-analysis', [SalesController::class, 'sales'])->name('sales.sales-analysis');
    });

     /**
     * ==============================
     *           Merchant
     * ==============================
     */
    Route::prefix('merchant')->group(function () {
        Route::get('/merchant', [MerchantController::class, 'merchant'])->name('merchant.merchant');
        Route::get('/add-merchant', [MerchantController::class, 'addMerchant'])->name('merchant.add-merchant');
        Route::post('/new-merchant', [MerchantController::class, 'newMerchant'])->name('merchant.new-merchant');
        Route::get('/getClassification', [MerchantController::class, 'getClassification'])->name('merchant.getClassification');
    });

     /**
     * ==============================
     *           Module
     * ==============================
     */
    Route::prefix('module')->group(function () {
        Route::get('/module', [ModuleController::class, 'module'])->name('module.module');
    });

     /**
     * ==============================
     *           Invoice
     * ==============================
     */
    Route::get('/invoive-billing', [InvoiceController::class, 'invoice'])->name('invoive-billing');

     /**
     * ==============================
     *           Configuration
     * ==============================
     */
    Route::prefix('configuration')->group(function () {
        Route::get('/configuration', [ConfigurationController::class, 'configuration'])->name('configuration.configuration');
    });


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
