<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

    public function boards()
    {
        return $this->belongsToMany(Board::class);
    }

    public function cards()
    {
        return $this->belongsToMany(Card::class);
    }
}
