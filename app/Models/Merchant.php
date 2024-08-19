<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;

class Merchant extends Model
{
    use HasFactory, SoftDeletes, HasApiTokens;


    protected $fillable = [
        'merchant_id',
        'merchant_name',
        'merchant_email',
        'tin_no',
        'registration_no',
        'classification_id',
        'address',
        'postcode',
        'area',
        'state',
        'phone',
    ];

}
