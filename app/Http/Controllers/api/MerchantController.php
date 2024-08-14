<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MerchantController extends Controller
{
    public function merchant()
    {

        $user = auth()->user();

        $data = [
            'merchant' => $user,
        ];

        return response()->json($data, 200);
    }
}
