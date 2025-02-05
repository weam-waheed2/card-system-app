<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Log;
use App\Http\Controllers\LogController;
use Illuminate\Support\Facades\Hash;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    public function testQrCode()
{
    $qrCodePath = 'qrcodes/' . time() . '_' . auth()->id() . '.png';

// Save the QR code to storage
Storage::disk('public')->put($qrCodePath, QrCode::size(300)->generate('A simple example of QR code'));

// Get the correct URL for the saved QR code
return Storage::url($qrCodePath);
}

    public function register(Request $request)
    {
 
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        
        $logData = new Request([
            'user_id' => $user->id,
            'action' => 'User Registered',
            'ip_address' => $request->ip(),
            'mac_address' => exec('getmac')
        ]);
    
        $logController = new LogController();
        $logController->store($logData);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user]);

    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;
            $logData = new Request([
                'user_id' => $user->id,
                'action' => 'User Login',
                'ip_address' => $request->ip(),
                'mac_address' => exec('getmac')
            ]);
        
            $logController = new LogController();
            $logController->store($logData);
            return response()->json([
                'token' => $token,
                'user' => $user,
            ]);
        }

        

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}
