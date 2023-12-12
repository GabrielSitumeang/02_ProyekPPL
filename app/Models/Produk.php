<?php

namespace App\Models;

use App\Traits\HasFormatRupiah;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
<<<<<<< HEAD
//<<<<<<< HEAD
use App\Models\Stok;
//=======
use Illuminate\Database\Eloquent\SoftDeletes;
//>>>>>>> f85421aa8fd3710cb439049f8c3f75d8615af685
=======
use App\Models\Stok;

use Illuminate\Database\Eloquent\SoftDeletes;
>>>>>>> e82adcb86218277c5e4e388ba1cfebeb84d31599

class Produk extends Model
{
    use HasFactory;
    use HasFormatRupiah;
    use SoftDeletes;

    protected $fillable = [
        'nama_produk',
        'gambar',
        'harga',
        'stok_id',
        'keterangan',
        'updated_at',
        'created_at'

    ];

    public function pesanan_detail()
    {
        return $this->hasMany('App\Models\PesananDetail', 'produk_id', 'id');
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function pesanan()
    {
        return $this->belongTo(Pesanan::class);
    }

    public function stok()
    {
        return $this->hasOne(Stok::class, 'id', 'stok_id');
    }
}
