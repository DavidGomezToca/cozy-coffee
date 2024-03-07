<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignUpRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(SignUpRequest $request)
    {
        $data = $request->validated();
    }
    public function login(Request $request)
    {
    }
    public function logout(Request $request)
    {
    }
}
