import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'
function Nav() {
    const [show, setshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) { setshow(true) } else (setshow(false));
        });
        return () => { window.removeEventListener("scroll", null); };
    }, [])
    console.log(show)
    return (
        <div className={`fixed top-0 w-full flex justify-between p-5 z-10 h-16 transition-all ease-in duration-300 delay-100 ${show ? `bg-[rgba(0,0,0,0.98)]` : ``}`}>
            <img src={logo} alt="netflix logo" className='w-20  object-contain fixed left-5' />
            <img src={avatar} alt="netflix avatar" className='w-8 object-contain fixed right-5' />


        </div>
    )
}

export default Nav