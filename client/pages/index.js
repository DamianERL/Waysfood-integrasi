import Navbar from '../components/Navbar/navbar'
import dummy from '../public/dummy/startup'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../app/userContext'
import { API } from '../config/api'

export default function Header() {
  const [showMLogin,setShowMLogin]=useState(false)
  const router = useRouter()
  const [state]=useContext(UserContext)
  const handleclick =()=> setShowMLogin(true)

  const [data,setData]=useState([])
  // console.log("data",data)
  const findUsers =async(e)=>{
    try { 
      const res = await API.get("/patners")
      setData(res.data.data)
    } catch (error) {
      
    }
  }
  // console.log(data.image)
useEffect(()=>{
  findUsers();
},[])
  return (
    <>
      <Layout title="WaysFood">
      <Navbar showMLogin={showMLogin} setShowMLogin={setShowMLogin} />
      <header className='flex justify-center pb-[14rem] bg-primary '  >
      <section className='grid md:grid-cols-5' >
        <div className='col-span-3 md:pt-16'>
          <p className='mb-8 font-extrabold text-fontPrimary font-font_a text-Fhero mt-10 '>
            Are You Hungry ?<br/>
            Express Home Delivery
          </p>
        <div className='grid md:grid-cols-3'>
          <div className='w-44 col-span-1 border-t-8  border-solid border-fontPrimary mt-3 '></div>
          <p className='col-span-2 text-left text-black text-smtele w-80' >
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem 
          Ipsum has been the industry's standard
          dummy text ever since the 1500s.</p>
        </div>
        </div>
        <div className='col-span-2 pt-14'>
          <img src='/pizza.svg' width={398} height={352}  alt="pizza"/>
        </div>
      </section>
    </header>
    <main className='bg-bgPrima pt-12 md:pl-32 pr-9 font-font_a  font-extrabold '>
          <div className=''>

            <p className='text-4xl pb-12'>Popular Restaurant</p>
          <div className='grid md:grid-cols-4 gap-2 rounded-lg '>

            {data?.map((item,index)=>(
              <div
              key={index} 
              onClick={
                 state.isLogin === true 
                 ? ()=>(router.push(`/menu/${item.id}`)  ) 
                 : handleclick
                }  
              className=''>
                  <div className='flex p-2 drop-shadow-xl  bg-white rounded-xl hover:bg-primary/50 '>
                    <img src={item.image} className="w-16 h-16 rounded-full "  alt="" />
                    <p className='text-xl font-extrabold  pl-6 ml-2 mt-4'>{item.name}</p>
                  </div>
              </div>
            ))}
          </div>
            <section className='mb-16' >
              <h3 className='text-4xl font-font_a mt-10 mb-10' >Restauran Near You</h3>
              <div className='   grid md:grid-cols-4 gap-2 rounded-lg pb-10PP'>
              {dummy?.map((item,index)=>(
                <div 
                onClick={state.isLogin === true
                  ? ()=>(router.push(`/menu/${item.id}`)  ) 
                  : handleclick
                 }  
                key={index} className='bg-white rounded drop-shadow-xl hover:bg-primary/80 p-3'>
                  <img className=' w-80' src={item.menu?.[0].image} alt="" />
                  <p className='my-2 font-extrabold font_a' >{item.menu?.[0].name}</p>
                  <p className='font_a font-normal' >{item?.distance}</p>
                </div>
                ))}
                </div>
            </section>
        </div>
    </main>
                </Layout>
    </>
  )
}