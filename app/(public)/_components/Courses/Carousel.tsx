import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Progress } from "../../../../components/ui/progress"
import { coursesData } from "@/data/data"
import Course1 from "./Course1"
import Course2 from "./Course2"
import Course3 from "./Course3"
import Course4 from "./Course4"

export function CarouselSize() {
    return (
        <Carousel
            className="w-full"
        >
            <CarouselContent className="">
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    {/* 1st */}
                    <Course1 />
                </CarouselItem>
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    {/* 2nd */}
                    <Course2 />
                </CarouselItem>
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    {/* 3rd */}
                    <Course3 />
                </CarouselItem>
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    {/* 4th */}
                    <Course4 />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
