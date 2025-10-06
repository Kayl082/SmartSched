import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-3 mt-4 px-4 py-3 text-base font-semibold leading-6 transition-all duration-300 ease-in-out focus:outline-none rounded-t-lg ' +
                (active
                    ? 'border-[#40d3c8] text-[#0e7373] bg-[#40d3c8]/10 shadow-sm'
                    : 'border-transparent text-[#253a48]/70 hover:border-[#40d3c8]/50 hover:text-[#2bf9ff] hover:bg-[#40d3c8]/5 focus:border-[#40d3c8]/50 focus:text-[#1fa698]') +
                ' ' + className
            }
        >
            {children}
        </Link>
    );
}