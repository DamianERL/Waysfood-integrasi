import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout";
import Navbar from "../components/Navbar/navbar";
import Rupiah from "rupiah-format";
import Button from "../components/Atoms/button";
import { UserContext } from "../app/userContext";
import { API } from "../config/api";
import Router from "next/router";

export default function Transaction() {
  const [state] = useContext(UserContext);
  const ID = state?.user?.id;

  const [data, setData] = useState([]);

  console.log("data product", data.product);
  console.log("data", ID);

  useEffect(() => {
    const findProduct = async (e) => {
      try {
        const res = await API.get(`/user/${ID}`,{
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    findProduct();
  }, [setData]);

  return (
    <>
      <Layout title="Transaction">
        <Navbar />
        <div className="my-20 mx-24">
          <p className="text-4xl mb-8 font-bold ">List Product</p>
          <div className="flex justify-center items-center">
            <table className="border-collapse  table-auto rounded-t-md border-black bg-white">
              <thead>
                <tr>
                  <th className="border  w-20   border-gray-400 bg-neutral-200">
                    NO
                  </th>
                  <th className="border w-60 border-gray-400 bg-neutral-200">
                    Image
                  </th>
                  <th className="border w-60 border-gray-400 bg-neutral-200">
                    Name
                  </th>
                  <th className="border w-60 border-gray-400 bg-neutral-200">
                    Price
                  </th>
                  <th className="border w-60 border-gray-400 bg-neutral-200">
                    Action
                  </th>
                </tr>
              </thead>
              {data?.product?.map((item, index) => (
                <tbody key={index}>
                  <tr className="text-center  ">
                    <td className="pl-2 bg-white border border-gray-400">
                      {item.id}
                    </td>
                    <td className="pl-2 flex items-center justify-center bg-white border border-gray-400">
                      <img
                        className="w-20 my-4 h-16 rounded-lg"
                        src={item?.image}
                        alt=""
                      />
                    </td>
                    <td className="pl-2 bg-white border border-gray-400">
                      {item?.Name}
                    </td>
                    <td className="pl-2 bg-white border border-gray-400">
                      {Rupiah.convert(item?.price)}
                    </td>
                    <td className="pl-2 bg-white border  border-gray-400">
                      <div className="flex justify-center align-center m-2 gap-2">
                        <Button
                          onClick={() =>
                            Router.push(`/edit-product/${item.id}`)
                          }
                        >
                          Edit
                        </Button>
                        <Button>Delete</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}
