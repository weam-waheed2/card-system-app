<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;

class LogController extends Controller
{
    public function index(Request $request) {
        $perPage = $request->query('per_page', 10);
        $logs = Log::paginate($perPage);
        return response()->json($logs);
    }
    public function store(Request $request) {
        Log::create([
            'user_id' => $request->user_id,
            'action' => $request->action,
            'ip_address' => $request->ip_address,
            'mac_address' => $request->mac_address,
        ]);

        return response()->json(['message' => 'Log saved']);
    }
}
