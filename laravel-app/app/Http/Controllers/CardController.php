<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Card;
use Illuminate\Support\Facades\Auth;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Storage;

class CardController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->query('per_page', 10);
        if($request->user()->role == 'admin'){
            $cards = Card::paginate($perPage);
            return $cards;
        }
        return Card::where('user_id', $request->user()->id)->paginate($perPage);
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        if (!$request->hasFile('image') || !$request->file('image')->isValid()) {
            return response()->json(['message' => 'Invalid image upload.'], 400);
        }

        try {
            // Store the image in the 'public/logos' directory
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('logos', $imageName, 'public');

            // Save the image name in the database
            $card = Card::create([
                'user_id' => $request->user()->id,
                'name' => $request->name,
                'email' => $request->email,
                'company' => $request->company,
                'position' => $request->position,
                'phone' => $request->phone,
                'mobile' => $request->mobile,
                'address' => $request->address,
                'company_address' => $request->company_address,
                'logo' => $imageName, 
            ]);

            return response()->json(['message' => 'Card created successfully!', 'image' => $imageName], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }



    public function show($id)
    {
        $card = Card::find($id);
        if (!$card) {
            return response()->json(['status' => 'deleted', 'message' => 'This card has been deleted.']);
        }
    
        if ($card->status == 'disabled') {
            return response()->json(['status' => 'disabled', 'message' => 'This card is currently disabled.']);
        }
        return response()->json($card);
    }

    public function update(Request $request, Card $card)
    {
        $input=$request->all();
        $card->name = $input['name'];
        $card->email = $input['email'];
        $card->company = $input['company'];
        $card->position = $input['position'];
        $card->phone = $input['phone'];
        $card->mobile = $input['mobile'];
        $card->address = $input['address'];
        $card->company_address = $input['company_address'];
        $card->is_active = $input['is_active'];
        $card->save();
        return response(null,200);
    }

    public function destroy(Card $card)
    {
        $card->delete();
        return response(null, 200);
    }
}
