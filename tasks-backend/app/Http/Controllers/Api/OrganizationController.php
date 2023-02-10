<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Board;
use App\Models\Organization;

class OrganizationController extends Controller
{
    //
    public function index()
    {
        return Organization::find(1008)->load(['users'=>function($query){
            $query->paginate(1);
        }]);
    }
}
