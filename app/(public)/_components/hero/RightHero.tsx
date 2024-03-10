import Image from 'next/image'
import React from 'react'

const RightHero = () => {
  return (
    <>
      <section className='w-full text-center sm:text-left md:w-[60%] text-white bg-teal-900 rounded-3xl p-8 flex flex-col justify-between'>
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

        <article className='flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 pt-4'>
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

      {/* Rotate2 */}
      <section className='sm:w-[20%] bg-teal-200 rounded-3xl p-4 flex flex-col justify-center'>
        <div className='min-[640px]:rotate-[-90deg] text-xl mt-auto'>
          <div className='md:flex gap-2'>
            <h2>
              Generative
            </h2>
            <span>
              ChatGPT:
            </span>
          </div>

          <div className='flex gap-2'>
            <h2>
              UX
            </h2>
            Design
          </div>
        </div>

        <Image
          src='/noavatar.png'
          width={40}
          height={40}
          alt='/'
          className='rounded-full mt-auto'
        />
      </section>

      {/* Rotate2 */}
      <section className='sm:w-[20%] bg-yellow-200 rounded-3xl p-4 flex flex-col justify-between'>
        <div className='min-[640px]:rotate-[-90deg] text-xl mt-auto'>
          <div className='flex gap-2'>
            <h2>
              UX
            </h2>
            <span>
              Accelerator
            </span>
          </div>


          <h2>
            Bundle
          </h2>

        </div>

        <Image
          src='/noavatar.png'
          width={40}
          height={40}
          alt='/'
          className='rounded-full mt-auto'
        />
      </section>
    </>
  )
}

export default RightHero