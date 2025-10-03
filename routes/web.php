<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

{/*}
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
*/}

Route::get('/', function () {
    return Auth::check() ? redirect('/dashboard') : redirect('/login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $role = auth()->user()->role;

        return match ($role) {
            'student' => Inertia::render('User/Dashboard'),
            'faculty' => Inertia::render('User/Dashboard'),
            'admin' => Inertia::render('Admin/Dashboard'),
            default => abort(403),
        };
    })->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    // User routes
    Route::middleware('auth')->group(function () {
        Route::get('/user/myBookings', fn() => Inertia::render('User/MyBookings'))->name('user.myBookings');
        Route::get('/user/browseRooms', fn() => Inertia::render('User/BrowseRooms'))->name('user.browseRooms');
        Route::get('/user/reports', fn() => Inertia::render('User/Reports'))->name('user.reports');
        Route::get('/user/help', fn() => Inertia::render('User/Help'))->name('user.help');
    });

    
    // Admin routes
    Route::middleware('auth')->group(function () {
        Route::get('/admin/manageBookings', fn() => Inertia::render('Admin/ManageBookings'))->name('admin.manageBookings');
        Route::get('/admin/manageRooms', fn() => Inertia::render('Admin/ManageRooms'))->name('admin.manageRooms');
        Route::get('/admin/reports', fn() => Inertia::render('Admin/Reports'))->name('admin.reports');
        Route::get('/admin/help', fn() => Inertia::render('Admin/Help'))->name('admin.help');
    });
    
});

require __DIR__.'/auth.php';
