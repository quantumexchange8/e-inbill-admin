<?php

namespace App\Http\Controllers;

use App\Models\Classification;
use App\Models\Merchant;
use App\Models\User;
use App\Services\RunningNumberService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class MerchantController extends Controller
{
    public function merchant()
    {

        $merchantNo = Merchant::count();

        return Inertia::render('Merchant/Merchant', [
            'merchantNo' => $merchantNo,
        ]);
    }

    public function addMerchant()
    {

        

        return Inertia::render('Merchant/AddMerchant');
    }

    public function newMerchant(Request $request)
    {

        $merchant = Merchant::create([
            'merchant_id' => RunningNumberService::getID('merchant'),
            'merchant_name' => $request->merchant_name,
            'merchant_email' => $request->merchant_email,
            'tin_no' => $request->tin_no,
            'registration_no' => $request->registration_no,
            'classification_id' => $request->classification_id['id'],
            'address' => $request->address,
            'postcode' => $request->postcode,
            'area' => $request->area,
            'state' => $request->state,
            'phone' => $request->phone,
        ]);

        $user = User::create([
            'name' => $request->account_name,
            'email' => $request->merchant_email,
            'password' => Hash::make($request->password),
            'role' => 'admin',
            'role_id' => $request->role_id,
            'merchant_id' => $merchant->id,
        ]);

        return redirect(route('merchant.merchant'))->with('success');
    }

    public function getClassification()
    {

        $classification = Classification::query();

        $datas = $classification->get();

        return response()->json($datas);
    }
}
