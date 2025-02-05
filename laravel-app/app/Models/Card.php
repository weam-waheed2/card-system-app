<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'name', 'company', 'position', 'email', 'phone', 
        'mobile', 'address', 'company_address', 'logo', 'is_active'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
