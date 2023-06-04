import React from 'react'
import { Context } from '../../Context/index';
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

function Navbar() {
    const context = React.useContext(Context)
    const activeStyle = "underline underline-offset-4"

    // Sign out
    const signout = localStorage.getItem('sign-out')
    const parsedSignout = JSON.parse(signout)
    const isUserSignout = context.signout || parsedSignout

    function handleSignout() {
        const stringifiedSignout = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignout)
        context.setSignout(true)
    }

    function renderView() {
        if (isUserSignout) {
            return (
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignout()}>Sign In</NavLink>
                </li>
            )
        } else {
            return (
                <>
                    <li className="text-black/60">
                        j.salvadorp@platzi.com
                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            onClick={() => context.setSearchByCategory()}
                            className={({ isActive }) => isActive ? activeStyle : undefined}>My Orders</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my-account'
                            onClick={() => context.setSearchByCategory()}
                            className={({ isActive }) => isActive ? activeStyle : undefined}>My Account</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/sign-in'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => handleSignout()}>Sign Out</NavLink>
                    </li>
                    <li className='flex items-center justify-center'>
                        <ShoppingCartIcon className='h-6 w-6 text-black' />
                        <div>
                            {context.cartProducts.length}
                        </div>
                    </li>
                </>
            )
        }
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'
                        onClick={()=>context.setSearchByCategory()}>Shopi</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        onClick={()=>context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>All</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick={()=>context.setSearchByCategory('Clothes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>Clothes</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={()=>context.setSearchByCategory('Electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        onClick={()=>context.setSearchByCategory('Furniture')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>Furnitures</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Toys'
                        onClick={()=>context.setSearchByCategory('toys')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>Toys</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Others'
                        onClick={()=>context.setSearchByCategory('Others')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>Others</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                {renderView()}
            </ul>
        </nav>
    )        

}

export default Navbar;