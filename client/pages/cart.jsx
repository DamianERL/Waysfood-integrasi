import React, { useContext, useState } from "react";
import { CartContext } from "../app/cartContext";
import { UserContext } from "../app/userContext";
import Button from "../components/Atoms/button";
import Input from "../components/Atoms/input";
import Label from "../components/Atoms/label";
import Modal from "../components/Atoms/modal";
import Layout from "../components/layout";
import Map from "../components/Modal/map";
import Navbar from "../components/Navbar/navbar";
import food from "../public/dummy/food";
export default function Cart() {
  const [location, setLocation] = useState();

  const handleChange = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
    // console.log(location);
  };

  const [state, dispatch] = useContext(UserContext);
  const [carts, setCarts] = useContext(CartContext);
  const data = carts.cart;
  const [map,setMap]= useState(false)

  console.log(map)

  return (
    <>
      <Layout title="Cart">
        <Navbar />
        <div className=" mx-14 my-8">
          <p className="text-4xl font-font_a font-extrabold">Geprek Bensu</p>
          <p className="text-lg font-normal text-fontPrimary ">
            Delivery Location
          </p>
          <div className="grid mt-6 md:grid-cols-5 gap-4">
            <div className="col-span-4">
              <Input
                style=" text-base bg-white"
                name="locations"
                onChange={handleChange}
              />
            </div>
            <div className=" col-span-1">
              <Button
              onClick={()=>setMap(true)}
              style=" h-10 flex justify-center items-center gap-2  bg-fontPrimary hover:bg-fontPrimary/90">
                select on map
                <img
                  src="https://res.cloudinary.com/fnxr/image/upload/v1665602704/map_1_gt40ww.svg"
                  alt=""
                />
              </Button>
              <Modal isVisible={map} onClose={() => setMap(false)}>
                <Map/>
              </Modal>
            </div>
          </div>
          <p className="m-2">Review Your order</p>

          <div className="grid md:grid-cols-3 gap-2">
            <div
              className=" col-span-2 p-2
              border-t-2 border-b-2 border-fontPrimary
              "
            >
              <div className=" ">
                {data?.map((item, index) => (
                  <div className="grid grid-cols-3 mb-6 ">
                    <div className=" cols-span-1">
                      <img
                        className="ml-10 w-[10rem] rounded h-[6rem] "
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="text-start cols-span-1">
                      <p>{item.name}</p>
                      <button className="md:ml-3 md:text-xl active:bg-main/50 w-4 rounded">
                        -
                      </button>
                      <p className="inline px-1 bg-main/50 rounded">1</p>
                      <button className="md:ml-3 md:text-xl active:bg-main/50 w-4 rounded">
                        +
                      </button>
                    </div>
                    <div className="col-span-1 text-end">
                      <p className="text-fontRedrp mb-6">15000</p>
                      <img
                        className="ml-[18rem]"
                        src="https://res.cloudinary.com/fnxr/image/upload/v1665676293/bin_1_lovaty.svg"
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <div
                className=" w-full
              border-t-2 border-b-2 border-fontPrimary
              "
              >
                <div className="grid grid-cols-2 ">
                  <div className="mt-2">
                    <p>SubTotal</p>
                    <p className="mt-2">QTY</p>
                    <p>Ongkir</p>
                  </div>
                  <div className="grid text-end">
                    <p className="text-fontRedrp mt-2">20000</p>
                    <p className="my-2">2</p>
                    <p className="text-fontRedrp my-2">10000</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-1">
                <div>
                  <p className="font-extrabold my-2">Total</p>
                </div>
                <div className="grid text-end">
                  <p className="text-fontRedrp font-extrabold my-2">20000</p>
                </div>
                <div className=" md:ml-60 md:mt-20">
                  <Button style=" h-10 flex justify-center items-center w-40 bg-fontPrimary hover:bg-fontPrimary/90">
                    order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
