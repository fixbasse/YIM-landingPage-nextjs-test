import React from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";

const RightNavbar = () => {
    return (
        <>
            <button className='bg-gray-200 text-gray-700 px-6 py-3 rounded-2xl hidden sm:block'>
                ออกจากระบบ
            </button>

            <button className=' bg-gray-800 px-6 py-3 rounded-2xl flex items-center gap-2'>
                <Image
                    src='/noavatar.png'
                    width={30}
                    height={30}
                    alt='/'
                    className='rounded-full'
                />
                <h3 className='text-white text-sm font-light'>
                    Siriwat Rachanon
                </h3>

                <IoIosArrowDown className='text-white' size={20} />
            </button>
        </>
    )
}

export default RightNavbar