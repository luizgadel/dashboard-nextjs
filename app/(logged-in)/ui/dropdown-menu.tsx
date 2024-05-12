'use client';

import clsx from "clsx";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function DropdownMenu() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    function toggleMenu() {
        setIsMenuVisible(!isMenuVisible);
    }

    function callLogout() {
        toggleMenu()
        console.log('logout!')
    }

    function goToProfile() {
        toggleMenu()
        redirect('/profile');
    }

    const menuItems = [
        { text: 'Profile', icon: 'bi-person', action:  () => { goToProfile() }},
        { text: 'Logout', icon: 'bi-box-arrow-right', action: () => { callLogout() }}
    ]

    const username = "luiz";

    return (
        <>
            <button
              className={clsx(
                "rounded-full w-32 h-9 border \
                hover:border-halborn-500 hover:text-halborn-500",
                {'border-halborn-500 text-halborn-500': isMenuVisible},
                {'border-halborn-500/75 text-halborn-500/75': !isMenuVisible}
              )}
              onClick={toggleMenu}
            >
                <i className='bi-person'></i>
                <span className="ms-2">{username}</span>
            </button>
            <div className={clsx("\
                absolute h-fit-content w-32 top-14 right-16 py-2 \
                rounded-lg border border-halborn-500 bg-black flex flex-col", 
                {'visible': isMenuVisible},
                {'invisible': !isMenuVisible}
            )}>
                {menuItems.map(item => (
                    <button 
                        key={item.text}
                        className={clsx(
                            "h-12 text-halborn-500/75 text-start ps-4 hover:text-halborn-500",
                        )}
                        onClick={item.action}
                    >
                        <i className={item.icon}></i>
                        <span className="ms-2">{item.text}</span>
                    </button>
                ))}
            </div>
        </>
    )
}