
import Button from '../Atoms/button';
import Input from '../Atoms/input';
import { useContext, useState } from 'react';
import { UserContext } from '../../app/userContext';
import { useRouter } from 'next/router';

export default function Login() {
  const [state,dispatch]=useContext(UserContext)
  const [input,setInput] =useState("")
  const route =useRouter()

  // console.log(state)
    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    // console.log(input)

    const handleSubmit=(e)=>{
      e.preventDefault()
      const email = input.email 
      const password = input.password
      
      let status;
      if (email === "admin@gmail"){
        status = "admin";
        route.push("/transaction")
      }else{
        status="customer"
        route.push("/")
      }
      const data ={
        email,
        password,
        status,
      };

      dispatch({
        type:"LOGIN_SUCCESS",
        payload:data,
      })
      

    }





  return (

    <>
    <div className='p-8'>
        <p className=' font-bold text-4xl mt-1 mb-10 text-primary '>Login</p>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center item-center'>
        <div className='w-[22rem]'>
        <Input
         onChange={handleChange} 
        placeholder='EMAIL' name="email" />
        <Input
        style="mt-3  "
         onChange={handleChange} 
         placeholder='PASSWORD' name="password"  />
        <Button type="submit" style='h-10 mt-5  bg-fontPrimary hover:bg-fontPrimary/90'>login</Button>
        </div>
        </form>
      </div>
    </>
  )
}
