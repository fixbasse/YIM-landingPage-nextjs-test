import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 lg:px-10 xl:px-40 bg-teal-800 py-8 text-white">

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
        {/* lorem */}
        <div className='flex flex-col justify-between'>
          <div>
            <h2>
              Lorem Ipsum is simply dummy <br />
              text of the printing
            </h2>
            <div className='font-light py-2 flex flex-col gap-1 text-sm'>
              199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา <br />
              จ.ชลบุรี 20230
            </div>
          </div>

          <div>
            ติดต่อเรา
            <div className='flex items-center gap-6 pt-2'>
              <FaYoutube />
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

      </section>

      <div className='text-sm font-light flex max-[768px]:flex-col max-[768px]:justify-center items-center justify-between'>
        <h3>
          Y.I.M. Corporation @ 2023. All rights reserved
        </h3>
        <h3>
          0-3835-4580-4, 0-3835-2611-6
        </h3>
      </div>

    </footer>
  )
}

export default Footer