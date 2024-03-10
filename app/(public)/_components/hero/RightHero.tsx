import Image from 'next/image'
import React from 'react'

const RightHero = () => {
  return (
    <>
      <section className='w-[60%] text-white bg-teal-900 rounded-3xl p-8 flex flex-col justify-between'>
        <div>

          <h2 className='text-2xl'>
            Generative AI
            <br />
            and ChatGPT:
            <br />
            Design Thinking
            <br />
            Edition
          </h2>
          <p className='font-light'>
            ปลดล็อคขีดจำกัดการทำงาน
            <br />
            ด้วยพลัง AI
          </p>
        </div>

        <article className='flex items-center gap-2'>
          <Image
            src='/noavatar.png'
            width={40}
            height={40}
            alt='/'
            className='rounded-full'
          />
          <div>
            <h3 className='text-white text-sm'>
              ณัฐกานต์ สิทธิชัยอนันต์
            </h3>
            <span className='font-ligh text-sm'>
              CEO Y.I.M Corporation
            </span>
          </div>
        </article>
      </section>

      <section className='w-[20%] bg-teal-200 rounded-3xl p-4 flex flex-col justify-between'>
        <h2 className='text-xl'>
          Generative ChatGPT:
          <br />
          UX Design
        </h2>

        <Image
          src='/noavatar.png'
          width={40}
          height={40}
          alt='/'
          className='rounded-full'
        />
      </section>

      <section className='w-[20%] bg-yellow-200 rounded-3xl p-4 flex flex-col justify-between'>
        <h2 className='text-xl rotate-90'>
          Generative ChatGPT:
          <br />
          UX Design
        </h2>

        <Image
          src='/noavatar.png'
          width={40}
          height={40}
          alt='/'
          className='rounded-full'
        />
      </section>
    </>
  )
}

export default RightHero