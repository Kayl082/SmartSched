import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { 
    Bars3Icon, 
    XMarkIcon,
    HomeIcon,
    CalendarDaysIcon,
    BuildingOfficeIcon,
    DocumentChartBarIcon,
    QuestionMarkCircleIcon,
    ArrowRightOnRectangleIcon,
    ClipboardDocumentListIcon
} from "@heroicons/react/24/outline";


export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    
    // sidebar
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
      <div className="min-h-screen bg-gray-100">
            <nav className="border-b-4 border-[#40d3c8] bg-[#cbfffb] shadow-[0_2px_8px_#40d3c84d]">
                <div className="w-full px-4 sm:px-6 ">
                    <div className="flex h-12 justify-between">
                       <div className="flex items-center -ml-8">
                            <Link href="/">
                                <div className="scale-50">
                                    <ApplicationLogo className="block h-6 w-auto fill-current" />
                                </div>
                            </Link>
                        </div>

                        <div className="hidden sm:flex sm:items-center">
                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                             active={route().current('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <div
                    className={`flex bg-[#1fa59cff] text-white flex-col transition-all duration-300 rounded-r-[25px] shadow-md shadow-[0_0_12px_#1fa59cff]  ${
                        isCollapsed ? 'w-16' : 'w-64'
                    }`}
                    >

                    <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="px-4 py-2 focus:outline-none"
                    >
                    {isCollapsed ? (
                        <Bars3Icon className="h-6 w-6" />
                    ) : (
                       <Bars3Icon className="h-6 w-6" />
                    )}
                    </button>
                    

                    <div className='mt-4'>


                        <div className="">
                            <NavLink
                                href={route('dashboard')}
                                active={route().current('dashboard')}
                                className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('dashboard') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}
                            >
                                <HomeIcon className="h-5 w-5 flex-shrink-0" />
                                {!isCollapsed && <span>Dashboard</span>}
                            </NavLink>
                        </div>

                        {(user.role === 'student' || user.role === 'faculty') && (
                        <>
                            
                            <div className="">
                                <NavLink href={route('user.myBookings')}
                                 active={route().current('user.myBookings')}
                                  className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('user.myBookings') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}>
                                    
                                    <CalendarDaysIcon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && <span>My Bookings</span>}
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('user.browseRooms')} 
                                active={route().current('user.browseRooms')}
                                className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('user.browseRooms') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}>
                                    <BuildingOfficeIcon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && <span>Browse Rooms</span>}
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('user.reports')} 
                                active={route().current('user.reports')}
                                className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('user.reports') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}>
                                    <DocumentChartBarIcon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && <span>Reports</span>}
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('user.help')} 
                                active={route().current('user.help')}
                                className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('user.help') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}>
                                    <QuestionMarkCircleIcon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && <span>Help</span>}
                                </NavLink>
                            </div>
                        </>
                        )}

                        

                        {user.role === 'admin' && (
                        <>
                            <div className="">
                                <NavLink href={route('admin.manageBookings')} 
                                active={route().current('admin.manageBookings')}
                                className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('admin.manageBookings') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}>
                                    <ClipboardDocumentListIcon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && <span>Manage Bookings</span>}
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('admin.manageRooms')} 
                                active={route().current('admin.manageRooms')}
                                className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('admin.manageRooms') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}>
                                    <BuildingOfficeIcon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && <span>Manage Rooms</span>}
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('admin.reports')} 
                                active={route().current('admin.reports')}
                                className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('admin.reports') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}>
                                    <DocumentChartBarIcon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && <span>Reports</span>}
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('admin.help')} 
                                active={route().current('admin.help')}
                                className={`gap-3 w-full px-4 py-3 flex items-center transition-colors duration-200 ${
                                    route().current('admin.help') 
                                        ? 'bg-[#2dd4c7] border-l-4 border-white text-white' 
                                        : 'hover:bg-[#3be8da] text-white'
                                }`}>
                                    <QuestionMarkCircleIcon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && <span>Help</span>}
                                </NavLink>
                            </div>
                        </>
                        )}

                        <div className="mt-4">
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#3be8da] transition-colors duration-200 text-white"
                            >
                                <ArrowRightOnRectangleIcon className="h-5 w-5 flex-shrink-0" />
                                {!isCollapsed && <span>Log Out</span>}
                            </ResponsiveNavLink>
                        </div>


                    </div>
                    
                    
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                    {header && (
                <header className="shadow-[0_0_12px_#40d3c8cc] ">

                        <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                        </div>
                    </header>
                    )}

                    <main className="flex-1 p-4">{children}</main>
                </div>
            </div>
            
            
        </div>
    );
}