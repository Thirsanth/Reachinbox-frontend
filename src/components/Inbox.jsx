import {React,useEffect,useState} from 'react'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';



export default function Inbox() {
    const [mail,setMail] = useState([]);
    // fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list",{
    //     method:"GET",
    //     headers:{
    //       "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGhpcnNhbnRoZ0BnbWFpbC5jb20iLCJpZCI6MTA4NSwiZmlyc3ROYW1lIjoiVGhpcnNhbnRoIiwibGFzdE5hbWUiOiJHaXJpZGhhciJ9LCJpYXQiOjE3MjQxNDc4NDYsImV4cCI6MTc1NTY4Mzg0Nn0.KD88mdc_h-zBV7lqmYzO5-KtLZoTdHVJVcqElXYkHoA",
    //       "Content-type":"application/json"
    //     }
    //   })
    //   .then(async function(res){
    //     const json = await res.json();
    //     // console.log(json);
    //     Setmail(json.data);
    //   })
    useEffect(()=>{
      const datafetch = async () => {const res =await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list",{
        headers:{
                "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGhpcnNhbnRoZ0BnbWFpbC5jb20iLCJpZCI6MTA4NSwiZmlyc3ROYW1lIjoiVGhpcnNhbnRoIiwibGFzdE5hbWUiOiJHaXJpZGhhciJ9LCJpYXQiOjE3MjQxNDc4NDYsImV4cCI6MTc1NTY4Mzg0Nn0.KD88mdc_h-zBV7lqmYzO5-KtLZoTdHVJVcqElXYkHoA",
                "Content-Type":"application/json"
              }
      });
      setMail(res.data.data);
    }
    datafetch();
    },[])
  return (
    <div>
        
      <div className=' fixed mx-[4rem] my-[4rem]'>
      <div>
            <p className='text-allinboxcolor font-medium'>All Inbox's</p>
        </div>
        {/* <div className='flex '>
        <CiSearch className='w-[2rem] h-[1.3rem] bg-gray-300' /><input type='text' className='bg-gray-300 border-r-5 h-5 ' />
        </div> */}
        
<form class="max-w-md my-2">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

        {/* <div class="box-border h-[4rem] w-[100rem] p-4 border-[1px] mt-3 "> */}
        {mail.map((d)=>{
          return(
        //   <div>
        <div class="box-border h-[6rem] w-[100rem] p-4 border-[1px] mt-3 ">
            <h2 className='flex  justify-between'>{d.fromEmail}  {d.sentAt}</h2> 
            <p>{d.subject}</p>

          </div>
          )
          
        })}
        {/* </div> */}

        
      </div>
      </div>
    
  )
}
