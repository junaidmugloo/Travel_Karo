<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Category extends Eloquent
{
    // use HasFactory;


    protected $connection = 'mongodb';

    // Define which attributes are mass assignable
    protected $fillable = [
        'name',
    ];
}
