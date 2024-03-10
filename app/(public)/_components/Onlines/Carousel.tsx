import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { coursesData, onlineCoursesData } from "@/data/data"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function CoursesCarousel() {
    return (
        <Carousel
            className="w-full"
        >
            <CarouselContent className="">
                {onlineCoursesData.map((item) => (
                    <CarouselItem key={item.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 ">
                        <div className={cn('rounded-2xl p-4 md:px-8 md:py-10 flex flex-col justify-between h-full md:h-[400px]', item.bg)}>
                            <div>
                                <h4 className="text-sm border rounded-full py-2 text-gray-400 font-light w-[100px] text-center">
                                    {item.type}
                                </h4>
                                <h2 className="text-xl font-semibold pt-2">
                                    {item.title}
                                </h2>

                                <p className={`text-sm font-light pt-4 max-[768px]:pb-2 
                                ${item.text}
                                `}>
                                    {item.desc}
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

                                <article className="text-sm">
                                    <h3 className="font-semibold">
                                        {item.name}
                                    </h3>
                                    <span className="font-light">
                                        {item.position}
                                    </span>
                                </article>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
