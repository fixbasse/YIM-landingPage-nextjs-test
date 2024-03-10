import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row md:gap-20 gap-10 md:h-[55dvh] mt-4'>

            <section className='md:w-[40%]'>
                <LeftHero />
            </section>
            <section className='md:w-[60%] flex gap-4'>
                <RightHero />
            </section>

        </div>
    )
}

export default Hero