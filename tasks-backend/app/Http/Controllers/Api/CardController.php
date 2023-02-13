<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Card;
use App\Models\User;
use Illuminate\Http\Request;

class CardController extends ApiBaseController
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string',
            'column_id' => 'required|int'
        ]);

        $card = new Card();

        $card->name = $request->name;
        $card->description = $request->description;
        $card->column_id = $request->column_id;

        if ($card->save())
            return response()->json([
                'success' => true,
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Sorry, board could not be added.'
            ], 500);
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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string',
            'column_id' => 'required|int'
        ]);

        $card = Card::find($id);

        $card->fill($validatedData);

        if ($card->save())
            return response()->json([
                'success' => true,
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Sorry, board could not be added.'
            ], 500);
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
