export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
           className={
  `inline-flex items-center rounded-md border border-transparent 
   !bg-[#36b7ae] px-4 py-2 text-xs font-semibold uppercase tracking-widest 
   text-white transition duration-150 ease-in-out 
   hover:!bg-[#2ea29a] focus:!bg-[#2ea29a] 
   focus:outline-none focus:ring-2 focus:!ring-[#40d3c8] focus:ring-offset-2 
   active:bg-gray-900` +
  (disabled ? ' opacity-25' : '') +
  (className ? ` ${className}` : '')
}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
