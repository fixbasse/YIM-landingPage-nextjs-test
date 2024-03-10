import React from 'react'

const RightArticle = () => {
    return (
        <>
            {/* 1st */}
            <div className='grid grid-cols-5 bg-white rounded-xl'>

                <section className='bg-sky-900 rounded-l-lg col-span-2'>
                    <h2 className='text-white text-xl p-8 flex items-center justify-center h-full text-center'>
                        สารแทนน้ำตาลไม่อันตราย
                    </h2>
                </section>
                {/* Right */}
                <section className='p-8 col-span-3 flex flex-col justify-between'>
                    <div>
                        <span className='border border-teal-700 text-teal-700 rounded-full px-4 py-1 w-[100px] text-center'>
                            Science
                        </span>
                        <h3 className='font-semibold pt-4 pb-2'>
                            สารแทนน้ำตาลไม่อันตราย
                        </h3>
                        <p className='text-sm text-gray-600 font-light leading-6'>
                            สาเหตุที่องค์กรอนามัยโลกให้คำแนะนำดังกล่าวมากจากผลการวืจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล
                        </p>
                    </div>
                </section>
            </div>
            {/* 2nd */}
            <div className='grid grid-cols-5 bg-white rounded-xl'>

                <section className='bg-sky-900 rounded-l-lg col-span-2'>
                    <h2 className='text-white text-xl p-8 flex items-center justify-center h-full text-center'>
                        Data Pipelines <br />
                        with AirfLow
                    </h2>
                </section>
                {/* Right */}
                <section className='p-8 col-span-3 flex flex-col justify-between'>
                    <div>
                        <span className='border border-teal-700 text-teal-700 rounded-full px-4 py-1 w-[100px] text-center'>
                            Tech
                        </span>
                        <h3 className='font-semibold pt-4 pb-2'>
                            Data Pipelines with AirfLow
                        </h3>
                        <p className='text-sm text-gray-600 font-light leading-6'>
                            เรียนรู้การสร้าง  End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่อ่านข้อมูลทำความสะอาด ปรับให้อยู่ในรูปแบบที่เหมาะสม
                        </p>
                    </div>
                </section>
            </div>
            {/* 3rd */}
            <div className='grid grid-cols-5 bg-white rounded-xl'>

                <section className='bg-sky-900 rounded-l-lg col-span-2'>
                    <h2 className='text-white text-xl p-8 flex items-center justify-center h-full text-center'>
                        ร่างกายสามารถ <br />
                        ย้อนวัย <br />
                        &quot;อายุชีวภาพ&quot;
                    </h2>
                </section>
                {/* Right */}
                <section className='p-8 col-span-3 flex flex-col justify-between'>
                    <div>
                        <span className='border border-teal-700 text-teal-700 rounded-full px-4 py-1 w-[100px] text-center'>
                            Science
                        </span>
                        <h3 className='font-semibold pt-4 pb-2'>
                            ร่างกายสามารถ
                            ย้อนวัย
                            &quot;อายุชีวภาพ&quot;
                        </h3>
                        <p className='text-sm text-gray-600 font-light leading-6'>
                        ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น วัดกันด้วย &quot;อายุชีวภาพ&quot; (biological age) <br />
                        ซึ่งอาจจะแตกต่างจากอายุจริง
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RightArticle