import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {

    const navClass = ({ isActive }) =>
        `block my-2 mx-5 px-3 py-2 rounded-md transition-all
        ${isActive
            ? "bg-orange-500 text-black"
            : "hover:bg-orange-500 hover:text-black"
        }`;

    return (
        <aside className='bg-black h-screen fixed top-0 left-0 text-white font-semibold transition-all duration-300 w-[18%] flex flex-col justify-between'>

            <nav className='mt-16'>
                <NavLink to='/admin' end className={navClass}>Dashboard</NavLink>
                <NavLink to='/admin/products' className={navClass}>Products</NavLink>
                <NavLink to='/admin/users' className={navClass}>Users</NavLink>
            </nav>
            <div className='mb-14'>
                <NavLink to='/login' className='block my-3 mx-5 px-3 py-2 rounded-md text-red-500 border-red-500 border hover:bg-red-500 hover:text-black transition-all'>Logout</NavLink>
            </div>

        </aside>
    )
}

export default Sidebar