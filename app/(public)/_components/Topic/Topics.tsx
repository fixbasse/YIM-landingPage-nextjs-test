import React from 'react'
import { LuFilm } from "react-icons/lu";
import { topicData } from '@/data/data';
import { FaArrowRight } from "react-icons/fa6";

const Topics = () => {
    return (
        <div>

            <header className='flex items-center gap-2 font-medium text-xl pb-8'>
                <LuFilm />
                เลือกเรียนตามหัวข้อที่สนใจ
            </header>

            <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {topicData.map((item) => (
                    <div key={item.id} className='shadow-md rounded-xl p-4 flex flex-col'>
                        <div className='flex items-center gap-2'>
                            {item.icon}
                            <h3 className='text-xl'>
                                {item.title}
                            </h3>
                        </div>

                        <p className='py-4 font-light text-sm text-gray-500'>
                            {item.desc}
                        </p>

                        <button className='ml-auto bg-teal-700 text-white p-1 rounded-md'>
                            <FaArrowRight size={15} />
                        </button>
                    </div>
                ))}
            </section>

        </div>
    )
}

export default Topics