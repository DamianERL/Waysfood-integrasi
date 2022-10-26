import React, { useState } from 'react'
import Button from '../components/Atoms/button'
import Input from '../components/Atoms/input'
import Layout from '../components/layout'
import Navbar from '../components/Navbar/navbar'


export default function editProfilPatner() {
  const [patner,setPatner]= useState("")
  const [preImage,setpreImage]= useState(null)

  const handleChange = (e)=>{
    // e.preventDefault()
    setPatner({
      ...patner,
      [e.target.name]:
      e.target.type === "file"? e.target.files :e.target.value
    });
    if(e.target.type === "file")
    setpreImage(e.target.files[0].name) 

    console.log(preImage)
  };

  return (
    <>
    <Layout title="Edit-Profil-Patner">
    <Navbar />
        <div>
          <div className="my-12 mx-16">
            <p className="font-extrabold text-4xl font-font_a">Edit Profile Patner</p>

            <form className="grid md:grid-cols-12 gap-2">
              <div className="grid col-span-8">
                <Input
                  name="nameProfil"
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="grid col-span-4">
                <label
                  className="bg-fontPrimary h-10 hover:bg-fontPrimary/90 text-white w-full pt-2 text-center text-xs font-bold transition duration-300 rounded"
                  htmlFor="image"
                >
                  <div className="text-white" >{preImage ? preImage : "Attach Image"}</div>
                </label>
                <Input
                  name="imageProfil"
                  hidden
                  onChange={handleChange}
                  id="image"
                  type="file"
                />
              </div>
              <div className="grid col-span-12">
                <Input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="grid col-span-12">
                <Input
                  name="phone"
                  type="tell"
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>
              <div className="grid col-span-8">
                <Input
                  name="locatio"
                  type="text"
                  placeholder="Location"
                  onChange={handleChange}
                />
              </div>
              <div className="grid col-span-4">
                <Button style="h-10 flex justify-center items-center gap-2 py-2 px-10 bg-fontPrimary hover:bg-fontPrimary/90">
                  select on map{" "}
                  <img
                    src="https://res.cloudinary.com/fnxr/image/upload/v1665602704/map_1_gt40ww.svg"
                    alt=""
                  />
                </Button>
              </div>
              <div className="grid col-span-8"></div>
              <div className="grid col-span-4">
                <Button style="h-8 bg-fontPrimary hover:bg-fontPrimary/80">
                  oke
                </Button>
              </div>
            </form>
          </div>
        </div>
    </Layout>
    </>
  )
}
