<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Board;
use App\Models\Organization;

class OrganizationController extends ApiBaseController
{
    //
    public function index()
    {
        return Organization::find(1008)->with('users')->paginate(25);
    }
}
