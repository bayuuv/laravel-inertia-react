<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Auth/Login');
    }

    public function register()
    {
        return inertia('Auth/Register');
    }

    public function save(Request $request)
    {
        $this->validate($request,[
            'email'     => 'required|email',
            'password'  => 'required'
        ]);

        $credentials = $request->only('email', 'password');

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();

            //redirect
            return redirect('/posts');
        }

        //redirect
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'name'      => 'required',
            'email'     => 'required|unique:users',
            'password'  => 'required'
        ]);

        User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => bcrypt($request->password)
        ]);

        //redirect
        return redirect('/login')->with('success', 'Register Berhasil!');
    }

    public function destroy()
    {
        auth()->logout();

        return redirect('/login');
    }
}
