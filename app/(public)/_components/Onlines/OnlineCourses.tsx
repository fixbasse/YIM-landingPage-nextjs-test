import ViewAllButton from '@/components/ViewAllButton'
import { topicData } from '@/data/data'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { LuFilm } from 'react-icons/lu'
import { onlineCoursesData } from '../../../../data/data';
import { CoursesCarousel } from './Carousel'
import { CarouselEx } from '@/components/CaroselEx'

const OnlineCourses = () => {
    return (
        <div>
            <header className='flex items-center justify-between mb-8'>
                <div className='flex items-center gap-6 font-medium text-xl'>
                    <LuFilm />
                    คอร์สออนไลน์
                </div>

                <ViewAllButton />
            </header>

            {/* <CarouselEx /> */}
            <CoursesCarousel />


        </div>
    )
}

export default OnlineCourses