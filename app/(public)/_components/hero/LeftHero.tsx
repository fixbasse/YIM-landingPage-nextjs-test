import React from 'react'
import { CiSearch } from "react-icons/ci";

const LeftHero = () => {
    return (
        <>
            <span className='text-teal-700 font-medium mb-4'>
                Lorem Ipsum is simply dummy .
            </span>

            <article className='pt-4'>
                <h1 className='text-4xl leading-[3rem]'>
                    learn anytime,
                    <br />
                    anywhere
                    <br />
                    with
                    <span className='text-teal-700 pl-3'>
                        Lorem
                    </span>
                </h1>
            </article>

            {/* Search Box */}
            <section className='flex items-center mt-4 md:mt-16 relative'>
                <CiSearch className='absolute left-4 text-gray-400' size={20} />
                <input
                    type="text"
                    placeholder='ค้นหาหลักสูตร'
                    className='border p-2 rounded-l-lg h-[45px] w-full placeholder:pl-8 placeholder:font-light placeholder:text-gray-300'
                />
                <button className='bg-teal-700 p-2 h-[45px] w-[150px] rounded-r-lg text-white font-light'>
                    ค้นหา
                </button>
            </section>

        </>
    )
}

export default LeftHero