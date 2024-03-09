import ViewAllButton from '@/components/ViewAllButton'
import { topicData } from '@/data/data'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { LuFilm } from 'react-icons/lu'

const OnlineCourses = () => {
    return (
        <div>
            <header className='flex items-center justify-between'>
                <div className='flex items-center gap-6 font-medium text-xl pb-8'>
                    <LuFilm />
                    คอร์สออนไลน์
                </div>

                <ViewAllButton />
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

                        <p className='font-light text-sm text-gray-500'>
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

export default OnlineCourses