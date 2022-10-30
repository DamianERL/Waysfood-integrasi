import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { CartContext } from "../app/cartContext";
import { UserContext } from "../app/userContext";
import Button from "../components/Atoms/button";
import Input from "../components/Atoms/input";
import Label from "../components/Atoms/label";
import Modal from "../components/Atoms/modal";
import Layout from "../components/layout";
import Map from "../components/Modal/map";
import Navbar from "../components/Navbar/navbar";
import { API } from "../config/api";
import food from "../public/dummy/food";
import Card from "../components/Atoms/card";
import { useMutation } from "react-query";

export default function Cart() {
  const [location, setLocation] = useState();
  const [map, setMap] = useState(false);
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };

  console.log("data", data);
  console.log("fetcing", data.order);

  useEffect(() => {
    const findPending = async (e) => {
      try {
        const res = await API.get("/cart-status", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setData(res.data.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    findPending();
  }, [setData]);

  const handleDelete = useMutation(async (id) => {
    try {
      await API.delete(`/order/${id}`);
      const res = await API.get("/cart-status", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <Layout title="Cart">
            <Navbar />
            <div className=" mx-14 my-8">
              <p className="text-4xl flex gap-4 mb-4 items-center font-font_a font-extrabold">
                <img
                  className="w-16 h-16 cursor-pointer  rounded-full"
                  src={data?.order[0]?.product?.user?.image}
                  alt=""
                />
                {data?.order[0]?.product?.user?.name}
              </p>
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
                    onClick={() => setMap(true)}
                    style=" h-10 flex justify-center items-center gap-2  bg-fontPrimary hover:bg-fontPrimary/90"
                  >
                    select on map
                    <img
                      src="https://res.cloudinary.com/fnxr/image/upload/v1665602704/map_1_gt40ww.svg"
                      alt=""
                    />
                  </Button>
                </div>
              </div>
              <p className="m-2">Review Your order</p>

              <div className="grid md:grid-cols-3 gap-2">
                <div
                  className=" col-span-2 p-2
              border-t-2 border-b-2 border-fontPrimary
              "
                >
                  <div className="overflow-y-auto scrollbar-hide h-[15rem] ">
                    {data.order.map((item, index) => (
                      <div key={index} className="grid grid-cols-2 mb-6 ">
                        <div className=" flex">
                          <div className="w-[10rem] h-[6rem]  ">
                            <img
                              className="w-[8rem] rounded  h-[6rem] "
                              src={item.product.image}
                              alt=""
                            />
                          </div>
                          {/* <div className="text-start cols-span-1"> */}
                          <div className="ml-4  w-80 h-24   ">
                            <p>{item.product.Name}</p>
                            <div className="flex mt-8 justify-center items-center ">
                              <button className="md:mx-3 flex justify-center items-center md:text-xl active:bg-main/50 w-8 h-8 rounded">
                                -
                              </button>
                              <p className="inline px-1 bg-main/50 rounded">
                                1
                              </p>
                              <button className="md:ml-3 flex justify-center items-center md:text-xl active:bg-main/50 w-8 h-8 rounded">
                                +
                              </button>
                            </div>
                          </div>
                          {/* </div> */}
                        </div>
                        <div className="col-span-1  text-end">
                          <div className="flex flex-col items-end">
                            <p className="text-fontRedrp mb-6">
                              {item?.product.price}
                            </p>
                            <img
                              className=" w-8"
                              onClick={() => handleDelete.mutate(item.id)}
                              src="https://res.cloudinary.com/fnxr/image/upload/v1665676293/bin_1_lovaty.svg"
                              alt=""
                            />
                          </div>
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
                      <p className="text-fontRedrp font-extrabold my-2">
                        20000
                      </p>
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
            <Modal isVisible={map} onClose={() => setMap(false)}>
              <Map />
            </Modal>
          </Layout>
        </>
      )}
    </>
  );
}
