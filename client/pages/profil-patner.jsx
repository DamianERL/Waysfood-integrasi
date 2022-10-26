import React from 'react'
import Button from '../components/Atoms/button'
import Navbar from '../components/Navbar/navbar'
import Dprofile from '../public/dummy/profile'
import Order from '../public/dummy/order'
import rupiah from 'rupiah-format'
import { useRouter } from 'next/router'
import Layout from '../components/layout'

export default function profilePatner() {
  const router= useRouter()

  const handleClick =(e)=>{
    e.preventDefault()
    router.push("/edit-profil-patner")
  }
  return (
    <>
    <Layout title="Profil-Patner">
    <Navbar/>
    <div>
      <div className='grid md:grid-cols-2 mx-32 my-12 '>
        {Dprofile?.map((item,index)=>(
        <div className='' >
          <p  className='font-extrabold text-3xl font-font_a mb-5' >Profile Patner</p>
          <div className='flex gap-8' >
            <img className='w-44 rounded-md h-56' src={item.image} alt="" />
            <div >
              <div >
                <p className='font-extrabold text-fontPrimary text-lg' text-fontPrimary >Name Patner</p>
                <p className='font-normal text-lg'>{item.name}</p>
              </div>
              <div>
              <p className=' text-fontPrimary font-extrabold text-lg' >Email</p>
              <p className='font-normal text-lg'>{item.email}</p>
              </div>
              <p className='font-extrabold text-fontPrimary text-lg' >Phone</p>
              <p className='font-normal text-lg'>{item.phone}</p>
            </div>
          </div>
          <Button onClick={handleClick} style='w-44  py-2 mt-4 bg-fontPrimary hover:bg-fontPrimary/90' >Edit Profile</Button>
        </div>
        ))}
        <div>
          <p className='font-extrabold text-4xl font-font_a mb-5' >History Transaction</p>
          {Order?.map((item,index)=>(
            <div className='m-3'>
              <card  className='grid grid-cols-2 w-96 bg-white rounded-md p-2'>
                <div className=''>
                  <p className='font-font_a font-extrabold text-sm' >{item.storeName}</p>
                  <p>{item.date}</p>
                  <p className='font-fontred' >{rupiah.convert(item.total)}</p>
                </div>
                <div className='grid justify-end'>
                  <img  src="https://res.cloudinary.com/fnxr/image/upload/v1665626340/Group_16_cb27e3.svg" alt="" />
                  <p className='bg-green-300/40 text-center rounded font-medium text-xs' >{item.statusorder}</p>
                </div>
              </card>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
    </>
  )
}
