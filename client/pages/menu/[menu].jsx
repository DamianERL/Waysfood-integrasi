import React, { useContext, useState } from 'react'
import Button from '../../components/Atoms/button'
import Navbar from '../../components/Navbar/navbar'
import Rupiah from 'rupiah-format'

import { useRouter } from 'next/router'
import dummy from '../../public/dummy/startup'
import Layout from '../../components/layout'
import { CartContext } from '../../app/cartContext'
export default function Menu() {
  const router = useRouter()
  const index =router.query.menu

  const [carts, setCarts] = useContext(CartContext)

  const [cart, setCart] = useState([])
  // console.log(cart)
  const handleCart = (item) => {
    cart.push(item)
    setCarts({
      type: "ADD",
      dataCart: cart
    })
  }
  // console.log()
  return (
    <>
    <Layout title="Menu">
    <Navbar/>
    <div className='flex flex-col' >
    </div>
    <div>
        <div className=' align-center p-10'>
          <div className='flex md:pl-16 '>
          <img src={dummy[index?.menu]?.image} alt="" />
            <p className='p-[1.5rem] text-4xl font-font_a  font-extrabold' >{dummy[index]?.name} MENU</p>
          </div>
            <div className='px-28 py-10'>

            <div className='grid md:grid-cols-4 gap-4'>
            {dummy[index]?.menu?.map((item,index)=>(
                <div key={index} className='bg-white hover:bg-primary/50 rounded-md  '>
                    <div 
          
                    className='p-2'>
                    <img className='w-80 my-1 ' src={item?.image} alt="" />
                    <p  className='font-extrabold text-lg font-font_a text-primary' >{item?.name}</p>
                    <p className='my-1 text-fontFire'>{Rupiah.convert  (item?.price)}</p>
                    <Button onClick={()=>handleCart(item)}  style='bg-primary h-6 hover:bg-primary/80' >Order</Button>
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