import { Progress } from '@/components/ui/progress'
import React from 'react'

const Course4 = () => {
    return (
        <div className="rounded-xl bg-white">

            {/* Top */}
            <section className={`text-white rounded-t-xl p-4 h-[120px] bg-teal-800
        
        `}>
                <h2 className="text-sm">
                    องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ
                </h2>
            </section>

            {/* Bottom */}
            <section className="p-4 text-sm flex flex-col justify-between rounded-b-xl h-[140px]">
                <span className="font-light">
                    องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ
                </span>

                <div>
                    <div className="flex items-center pb-4 font-light">
                        <h4>
                            เรียนไปแล้ว
                        </h4>
                        <span className="font-semibold pl-1">
                            80%
                        </span>
                    </div>

                    <Progress className="h-[10px]" value={80} />
                </div>
            </section>
        </div>
    )
}

export default Course4