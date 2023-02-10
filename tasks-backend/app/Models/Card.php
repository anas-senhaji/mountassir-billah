<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    public function column(){
        return $this->belongsTo(Column::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }
}
