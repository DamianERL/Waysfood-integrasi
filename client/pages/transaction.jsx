import React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/Navbar/navbar'
import Button from '../components/Atoms/button'

export default function Transaction() {
  return (
    <>
    <Layout title="Transaction">
        <Navbar/>
    <div className='my-24 mx-28'>   
        <p>Income Transaction</p>
        <div>
            <table className='border-collapse border table-auto rounded border-slate-500 bg-white' >
                <thead  >
                    <tr  >
                
                        <th className='border w-20 border-gray-400 bg-neutral-200'>NO</th>
                        <th className='border w-60 border-gray-400 bg-neutral-200'>Name</th>
                        <th className='border w-60 border-gray-400 bg-neutral-200'>Address</th>
                        <th className='border w-60 border-gray-400 bg-neutral-200'>Product Order</th>
                        <th className='border w-60 border-gray-400 bg-neutral-200'>Status</th>
                        <th className='border w-60 border-gray-400 bg-neutral-200'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center'>
                        <td className='pl-2 bg-white border border-gray-400'>1</td>
                        <td className='pl-2 bg-white border border-gray-400'>faki</td>
                        <td className='pl-2 bg-white border border-gray-400'>jl.ayam</td>
                        <td className='pl-2 bg-white border border-gray-400'>ayam</td>
                        <td className='pl-2 bg-white border border-gray-400'>oke</td>
                        <td className='pl-2 bg-white border  border-gray-400'>
                            <div className='flex justify-center align-center m-2 gap-2'>
                            <Button>Cancel</Button>
                            <Button>Approve</Button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </div>
    </Layout>
    </>
  )
}
