import ViewAllButton from '@/components/ViewAllButton'
import React from 'react'
import { LuFilm } from 'react-icons/lu'
import LeftArticle from './LeftArticle'
import RightArticle from './RightArticle'

const NewsAndArticle = () => {
    return (
        <div>
            <header className='flex items-center justify-between'>
                <div className='flex items-center gap-6 font-medium text-xl pb-8'>
                    <LuFilm />
                    บทความและข่าวสารล่าสุด
                </div>

                <ViewAllButton />
            </header>

            {/* Content */}
            <div className='grid grid-cols-2 gap-4'>
                <section className='grid grid-rows-2 gap-4'>
                    <LeftArticle />
                </section>
                <section className='grid grid-rows-3 gap-4'>
                    <RightArticle />
                </section>
            </div>

        </div>
    )
}

export default NewsAndArticle