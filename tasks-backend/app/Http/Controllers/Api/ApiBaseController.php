<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApiBaseController extends Controller
{
    protected $user;

    /**
     * TaskController constructor.
     */
    public function __construct()
    {
       //$this->user = JWTAuth::parseToken()->authenticate();
    }
}
