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
import OnlineCourse1 from "./OnlineCourse1"
import OnlineCourse2 from "./OnlineCourse2"
import OnlineCourse3 from "./OnlineCourse3"
import OnlineCourse4 from "./OnlineCourse4"

export function CoursesCarousel() {
    return (
        <Carousel
            className="w-full"
        >
            <CarouselContent className="">
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 ">
                    <OnlineCourse1 />
                </CarouselItem>
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 ">
                    <OnlineCourse2 />
                </CarouselItem>
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 ">
                    <OnlineCourse3 />
                </CarouselItem>
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <OnlineCourse4 />
                </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
