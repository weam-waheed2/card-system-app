<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LogController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::match(['get', 'post'],'/login', [AuthController::class, 'login']);
Route::match(['get', 'post'],'/register', [AuthController::class, 'register']);


// User routes
Route::middleware('auth:sanctum')->group(function () {
    Route::resource('/cards',CardController::class);
    Route::get('/cards/{id}/qr', [CardController::class, 'generateQrCode']);
    Route::match(['get', 'post'],'/upload', [CardController::class, 'store']);
    // Route::put('/update/{id}', [CardController::class, 'update']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::resource('/admin/users',UserController::class);
    Route::resource('/admin/logs',LogController::class);
});
