<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request) {
        $users = User::all();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $input=$request->all();
        $user=User::create($input);
        return response(null,200);
    }

    public function show($id)
    {
        $user = User::find($id);
        if(is_null($user)){
            return response(['message'=>'user not found'],404);
        }
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
        $input=$request->all();
        $user->name = $input['name'];
        $user->email = $input['email'];
        $user->role = $input['role'];
        $user->is_active = $input['is_active'];
        $user->save();
        return response(null,200);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response(null, 200);
    }
}
