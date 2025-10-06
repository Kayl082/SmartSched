import ApplicationLogo from '@/Components/ApplicationLogo';

import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
       <section className="min-h-screen flex items-center justify-center p-8">
  <div
  className="w-full max-w-4xl bg-white rounded-[35px] overflow-hidden"
  style={{ boxShadow: "0 0 20px #18bbb0ff" }}
>

    <div className="flex">
                
                {/* Left Section (Form) */}
                 <div className="hidden sm:block sm:w-1/2 bg-gray-200">
                    <img
                        src="/logo-illus.jpg" 
                        alt="Login Illustration"
                        className="h-full w-full object-cover"
                    />
                </div>
                

                {/* Right Section (Picture) */}
               <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                    <div className="flex justify-center mb-6">
                        <Link href="/">
                            <ApplicationLogo className="h-16 w-16 fill-current text-gray-500" />
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
             </div>
        </section>
    );
}
