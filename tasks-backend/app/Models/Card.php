<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'column_id'];

    public function column(){
        return $this->belongsTo(Column::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }
}
