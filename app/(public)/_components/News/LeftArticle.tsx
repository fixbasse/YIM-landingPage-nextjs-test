import React from 'react'
import { GoClock } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const LeftArticle = () => {
    return (
        <>
            {/* 1st */}
            <div className='grid min-[425px]:grid-cols-5 rounded-xl bg-white'>

                <section className='bg-gray-800 max-[425px]:rounded-lg rounded-l-lg col-span-5 min-[425px]:col-span-2'>
                    <h2 className='text-white text-xl p-8 uppercase font-semibold leading-9 max-[425px]:text-center'>
                        Profit / Loss <br />
                        of stocks <br />
                        in the <br />
                        portfolio
                    </h2>
                </section>
                {/* Right */}
                <section className='p-8 col-span-3 flex flex-col justify-between'>
                    <div>
                        <span className='border border-teal-700 text-teal-700 rounded-full px-3 py-1 w-[100px] text-center'>
                            Business
                        </span>
                        <h3 className='font-semibold pt-4 pb-2'>
                            กำไร/ขาดทุนของหุ้นในพอร์ต <br />
                            ต้องดูอย่างไร?
                        </h3>
                        <p className='text-sm text-gray-600 font-light leading-6'>
                            เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ <br />
                            การติดตามดูข้อมูลของหุ้น <br />
                            ในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือ <br />
                            ขาดทุนมากน้อยเท่าใด?
                        </p>
                    </div>

                    <div className='text-gray-500 font-light text-sm flex flex-col gap-2'>
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
            <div className='grid min-[425px]:grid-cols-5 rounded-xl bg-white'>

                <section className='bg-sky-900 max-[425px]:rounded-lg rounded-l-lg col-span-5 min-[425px]:col-span-2'>
                    <h2 className='text-white text-xl p-8 uppercase max-[425px]:text-center'>
                        What Is <br />
                        A Data <br />
                        Engineer <br />
                    </h2>
                </section>
                {/* Right */}
                <section className='p-8 col-span-3 flex flex-col justify-between'>
                    <div>
                        <span className='border border-teal-700 text-teal-700 rounded-full px-3 py-1 w-[100px] text-center'>
                            Data
                        </span>
                        <h3 className='font-semibold pt-4 pb-2'>
                            Data Engineer คืออะไร?
                        </h3>
                        <p className='text-sm text-gray-600 font-light leading-6'>
                            Data Engineer คือคนที่ทำงาน <br />
                            กับหลากหลายเครื่องมือเพื่อ <br />
                            รวบรวมข้อมูลจัดการข้อมูลและ <br />
                            เปลี่ยนข้อมูลดิบ ให้พร้อมใช้งาน <br />
                            สำหรับทั้ง Data Scientist และ Data
                            Analyst
                        </p>
                    </div>

                    <div className='text-gray-500 font-light text-sm flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <GoClock />
                            29 กรกฎาคม 2023
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoEyeOutline />
                            เข้าชม 240 ครั้ง
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LeftArticle