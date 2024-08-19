<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SalesController extends Controller
{
    public function sales()
    {

        return Inertia::render('Sales/Sales');
    }
}
