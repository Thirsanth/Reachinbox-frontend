import {React,useState} from 'react'

export default function Inbox() {
    const [mail,Setmail] = useState([]);
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
    <div>
        
      <div className=' fixed mx-[4rem] my-[4rem]'>
      <div>
            <p className='text-allinboxcolor font-medium'>All Inbox's</p>
        </div>
        
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
