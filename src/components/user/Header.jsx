import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton'

function Header() {
    return (
        <header className='w-full bg-linear-to-r from-[#212326] to-[#3c484e] shadow-sm'>
            <div className="container mx-auto">
                <div className='flex items-center justify-between py-3'>

                    {/* Left Nav */}
                    <nav className="hidden md:flex items-center gap-6 font-medium text-white">
                        <Link to="/" className="hover:text-orange-500 transition">HOME</Link>
                        <Link to="/shop" className="hover:text-orange-500 transition">SHOP</Link>
                        <Link to="/blog" className="hover:text-orange-500 transition">BLOG</Link>
                    </nav>

                    {/* Logo */}
                    <div className='flex items-center justify-center px-1'>
                        <Link to={'/'}>
                            <img src="/logo.png" alt="Logo" className='h-10 w-auto object-contain hover:scale-105 transition' />
                        </Link>
                    </div>

                    {/* Right Nav */}
                    <div className='hidden md:flex items-center gap-6 font-medium text-white'>
                        <Link to={'/login'} className='hover:text-orange-500 transition'>LOGIN</Link>
                        <Link to={'/register'}>
                            <PrimaryButton type="button" text="REGISTER" className="w-full" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header