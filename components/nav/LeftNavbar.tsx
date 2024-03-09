import { navLinks } from '@/data/data'
import React from 'react'


const LeftNavbar = () => {
    return (
        <>
            <h2 className="text-3xl text-teal-700 font-bold">
                LOGO
            </h2>

            <div className="hidden md:flex gap-10 text-gray-400 font-light">
                {navLinks.map((item) => (
                    <h3 key={item.id}>
                        {item.label}
                    </h3>
                ))}
            </div>
        </>
    )
}

export default LeftNavbar