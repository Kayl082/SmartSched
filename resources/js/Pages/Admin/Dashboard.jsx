import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    // Sample data
    const stats = {
        totalBookings: 156,
        pendingApproval: 8,
        activeToday: 12,
        availableRooms: 5,
        occupancyRate: 78
    };

    const recentActivity = [
        { id: 1, type: 'booking', user: 'Shuntskie Sahur', action: 'booked Room 101', time: '5 mins ago', status: 'pending' },
        { id: 2, type: 'cancellation', user: 'Nyalskie Sahur', action: 'cancelled Room 202', time: '15 mins ago', status: 'cancelled' },
        { id: 3, type: 'booking', user: 'Lalaiskie Sahur', action: 'booked Room 303', time: '1 hour ago', status: 'approved' },
        { id: 4, type: 'booking', user: 'Jaicskie Sahur', action: 'booked Room 104', time: '2 hours ago', status: 'pending' },
    ];

    const upcomingBookings = [
    { id: 1, room: 'ICT 3A', time: '10:00 AM', user: 'Lalaiskie Sahur', status: 'confirmed' },
    { id: 2, room: 'ICT 3B', time: '2:00 PM', user: 'Jaicskie Sahur', status: 'confirmed' },
    { id: 3, room: 'ICT 3C', time: '4:00 PM', user: 'Nyalskie Sahur', status: 'pending' },
];

const popularRooms = [
    { name: 'ICT 3A', bookings: 45, rating: 4.8 },
    { name: 'ICT 3B', bookings: 38, rating: 4.6 },
    { name: 'ICT 3C', bookings: 32, rating: 4.7 },
  
];


    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold leading-tight text-gray-800">
                            Dashboard
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">Welcome back, Admin! Here's what's happening today.</p>
                    </div>
                    <div className="text-sm text-gray-600">
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        
                        {/* Large Featured Card - Pending Approvals */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 p-8 rounded-xl shadow-xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10 text-9xl">⚡</div>
                            <div className="relative z-10">
                                <p className="text-sm font-medium opacity-90 uppercase tracking-wide">Action Required</p>
                                <div className="flex items-end gap-4 mt-2">
                                    <p className="text-6xl font-bold">{stats.pendingApproval}</p>
                                    <p className="text-xl mb-2 opacity-90">Pending Approvals</p>
                                </div>
                                <button className="mt-4 bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                                    Review Now →
                                </button>
                            </div>
                        </div>

                        {/* Active Today */}
                        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-6 rounded-xl shadow-lg text-white">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-sm font-medium opacity-90">Active Today</p>
                                    <p className="text-4xl font-bold mt-2">{stats.activeToday}</p>
                                    <p className="text-xs mt-1 opacity-80">Bookings in progress</p>
                                </div>
                                <div className="text-5xl opacity-80">📅</div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                                <p className="text-sm opacity-90">+23% from yesterday</p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white p-5 rounded-lg shadow border-l-4 border-teal-500">
                            <p className="text-sm text-gray-600 font-medium">Total Bookings</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{stats.totalBookings}</p>
                            <p className="text-xs text-gray-500 mt-1">This month</p>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow border-l-4 border-cyan-500">
                            <p className="text-sm text-gray-600 font-medium">Available Rooms</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{stats.availableRooms}</p>
                            <p className="text-xs text-gray-500 mt-1">Right now</p>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow border-l-4 border-emerald-500">
                            <p className="text-sm text-gray-600 font-medium">Occupancy Rate</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{stats.occupancyRate}%</p>
                            <p className="text-xs text-gray-500 mt-1">Average today</p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow border-l-4 border-amber-500">
                            <p className="text-sm text-gray-600 font-medium">Most Requested</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">ICT 3A</p>
                            <p className="text-xs text-gray-500 mt-1">45 bookings</p>
                        </div>
                        
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        
                        {/* Recent Activity */}
                        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
                                <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">View All</button>
                            </div>
                            <div className="space-y-3">
                                {recentActivity.map((activity) => (
                                    <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${
                                                activity.status === 'pending' ? 'bg-amber-500' :
                                                activity.status === 'approved' ? 'bg-teal-500' :
                                                'bg-gray-400'
                                            }`}></div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">
                                                    {activity.user}
                                                </p>
                                                <p className="text-xs text-gray-600">{activity.action}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-500">{activity.time}</p>
                                            <span className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                                                activity.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                                activity.status === 'approved' ? 'bg-teal-100 text-teal-700' :
                                                'bg-gray-100 text-gray-700'
                                            }`}>
                                                {activity.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popular Rooms */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Rooms</h3>
                            <div className="space-y-4">
                                {popularRooms.map((room, index) => (
                                    <div key={room.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800 text-sm">{room.name}</p>
                                                <div className="flex items-center gap-1 mt-1">
                                                    <span className="text-yellow-500 text-xs">★</span>
                                                    <span className="text-xs text-gray-600">{room.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-teal-600">{room.bookings}</p>
                                            <p className="text-xs text-gray-500">bookings</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Today's Schedule */}
                    <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Today's Schedule</h3>
                            <span className="text-sm text-gray-600">Friday, October 10, 2025</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {upcomingBookings.map((booking) => (
                                <div key={booking.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-semibold text-gray-800">{booking.room}</p>
                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                            booking.status === 'confirmed' 
                                                ? 'bg-teal-100 text-teal-700' 
                                                : 'bg-amber-100 text-amber-700'
                                        }`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold text-teal-600 mb-1">{booking.time}</p>
                                    <p className="text-sm text-gray-600">{booking.user}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}