import React from 'react'
import { GoClock } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const LeftArticle = () => {
    return (
        <>
        {/* 1st */}
            <div className='grid grid-cols-5 h-[350px] shadow-xl rounded-xl'>

                <section className='bg-sky-900 rounded-l-lg col-span-2'>
                    <h2 className='text-white text-xl p-8 uppercase'>
                        Profit / Loss <br />
                        of stocks <br />
                        in the <br />
                        portfolio
                    </h2>
                </section>
                {/* Right */}
                <section className='p-8 col-span-3 flex flex-col justify-between'>
                    <span className='border border-teal-700 text-teal-700 rounded-full px-2 py-1 w-[100px] text-center'>
                        Business
                    </span>
                    <h3 className='font-semibold'>
                        กำไร/ขาดทุนของหุ้นในพอร์ต <br />
                        ต้องดูอย่างไร?
                    </h3>
                    <p>
                        เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ <br />
                        การติดตามดูข้อมูลของหุ้น <br />
                        ในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือ <br />
                        ขาดทุนมากน้อยเท่าใด?
                    </p>

                    <div className='text-gray-400'>
                        <div className='flex items-center gap-2'>
                            <GoClock />
                            29 มกราคม 2023
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoEyeOutline />
                            เข้าชม 240 ครั้ง
                        </div>
                    </div>
                </section>
            </div>
        {/* 2nd */}
            <div className='grid grid-cols-5 h-[350px] shadow-xl rounded-xl'>

                <section className='bg-sky-900 rounded-l-lg col-span-2'>
                    <h2 className='text-white text-xl p-8 uppercase'>
                        Profit / Loss <br />
                        of stocks <br />
                        in the <br />
                        portfolio
                    </h2>
                </section>
                {/* Right */}
                <section className='p-8 col-span-3 flex flex-col justify-between'>
                    <span className='border border-teal-700 text-teal-700 rounded-full px-2 py-1 w-[100px] text-center'>
                        Business
                    </span>
                    <h3 className='font-semibold'>
                        กำไร/ขาดทุนของหุ้นในพอร์ต <br />
                        ต้องดูอย่างไร?
                    </h3>
                    <p>
                        เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ <br />
                        การติดตามดูข้อมูลของหุ้น <br />
                        ในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือ <br />
                        ขาดทุนมากน้อยเท่าใด?
                    </p>

                    <div className='text-gray-400'>
                        <div className='flex items-center gap-2'>
                            <GoClock />
                            29 มกราคม 2023
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoEyeOutline />
                            เข้าชม 240 ครั้ง
                        </div>
                    </div>
                </section>
            </div>






            <div className='p-8'>
                LeftArticle
            </div>

        </>
    )
}

export default LeftArticle