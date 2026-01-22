import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='w-full bg-linear-to-r from-[#212326] to-[#3c484e] shadow-sm'>
            <div className="container mx-auto py-4">
                <div className='flex items-center justify-between py-3'>

                    {/* Left Nav */}
                    <nav className="hidden md:flex items-center gap-6 font-medium text-white">
                        <Link to="/" className="hover:text-orange-500 transition">HOME</Link>
                        <Link to="/shop" className="hover:text-orange-500 transition">SHOP</Link>
                        <Link to="/blog" className="hover:text-orange-500 transition">BLOG</Link>
                    </nav>

                    {/* Logo */}
                    <div className='flex items-center justify-center'>
                        <Link to={'/'}>
                            <img src="/logo.png" alt="Logo" className='h-10 w-auto object-contain hover:scale-105 transition' />
                        </Link>
                    </div>

                    {/* Right Nav */}
                    <div className='hidden md:flex items-center gap-6 font-medium text-white'>
                        <Link to={'/login'} className='hover:text-orange-500 transition'>LOGIN</Link>
                        <Link to={'/register'} className='w-full py-2 px-4 rounded-xl font-semibold bg-black text-white hover:bg-orange-500 hover:text-black transition-all duration-500'>REGISTER</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header