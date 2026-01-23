import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../components/PrimaryButton'

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#212326] to-[#3c484e]">

            <div className="bg-white backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl w-full max-w-md p-8">

                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className='text-3xl font-bold text-black'>Welcome Back</h2>
                    <p className='text-black-200 mt-2'>Login to your account</p>
                </div>

                {/* Form */}
                <form className='space-y-5'>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-black mb-1'>Email</label>
                        <input type="email" name="email" id="email" className='w-full px-4 py-3 bg-black/20 rounded-xl text-black placeholder-black-300 border border-black/30 focus:outline-none focus:ring-1 focus:ring-black/50' placeholder='Enter your email' />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-black mb-1'>Password</label>
                        <input type="password" name="password" id="password" className='w-full px-4 py-3 bg-black/20 rounded-xl text-black placeholder-black-300 border border-black/30 focus:outline-none focus:ring-1 focus:ring-black/50' placeholder='Enter password' />
                    </div>

                    {/* Options */}
                    <div className='text-sm text-center text-black-200 my-2'>
                        <p>Forgot password? <Link to={'#'} className='text-black font-semibold hover:underline hover:text-orange-500 transition-all'>reset here</Link></p>
                    </div>

                    <PrimaryButton type="submit" text="Login" className="w-full" />
                </form>

                {/* Register */}
                <p className='text-center text-black-200 mt-6 text-sm'>
                    Don’t have an account?{" "} <Link to={'/register'} className='text-black font-semibold hover:underline hover:text-orange-500 transition-all'>register here</Link>
                </p>
            </div>
        </div>
    )
}

export default Login