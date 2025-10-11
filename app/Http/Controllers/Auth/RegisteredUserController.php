<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Student;
use App\Models\Faculty;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'role' => 'required|in:student,faculty,admin',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'school_id' => 'nullable|string|max:50',

            // Role-based fields
            'course' => 'nullable|in:BSIT,BSIS,BSCA,BSCS',
            'year' => 'nullable|in:1,2,3,4',
            'position' => 'nullable|string|max:100',
            'department' => 'nullable|string|max:100',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'school_id' => $request->school_id,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        if ($user->role === 'student') {
            Student::create([
                'user_id' => $user->id,
                'course' => $request->course,
                'year' => $request->year,
            ]);
        } elseif ($user->role === 'faculty') {
            Faculty::create([
                'user_id' => $user->id,
                'position' => $request->position,
                'department' => $request->department,
            ]);
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
