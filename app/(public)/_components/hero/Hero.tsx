import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'

const Hero = () => {
    return (
        <div className='flex gap-20 h-[50dvh]'>

            <section className='w-[40%]'>
                <LeftHero />
            </section>
            <section className='w-[60%] flex gap-4'>
                <RightHero />
            </section>

        </div>
    )
}

export default Hero