import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const OnlineCourse4 = () => {
    return (
        <div className={cn('rounded-3xl p-4 md:px-8 md:py-10 flex flex-col justify-between h-full md:h-[450px] bg-gray-900 text-white')}>
            <div>
                <h4 className="text-sm border border-gray-400 rounded-full py-2 text-gray-400 font-light w-[60px] text-center">
                    Tech
                </h4>
                <h2 className="text-xl font-semibold pt-2">
                    Generative AI <br />
                    and ChatGPT: Design Thinking Edition
                </h2>

                <p className='font-light pt-4 max-[768px]:pb-2 leading-7'>
                    ปลดล็อคขีดจำกัดการทำงาน <br />
                    ด้วยพลัง AI
                </p>
            </div>

            {/* Bottom */}
            <div className="flex items-center gap-2">
                <Image
                    src='/noavatar.png'
                    width={40}
                    height={40}
                    alt='/'
                    className='rounded-full'
                />

                <article className="text-sm flex flex-col gap-2">
                    <h3 className="font-semibold">
                        ทัศน์พล รัชตะสัมฤทธิ์
                    </h3>
                    <span className="font-light">
                        Software Engineer
                    </span>
                </article>
            </div>
        </div>
    )
}

export default OnlineCourse4