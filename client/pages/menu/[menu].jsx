import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/Atoms/button'
import Navbar from '../../components/Navbar/navbar'
import Rupiah from 'rupiah-format'
import { useRouter } from 'next/router'
import dummy from '../../public/dummy/startup'
import Layout from '../../components/layout'
import { CartContext } from '../../app/cartContext'
import { API } from '../../config/api'
import { useMutation } from 'react-query'
export default function Menu() {
  const router = useRouter()
  const index =router.query.menu

  const [data,setData]=useState([])

  useEffect(()=>{
    const findProduct= async(e)=>{
      const res= await API.get(`/user/${index}`,{
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      setData(res.data.data)
    }
    findProduct()
  },[])

  const handleClick = useMutation(async({id,price})=>{
    try {
      // e.preventDefault();
      await API.post("/cart", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
          const formData={
            product_id:id,
            sub_amount:price,
          }

          const res = await API.post("/order",formData)

          console.log("formddata",res)

        } catch (error) {
          
        }
  })

  return (
    <>
    <Layout title="Menu">
    <Navbar/>
    <div className='flex flex-col' >
    </div>
    <div>

        <div className=' align-center p-10'>
          <div className='flex md:pl-16 '>
          <img 
          className='w-16 h-16 rounded-full'
          src={data?.image}
          alt="" />
            <p className='p-[1.5rem] text-4xl font-font_a  font-extrabold' >{data?.name} MENU</p>
          </div>
            <div className='px-28 py-10'>
              <div className='grid md:grid-cols-4 gap-4'>
          {data.product?.map((item)=>(

                <div key={item?.id} className='bg-white hover:bg-primary/50 rounded-md  '>
                    <div 
          
                    className='p-2'>
                    <img className='w-56 h-44 my-4 ' src={item?.image} alt="" />
                    <p  className='font-extrabold text-lg font-font_a text-primary' >
                      {item?.Name}
                      </p>
                    <p className='my-1 text-fontFire'>
                      {Rupiah.convert  (item?.price)}
                      </p>
                    <Button onClick={()=>handleClick.mutate({id:item.id,price:item.price})}style='bg-primary h-6 hover:bg-primary/80' >Order</Button>
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
