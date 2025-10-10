import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    const [sortBy, setSortBy] = useState('recent');
    
    // Sample room data
    const availableRooms = [
        { id: 1, name: 'Room 101', capacity: 4, status: 'available' },
        { id: 2, name: 'Room 202', capacity: 6, status: 'available' },
        { id: 3, name: 'Room 303', capacity: 8, status: 'available' },
    ];
    
    const allRooms = [
        { id: 4, name: 'Room 104', capacity: 4, status: 'occupied' },
        { id: 5, name: 'Room 205', capacity: 6, status: 'occupied' },
        { id: 6, name: 'Room 306', capacity: 8, status: 'maintenance' },
        { id: 7, name: 'Room 107', capacity: 4, status: 'available' },
        { id: 8, name: 'Room 208', capacity: 6, status: 'occupied' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Browse Rooms
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Sort by:</span>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-md border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="name">Name</option>
                            <option value="capacity">Capacity</option>
                            <option value="status">Status</option>
                        </select>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-8">
                    {/* Available Rooms Section */}
                    <div className="bg-[#a4dad6ff] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Available Rooms
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {availableRooms.map((room) => (
                                <div 
                                    key={room.id}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {room.name}
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-600">
                                            Capacity: <span className="font-medium">{room.capacity} people</span>
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                                            <span className="text-sm text-green-600 font-medium capitalize">
                                                {room.status}
                                            </span>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full text-white py-2 px-4 rounded-md bg-[#017997ff] text-white hover:bg-[#1c839cff] transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                      {/* All Rooms Section - Not sure if dre nalang ibutang ang sort*/}
                    <div className="bg-[#d4d8d8ff] rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                            All Rooms
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {allRooms.map((room) => (
                                <div 
                                    key={room.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:shadow-[#3f95aa66]"
                                >
                                    {/* Room Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        {/* Status Badge */}
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                room.status === 'available' ? 'bg-green-500 text-white' :
                                                room.status === 'occupied' ? 'bg-red-500 text-white' :
                                                'bg-yellow-500 text-white'
                                            }`}>
                                                {room.status}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Room Details */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {room.name}
                                        </h3>
                                        <div className="space-y-2 mb-4">
                                            <p className="text-sm text-gray-600">
                                                Capacity: <span className="font-medium">{room.capacity} people</span>
                                            </p>
                                        </div>
                                        <button 
                                            className={`w-full py-2 px-4 rounded-md transition-colors font-medium ${
                                                room.status === 'available' 
                                                    ? 'bg-[#017997ff] text-white hover:bg-[#1c839cff]' 
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                            disabled={room.status !== 'available'}
                                        >
                                            {room.status === 'available' ? 'Book Now' : 'Unavailable'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </AuthenticatedLayout>
    );
}