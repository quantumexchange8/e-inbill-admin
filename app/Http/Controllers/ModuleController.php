<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ModuleController extends Controller
{
    public function module()
    {

        return Inertia::render('Module/Module');
    }
}
