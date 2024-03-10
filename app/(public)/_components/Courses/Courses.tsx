import { CarouselSize } from '@/app/(public)/_components/Courses/Carousel'
import ViewAllButton from '@/components/ViewAllButton'
import { topicData } from '@/data/data'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { LuFilm } from 'react-icons/lu'

const Courses = () => {
    return (
        <div>

            <header className='flex items-center justify-between'>
                <div className='flex items-center gap-6 font-medium text-xl pb-8'>
                    <LuFilm />
                    คอร์สของฉัน
                </div>

                <ViewAllButton />
            </header>

            <CarouselSize />


        </div>
    )
}

export default Courses