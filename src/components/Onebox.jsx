import axios from 'axios'
import React, { useState } from 'react'
import { FaHome,FaSearch,FaInbox, } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import Inbox from './Inbox';
export default function Onebox() {
  // const [mail,Setmail] = useState([]);

  // const res = ()=>{const result = axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list",{
  //   headers:{
  //     "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGhpcnNhbnRoZ0BnbWFpbC5jb20iLCJpZCI6MTA4NSwiZmlyc3ROYW1lIjoiVGhpcnNhbnRoIiwibGFzdE5hbWUiOiJHaXJpZGhhciJ9LCJpYXQiOjE3MjQxNDc4NDYsImV4cCI6MTc1NTY4Mzg0Nn0.KD88mdc_h-zBV7lqmYzO5-KtLZoTdHVJVcqElXYkHoA",
  //     "Content-Type":"application/json"
  //   }
  // })
  // }
  // fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list",{
  //   method:"GET",
  //   headers:{
  //     "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGhpcnNhbnRoZ0BnbWFpbC5jb20iLCJpZCI6MTA4NSwiZmlyc3ROYW1lIjoiVGhpcnNhbnRoIiwibGFzdE5hbWUiOiJHaXJpZGhhciJ9LCJpYXQiOjE3MjQxNDc4NDYsImV4cCI6MTc1NTY4Mzg0Nn0.KD88mdc_h-zBV7lqmYzO5-KtLZoTdHVJVcqElXYkHoA",
  //     "Content-type":"application/json"
  //   }
  // })
  // .then(async function(res){
  //   const json = await res.json();
  //   // console.log(json);
  //   Setmail(json.data);
  // })
  
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
    <li><a href="#" className="block text-center"><FaInbox /></a></li>
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


    </div>
  )
}
