<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Merchant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('merchant_role_id', 'password');

        // Validate the request data
        $validator = Validator::make($credentials, [
            'merchant_role_id' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'user' => null,
                'message' => 'Validation error',
                'status' => 'failed',
                'errors' => $validator->errors()
            ], 400);
        }

        // Find the merchant by role_id
        $merchant = Merchant::where('merchant_role_id', $credentials['merchant_role_id'])->first();

        if (!$merchant || !Hash::check($credentials['password'], $merchant->password)) {
            return response()->json([
                'user' => null,
                'message' => 'Invalid login details',
                'status' => 'failed',
            ], 200);
        }

        if ($merchant->status === 'Inactive') {
            return response()->json([
                'message' => 'This merchant is Inactive',
                'status' => 'failed',
            ], 200);
        }

        // Create a token for the authenticated merchant
        $token = $merchant->createToken('API Token')->plainTextToken;

        $user_loggedin = [
            'id' => $merchant->id,
            'merchant_role_id' => $merchant->merchant_role_id,
            'status' => 'loggedin',
            'token' => $token,
        ];

        return response()->json($user_loggedin, 200);
    }
}
