import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ManageRooms() {
    const [sortBy, setSortBy] = useState('recent');
    const [showAddModal, setShowAddModal] = useState(false);
    
    // Sample room data
    const rooms = [
        { id: 1, name: 'Room 101', capacity: 4, status: 'available', image: null },
        { id: 2, name: 'Room 202', capacity: 6, status: 'available', image: null },
        { id: 3, name: 'Room 303', capacity: 8, status: 'occupied', image: null },
        { id: 4, name: 'Room 104', capacity: 4, status: 'occupied', image: null },
        { id: 5, name: 'Room 205', capacity: 6, status: 'maintenance', image: null },
        { id: 6, name: 'Room 306', capacity: 8, status: 'available', image: null },
    ];

    const handleEdit = (roomId) => {
        console.log('Edit room:', roomId);
        
    };

    const handleDelete = (roomId) => {
        if (confirm('Are you sure you want to delete this room?')) {
            console.log('Delete room:', roomId);
            // 
        }
    };

    const handleBookWalkIn = (roomId) => {
        console.log('Book walk-in for room:', roomId);
        // 
    };

    const handleAddRoom = () => {
        console.log('Add new room');
        setShowAddModal(false);
       
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Manage Rooms
                    </h2>
                    <div className="flex items-center gap-4">
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
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-[#017997ff] text-white px-6 py-2 rounded-md hover:bg-[#1c839cff] transition-colors font-medium flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Room
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Manage Rooms" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* All Rooms Section */}
                    <div className="bg-[#a4dad6ff] rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                            All Rooms
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {rooms.map((room) => (
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
                                        
                                        {/* Action Buttons */}
                                        <div className="space-y-2">
                                            <div className="flex gap-2">
                                                <button 
                                                    onClick={() => handleEdit(room.id)}
                                                    className="flex-1 bg-[#017997ff] text-white py-2 px-4 rounded-md hover:bg-[#1c839cff] transition-colors font-medium flex items-center justify-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(room.id)}
                                                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                            <button 
                                                onClick={() => handleBookWalkIn(room.id)}
                                                className={`w-full py-2 px-4 rounded-md transition-colors font-medium flex items-center justify-center gap-2 ${
                                                    room.status === 'available' 
                                                        ? 'bg-green-500 text-white hover:bg-green-600' 
                                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                                disabled={room.status !== 'available'}
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                {room.status === 'available' ? 'Book Walk-In' : 'Not Available'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Room Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-semibold text-gray-900">Add New Room</h3>
                            <button 
                                onClick={() => setShowAddModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Room Name
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#017997ff] focus:border-transparent"
                                    placeholder="e.g., Room 101"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Capacity
                                </label>
                                <input 
                                    type="number" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#017997ff] focus:border-transparent"
                                    placeholder="e.g., 4"
                                    min="1"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Status
                                </label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#017997ff] focus:border-transparent">
                                    <option value="available">Available</option>
                                    <option value="occupied">Occupied</option>
                                    <option value="maintenance">Maintenance</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Room Image
                                </label>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#017997ff] focus:border-transparent"
                                />
                            </div>
                            
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAddRoom}
                                    className="flex-1 px-4 py-2 bg-[#017997ff] text-white rounded-md hover:bg-[#1c839cff] transition-colors font-medium"
                                >
                                    Add Room
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}