<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MerchantController extends Controller
{
    public function merchant()
    {

        return Inertia::render('Merchant/Merchant');
    }
}
