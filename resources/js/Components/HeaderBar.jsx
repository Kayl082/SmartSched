export default function HeaderBar() {
    return (
       <header
  className="w-full text-white shadow-md"  style={{ backgroundColor: "#1fa59cff" }}>
          <div className="flex justify-between items-center w-full px-8 py-3">
                
    

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {/*<a href="/" className="hover:text-green-200 transition">Home</a>*/}
                    <a href="/about" className="hover:text-green-200 transition">About</a>
                      {/*<a href="/contact" className="hover:text-green-200 transition">Contact</a>*/}
                </nav>

                {/* Logo / App Name */}
                <h1 className="text-lg font-bold tracking-wide ">
                    SmartSched Try1
                </h1>

                {/* Right Side (Profile / Buttons) */}
                
            </div>
        </header>
    );
}
