import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Progress } from "./ui/progress"
import { coursesData } from "@/data/data"

export function CarouselSize() {
    return (
        <Carousel
            className="w-full"
        >
            <CarouselContent className="">
                {coursesData.map((item) => (
                    <CarouselItem key={item.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="h-[260px] shadow-lg rounded-xl">

                            {/* Top */}
                            <section className={`text-white rounded-t-xl p-4 h-[120px]
                            ${item.bg}
                            `}>
                                <h2 className="text-sm">
                                    {item.title}
                                </h2>
                            </section>

                            {/* Bottom */}
                            <section className="p-4 text-sm flex flex-col justify-between rounded-b-xl h-[140px]">
                                <span className="font-light w-[180px]">
                                    {item.desc}
                                </span>

                                <div>
                                    <div className="flex items-center pb-4 font-light">
                                        <h4>
                                            เรียนไปแล้ว
                                        </h4>
                                        <span className="font-semibold pl-1">
                                            {item.value}%
                                        </span>
                                    </div>

                                    <Progress className="h-[10px]" value={item.value} />
                                </div>
                            </section>
                        </div>

                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
