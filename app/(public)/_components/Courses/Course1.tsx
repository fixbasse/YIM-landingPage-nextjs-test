import { Progress } from '@/components/ui/progress'
import React from 'react'

const Course1 = () => {
    return (
        <div className="rounded-xl  bg-white">

            {/* Top */}
            <section className={`text-white rounded-t-xl p-4 h-[120px] bg-sky-800
        
        `}>
                <h2 className="text-sm">
                    Generative AI and <br />
                    ChatGPT: Design <br />
                     Thinking Edition
                </h2>
            </section>

            {/* Bottom */}
            <section className="p-4 text-sm flex flex-col justify-between rounded-b-xl h-[140px]">
                <span className="font-light">
                    Generative AI and ChatGPT: Design Thinking Edition
                </span>

                <div>
                    <div className="flex items-center pb-4 font-light">
                        <h4>
                            เรียนไปแล้ว
                        </h4>
                        <span className="font-semibold pl-1">
                            0%
                        </span>
                    </div>

                    <Progress className="h-[10px]" />
                </div>
            </section>
        </div>
    )
}

export default Course1