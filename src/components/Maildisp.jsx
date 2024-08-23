import React, { useEffect, useState } from 'react'
import Onebox from './Onebox'

export default function Maildisp({data}) {
  const [disp,setDisp] = useState([]);
  
  useEffect(()=>{
    if(data){
      setDisp([data]);
    }
  },[data])
  return (
    <div>
        
    <div className='fixed border-box border-[1px] mt-[-15rem] ml-[40rem]  p-[1rem] w-[full] font-sans'>
   
      {disp.map((t)=>{
        return (
        <div key={t.id}>
      
          <p>From: {t.fromEmail}</p>
          <p>to:{t.toEmail}</p>
          <br />
          <br />
          <p>Subject: {t.subject}</p>
          
        </div>
        )
      })}

    </div>
    </div>
  )
}
