<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\OrganizationController ;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['jwt.auth']], function () {
    Route::apiResource('projects', 'ProjectController');
    Route::apiResource('boards', 'BoardController');
    Route::apiResource('cards', 'CardController');
    Route::apiResource('users', 'UserController');
    Route::apiResource('organizations', 'OrganizationController');
});

Route::group(['middleware' => 'api'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
});
