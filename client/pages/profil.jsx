import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/Atoms/button'
import Navbar from '../components/Navbar/navbar'
import Dprofile from '../public/dummy/profile'
import Order from '../public/dummy/order'
import rupiah from 'rupiah-format'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import { API } from '../config/api'


export default function Profil() {
  const router= useRouter()
  const [profil,setProfil]=useState("")
  const [profils,setProfils]=useState("")
  const handleClick =(e)=>{
    e.preventDefault()
    router.push("/edit-profil")
  }

  useEffect(()=>{
    const getData =async(e)=>{
      try {
        const res = await API.get("/get-user")
        setProfils(res.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  },[setProfil])

  return (
    <>
    <Layout title="profile">
    <Navbar/>
    <div>
      <div className='grid md:grid-cols-2 md:mx-32 md:my-12 '>
        {Dprofile?.map((item,index)=>(
        <div key={index} className='' >
          <p  className=' font-extrabold text-3xl font-font_a mb-5' >My Profile</p>
          <div className='flex gap-8' >
            <img className='w-44 rounded-md h-56'
            src={profils.image}
            alt="" />
            <div >
              <div >
                <p className='text-fontPrimary font-extrabold text-lg' >Full Name</p>
                <p className='font-normal text-lg'>{profils.name}</p>
              </div>
              <div>
              <p className='font-extrabold text-fontPrimary text-lg' >Email</p>
              <p className='font-normal text-lg'>{profils.email}</p>
              </div>
              <p className='text-fontPrimary font-extrabold text-lg' >Phone</p>
              <p className='font-normal text-lg'>{profils.phone}</p>
            </div>
          </div>
          <Button onClick={handleClick} style='w-44 py-2 mt-4 bg-fontPrimary hover:bg-fontPrimary/90' >Edit Profile</Button>
        </div>
        ))}
        <div>
          <p className=' ml-40 font-extrabold text-4xl font-font_a mb-5' >History Order</p>
          {/* <div className='overflow-auto h-[23.03rem]'>   */}
          <div className='overflow-y-auto scrollbar-hide h-[17rem]'>  
          
          {Order?.map((item,index)=>(
            <div key={index} className='mb-2 grid justify-end'>
              <div  className='grid grid-cols-2   w-96 bg-white rounded-md p-2'>
                <div className=''>
                  <p className='font-font_a font-extrabold text-sm' >{item.storeName}</p>
                  <p>{item.date}</p>
                  <p className='font-fontred' >{rupiah.convert(item.total)}</p>
                </div>
                <div className='grid justify-end'>
                  <img  src="https://res.cloudinary.com/fnxr/image/upload/v1665626340/Group_16_cb27e3.svg" alt="" />
                  <p className='bg-green-300/40 text-center rounded font-medium text-xs' >{item.statusorder}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
    </Layout>
    </>
  )
}
