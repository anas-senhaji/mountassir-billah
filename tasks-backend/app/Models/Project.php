<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function boards()
    {
        return $this->hasMany(Board::class);
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }
}
