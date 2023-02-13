<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Column;
use Illuminate\Http\Request;

class ColumnController extends ApiBaseController
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
            'name' => 'required|string|max:255'
        ]);

        $column = new Column();

        $column->name = $request->name;
        $column->board_id = $request->board_id;

        if ($column->save())
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
            'board_id' => 'required|int'
        ]);

        $column = Column::find($id);

        $column->fill($validatedData);

        if ($column->save())
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
        $column = Column::findOrFail($id);

        $column->delete();

        return response()->json(['message' => 'Column deleted successfully.'], 200);
    }
}
