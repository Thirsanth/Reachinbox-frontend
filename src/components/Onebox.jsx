import axios from 'axios'
import React, { useState } from 'react'
import { FaHome,FaSearch,FaInbox, } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import Inbox from './Inbox';
import Maildisp from './Maildisp';
import {Link} from 'react-router-dom';
export default function Onebox() {
  
  return (
    <div className=' fixed text-white font-semibold'>
      <div className=' fixed bg-customheader text-white py-2 px-2 mx-[3rem] w-full'>Onebox</div>
      
      <div className=' fixed text-center justify-center align-center'>
      <nav className="bg-customverticalnav w-[3rem] h-screen fixed top-0 left-0">
      <img className='w-[2rem] mx-2 mt-2' src='/reachinboxlogo.png' />
  <ul className="space-y-[3rem] space-x-4">
    <li></li>
    <li><a href="#" className="block text-center"><FaHome /></a></li>
    <li><a href="#" className="block text-center"><FaSearch /></a></li>
    <li><a href="#" className="block text-center"><CiMail /></a></li>
    <li><a href="#" className="block text-center"><IoIosSend /></a></li>
    <li><a href="#" className="block text-center"><FiMenu /></a></li>
    {/* <li><a href="" className="block text-center"><FaInbox /></a></li> */}
    <li><Link to='/onebox' className="block text-center" ><FaInbox /></Link></li>
    <li><a href="#" className="block text-center"><BiSolidBarChartAlt2 /></a></li>

  </ul>
</nav>
</div>
      
<div></div>
      {/* <div className='mx-[23rem]'>
        {mail.map((d)=>{
          return(
          <div>
            {d.fromName}
          </div>
          )
          
        })}
      </div> */}
      <Inbox />
      {/* <Maildisp /> */}
    </div>
  )
}
