import React from 'react'

const Footer = () => {
  return (
    <footer className="px-4 lg:px-10 xl:px-40 bg-teal-800 py-8 text-white mt-8 md:mt-16">

      <header className='pb-8 text-4xl'>
        LOGO
      </header>

      <section className='border-y text-white grid sm:grid-cols-2 md:grid-cols-4 max-[768px]:gap-4 py-8 mb-4'>
        <div>
          <h2 className='py-2'>
            คอร์สของเรา
          </h2>
          <ul className='font-light flex flex-col gap-1 text-sm'>
            <li>Data</li>
            <li>Science</li>
            <li>Tech</li>
            <li>Business</li>
          </ul>
        </div>
        {/* เกี่ยวกับเรา */}
        <div>
          <h2 className='py-2'>
            เกี่ยวกับเรา
          </h2>
          <ul className='font-light flex flex-col gap-1 text-sm'>
            <li>สอนกับเรา</li>
            <li>ติดต่อสอบถามเพิ่มเติม</li>
            <li>แจ้งปัญหาเกี่ยวกับระบบ</li>
            <li>ช่องทางการร้องเรียน</li>
          </ul>
        </div>
        <div>
          <h2 className='py-2'>
            ความปลอดภัย
          </h2>
          <ul className='font-light flex flex-col gap-1 text-sm'>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Data Protection Policy Six</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h2 className='py-2'>
            คอร์สของเรา
          </h2>
          <ul className='font-light flex flex-col gap-1 text-sm'>
            <li>Data</li>
            <li>Science</li>
            <li>Tech</li>
            <li>Business</li>
          </ul>
        </div>

      </section>

      <span className='text-sm font-light flex max-[768px]:justify-center'>
        Y.I.M. Corporation @ 2023. All rights reserved
      </span>

    </footer>
  )
}

export default Footer