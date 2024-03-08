import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'

const Hero = () => {
    return (
        <div className='flex gap-10'>

            <section className='w-[40%]'>
                <LeftHero />
            </section>
            <section className='w-[60%]'>
                <RightHero />
            </section>

        </div>
    )
}

export default Hero