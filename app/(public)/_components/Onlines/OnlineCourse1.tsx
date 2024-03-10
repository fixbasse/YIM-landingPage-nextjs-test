import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const OnlineCourse1 = () => {
    return (
        <div className={cn('rounded-3xl p-4 md:px-8 md:py-10 flex flex-col justify-between h-full md:h-[450px] bg-yellow-200')}>
            <div>
                <h4 className="text-sm border border-gray-500 rounded-full py-2 text-gray-500 font-light w-[100px] text-center">
                    Business
                </h4>
                <h2 className="text-xl font-semibold pt-2">
                    ลงทุนหุ้นมั่นใจ <br />
                    ต้องเข้าใจปัจจัยพื้นฐาน
                </h2>

                <p className='font-light pt-4 max-[768px]:pb-2 leading-7'>
                    รู้และเข้าใจปัจจัยที่ส่งผล <br />
                    กระทบต่อราคาหุ้น
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
                        ณัฐกาณต์ สิทธิชัยอนันต์
                    </h3>
                    <span className="font-light">
                        CEO Y.I.M Corporation
                    </span>
                </article>
            </div>
        </div>
    )
}

export default OnlineCourse1