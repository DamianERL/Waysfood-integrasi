
import Input from '../Atoms/input';
import Button from '../Atoms/button';
import { useContext, useState } from 'react';
import { UserContext } from '../../app/userContext';
export default function Register() {
    const [input,setInput]= useState("")
    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        });
        console.log(input)
    };




  return (
    <>
          <div className='p-8'>
        <p className='text-primary font-bold text-4xl mt-1 mb-10 '>Register</p>
        <form className='flex flex-col justify-center item-center'>
        <div className='w-[22rem]'>
        <Input onChange={handleChange} placeholder='EMAIL'  type='email' name="email" />
        <Input onChange={handleChange} placeholder='FULLNAME' name="name" type="text" />
        <Input onChange={handleChange} placeholder='PASSWORD' type="password" name="password" />
        <Input onChange={handleChange} placeholder='GENDER' type="text" name="gender" />
        <Input onChange={handleChange} placeholder='PHONE'name="phone" type="tell" />
        <select className=' p-0 mb-3 px-4 py-2 w-full bg-bginput rounded focus:outline-none focus:ring focus:ring-violet-300' 
        name="status" onChange={handleChange} >
          <option  hidden></option>
          <option value="as-user"> AS USER</option>
          <option value="as-patner"> AS PATNER</option>
        </select>
        </div>
        <Button  style='h-10 mt-5  bg-fontPrimary hover:bg-fontPrimary/90'>login</Button>
        </form>
      </div>
    </>
  )
}
