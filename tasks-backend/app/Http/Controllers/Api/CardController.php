<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Card;
use App\Models\User;
use Illuminate\Http\Request;

class CardController extends ApiBaseController
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Assign a task to a member.
     *
     * @return \Illuminate\Http\Response
     */
    public function assign(Request $request)
    {
        $card = Card::find($request->id);
        $user = User::find($request->user_id);

        if (!$card->users->contains($user)) {
            $card->users()->attach($user);
            return response()->json([
                'message'=> 'success'
            ]);
        }
        return response()->json([
            'error' => 'Unauthorized'
        ], 401);
    }

    /**
     * change the status of a task.
     *
     * @return \Illuminate\Http\Response
     */
    public function changeStatus(Request $request)
    {
        $card = Card::find($request->id);
        $card->fill(['column_id' => $request->column_id]);
        if ($card->save())
            return response()->json([
               'message'=> 'success'
            ]);
        return response()->json([
            'message'=> 'failed'
        ]);

    }
}
