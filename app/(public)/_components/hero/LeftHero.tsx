import React from 'react'

const LeftHero = () => {
    return (
        <>

            <span className='text-teal-700 font-medium mb-4'>
                Lorem Ipsum is simply dummy .
            </span>

            <article className='pt-4'>
                <h1 className='text-3xl font-semibold leading-[3rem]'>
                    learn any time,
                    <br />
                    anywhere
                    <br />
                    with
                    <span className='text-teal-700 pl-3'>
                        Lorem
                    </span>
                </h1>
            </article>

            <section className='flex mt-20'>
                <input
                    type="text"
                    placeholder='ค้นหาหลักสูคร'
                    className='border p-2 rounded-l-lg h-[50px] w-full'
                />
                <button className='bg-teal-700 p-2 h-[50px] w-[150px] rounded-r-lg text-white font-light'>
                    ค้นหา
                </button>
            </section>

        </>
    )
}

export default LeftHero