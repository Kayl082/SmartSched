import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ManageBookings() {
    const [sortBy, setSortBy] = useState('recent');
    const [activeTab, setActiveTab] = useState('pending'); // Start with pending

    // Sample booking data
    const activeBookings = [
        { id: 1, room: 'Room 101', user: 'John Doe', date: '12th Oct, 2025', time: '10:00 AM - 12:00 PM', status: 'active' },
        { id: 2, room: 'Room 202', user: 'Jane Smith', date: '15th Oct, 2025', time: '2:00 PM - 4:00 PM', status: 'active' },
        { id: 3, room: 'Room 303', user: 'Mike Johnson', date: '13th Oct, 2025', time: '1:00 PM - 3:00 PM', status: 'active' },
    ];

    const pendingBookings = [
        { id: 4, room: 'Room 104', user: 'Sarah Williams', date: '16th Oct, 2025', time: '9:00 AM - 11:00 AM', status: 'pending', urgent: true },
        { id: 5, room: 'Room 205', user: 'David Brown', date: '17th Oct, 2025', time: '3:00 PM - 5:00 PM', status: 'pending', urgent: false },
    ];

    const completedBookings = [
        { id: 6, room: 'Room 306', user: 'Emily Davis', date: '1st Oct, 2025', time: '10:00 AM - 12:00 PM', status: 'completed' },
        { id: 7, room: 'Room 107', user: 'Robert Miller', date: '5th Oct, 2025', time: '2:00 PM - 4:00 PM', status: 'completed' },
    ];

    // Calculate statistics
    const todayPending = pendingBookings.filter(b => b.date === '10th Oct, 2025').length;
    const urgentPending = pendingBookings.filter(b => b.urgent).length;
    const todayActive = activeBookings.filter(b => b.date === '10th Oct, 2025').length;

    const handleView = (bookingId) => {
        console.log('View booking:', bookingId);
    };

    const handleApprove = (bookingId) => {
        console.log('Approve booking:', bookingId);
    };

    const handleReject = (bookingId) => {
        if (confirm('Are you sure you want to reject this booking?')) {
            console.log('Reject booking:', bookingId);
        }
    };

    const handleCancel = (bookingId) => {
        if (confirm('Are you sure you want to cancel this booking?')) {
            console.log('Cancel booking:', bookingId);
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Manage Bookings
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Sort by:</span>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-md border-gray-300 px-4 py-2 text-sm focus:border-teal-500 focus:ring-teal-500"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="date">Date</option>
                            <option value="room">Room</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                </div>
            }
        >
            <Head title="Manage Bookings" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-6 rounded-lg shadow-lg text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium opacity-90">Pending Approval</p>
                                    <p className="text-3xl font-bold mt-1">{pendingBookings.length}</p>
                                    {urgentPending > 0 && (
                                        <p className="text-xs mt-1 bg-red-600 inline-block px-2 py-1 rounded">
                                            {urgentPending} Urgent
                                        </p>
                                    )}
                                </div>
                                <div className="text-4xl opacity-80">⏳</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-teal-400 to-teal-600 p-6 rounded-lg shadow-lg text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium opacity-90">Active Today</p>
                                    <p className="text-3xl font-bold mt-1">{todayActive}</p>
                                    <p className="text-xs mt-1 opacity-80">Total: {activeBookings.length}</p>
                                </div>
                                <div className="text-4xl opacity-80">✓</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-6 rounded-lg shadow-lg text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium opacity-90">Total Active</p>
                                    <p className="text-3xl font-bold mt-1">{activeBookings.length}</p>
                                    <p className="text-xs mt-1 opacity-80">All bookings</p>
                                </div>
                                <div className="text-4xl opacity-80">📅</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-500 to-teal-700 p-6 rounded-lg shadow-lg text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium opacity-90">Completed</p>
                                    <p className="text-3xl font-bold mt-1">{completedBookings.length}</p>
                                    <p className="text-xs mt-1 opacity-80">This month</p>
                                </div>
                                <div className="text-4xl opacity-80">📊</div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-2 mb-6 border-b border-teal-200">
                        <button
                            onClick={() => setActiveTab('pending')}
                            className={`px-6 py-3 font-medium transition-colors relative ${
                                activeTab === 'pending'
                                    ? 'text-teal-700 border-b-2 border-teal-600'
                                    : 'text-gray-600 hover:text-teal-600'
                            }`}
                        >
                            Pending Approval
                            {pendingBookings.length > 0 && (
                                <span className="ml-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                                    {pendingBookings.length}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === 'active'
                                    ? 'text-teal-700 border-b-2 border-teal-600'
                                    : 'text-gray-600 hover:text-teal-600'
                            }`}
                        >
                            Active Bookings
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === 'history'
                                    ? 'text-teal-700 border-b-2 border-teal-600'
                                    : 'text-gray-600 hover:text-teal-600'
                            }`}
                        >
                            History
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="overflow-hidden">
                        
                        {/* Pending Bookings Tab */}
                        {activeTab === 'pending' && (
                            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Awaiting Your Approval
                                    </h3>
                                    {pendingBookings.length === 0 && (
                                        <span className="text-sm text-teal-600 font-medium">All caught up! 🎉</span>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    {pendingBookings.map((booking) => (
                                        <div key={booking.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-semibold text-gray-800 text-lg">{booking.room}</h4>
                                                        {booking.urgent && (
                                                            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                                                                Urgent
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-600 mt-1">User: {booking.user}</p>
                                                    <p className="text-sm text-gray-600">Date: {booking.date}</p>
                                                    <p className="text-sm text-gray-600">Time: {booking.time}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button 
                                                        onClick={() => handleApprove(booking.id)}
                                                        className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                                                    >
                                                        ✓ Approve
                                                    </button>
                                                    <button 
                                                        onClick={() => handleReject(booking.id)}
                                                        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
                                                    >
                                                        ✕ Reject
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Active Bookings Tab */}
                        {activeTab === 'active' && (
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    Active Bookings
                                </h3>
                                <div className="space-y-4">
                                    {activeBookings.map((booking) => (
                                        <div key={booking.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-500">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 text-lg">{booking.room}</h4>
                                                    <p className="text-sm text-gray-600 mt-1">User: {booking.user}</p>
                                                    <p className="text-sm text-gray-600">Date: {booking.date}</p>
                                                    <p className="text-sm text-gray-600">Time: {booking.time}</p>
                                                    <p className="text-sm text-teal-600 font-medium mt-1">Status: Active</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button 
                                                        onClick={() => handleView(booking.id)}
                                                        className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                                                    >
                                                        View
                                                    </button>
                                                    <button 
                                                        onClick={() => handleCancel(booking.id)}
                                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* History Tab */}
                        {activeTab === 'history' && (
                            <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    Booking History
                                </h3>
                                <div className="space-y-4">
                                    {completedBookings.map((booking) => (
                                        <div key={booking.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-slate-400">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">{booking.room}</h4>
                                                    <p className="text-sm text-gray-600 mt-1">User: {booking.user}</p>
                                                    <p className="text-sm text-gray-600">Date: {booking.date}</p>
                                                    <p className="text-sm text-gray-600">Time: {booking.time}</p>
                                                    <p className="text-sm text-slate-600 font-medium mt-1">Status: Completed</p>
                                                </div>
                                                <button 
                                                    onClick={() => handleView(booking.id)}
                                                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}