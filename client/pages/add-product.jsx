import React from 'react'
import Button from '../components/Atoms/button'
import Input from '../components/Atoms/input'
import Layout from '../components/layout'
import Navbar from '../components/Navbar/navbar'

export default function addProduct() {
  return (
        <>
        <Layout title="Add-Product">
    <Navbar/>
    <div >
      <div className="my-12 mx-16">

      <p className='font-extrabold text-4xl font-font_a'>Edit Profile</p>

      <div className='grid md:grid-cols-12 gap-2'>
        <div className='grid col-span-8'>
        <Input style=""  clas="text" placeholder="Title"/>
        </div>
        <div className='grid col-span-4'>
          <label className='bg-fontPrimary h-10 hover:bg-fontPrimary/90 text-white w-full pt-2 text-center text-xs font-bold transition duration-300 rounded' htmlFor="file">Photo</label>
        <Input hidden style="" id="file" clas="file"/>
        </div>
        <div className='grid col-span-12'>
        <Input style="" clas="email" placeholder="Price"/>
        </div>
        <div className='grid col-span-8'></div>
        <div className='grid col-span-4'>
          <Button style="h-8 bg-fontPrimary hover:bg-fontPrimary/80">
            oke
          </Button>
        </div>
      </div>
      </div>
    </div>
    </Layout>
    </>
    )
}
