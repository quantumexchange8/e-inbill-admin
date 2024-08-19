<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    public function invoice()
    {

        return Inertia::render('Invoice/Invoice');
    }
}
