import axios from 'axios'
import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
export default function Onebox() {
  const [mail,Setmail] = useState([]);

  // const res = ()=>{const result = axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list",{
  //   headers:{
  //     "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGhpcnNhbnRoZ0BnbWFpbC5jb20iLCJpZCI6MTA4NSwiZmlyc3ROYW1lIjoiVGhpcnNhbnRoIiwibGFzdE5hbWUiOiJHaXJpZGhhciJ9LCJpYXQiOjE3MjQxNDc4NDYsImV4cCI6MTc1NTY4Mzg0Nn0.KD88mdc_h-zBV7lqmYzO5-KtLZoTdHVJVcqElXYkHoA",
  //     "Content-Type":"application/json"
  //   }
  // })
  // }
  fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list",{
    method:"GET",
    headers:{
      "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGhpcnNhbnRoZ0BnbWFpbC5jb20iLCJpZCI6MTA4NSwiZmlyc3ROYW1lIjoiVGhpcnNhbnRoIiwibGFzdE5hbWUiOiJHaXJpZGhhciJ9LCJpYXQiOjE3MjQxNDc4NDYsImV4cCI6MTc1NTY4Mzg0Nn0.KD88mdc_h-zBV7lqmYzO5-KtLZoTdHVJVcqElXYkHoA",
      "Content-type":"application/json"
    }
  })
  .then(async function(res){
    const json = await res.json();
    // console.log(json);
    Setmail(json.data);
  })
  
  return (
    <div className=' text-white font-semibold'>
      <div className=' bg-gray-600 text-white py-2 px-2 mx-[3rem] w-full'>Onebox</div>
      
      
      <nav className="bg-gray-200  h-screen fixed top-0 left-0">
  <ul className="space-y-4">
    <li><a href="#" className="block text-center">{<FaHome />}</a></li>
    <li><a href="#" className="block text-center">Search</a></li>
    <li><a href="#" className="block text-center">Main</a></li>
    <li><a href="#" className="block text-center">Services</a></li>
  </ul>
</nav>
      

      <div className='mx-[23rem]'>
        {mail.map((d)=>{
          return(
          <div>
            {d.fromName}
          </div>
          )
          
        })}
      </div>

    </div>
  )
}
