import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    My Bookings
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden ">
                        <div className="p-6 text-gray-900">

                            {/* Active Bookings Section */}
                            <div className=" p-6 mb-12 overflow-hidden bg-[#b9f5f1ff] shadow-xl sm:rounded-lg shadow-b">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    Active Bookings
                                </h3>

                                {/* Active Booking Cards */}
                                <div className="space-y-4">
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                        <h4 className="font-semibold text-gray-800">Room 1</h4>
                                        <p className="text-sm text-gray-600">Booking Date: 12th Oct, 2025</p>
                                        <p className="text-sm text-gray-600">Status: Active</p>
                                        <div className="mt-4">
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                        <h4 className="font-semibold text-gray-800">Room 2</h4>
                                        <p className="text-sm text-gray-600">Booking Date: 15th Oct, 2025</p>
                                        <p className="text-sm text-gray-600">Status: Active</p>
                                        <div className="mt-4">
                                            <button className="bg-[#017997ff] text-white px-4 py-2 rounded-lg hover:bg-[#0f87a5ff]" >
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            {/* Separate Section for Awaiting Approval and History */}
                            <div className="grid grid-cols-2 gap-6">
                                
                                {/* Awaiting Approval Card */}
                                <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                                    <h4 className="font-semibold text-gray-800">Awaiting Approval</h4>
                                    <p className="text-sm text-gray-600">Room 3 is awaiting approval</p>
                                    <div className="mt-4 space-x-4">
                                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                                            Awaiting Approval
                                        </button>
                                    </div>
                                </div>

                                {/* History Card */}
                                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                                    <h4 className="font-semibold text-gray-800">History</h4>
                                    <p className="text-sm text-gray-600">Room 4 was completed on 1st Oct, 2025</p>
                                    <div className="mt-4">
                                        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                                            History
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
