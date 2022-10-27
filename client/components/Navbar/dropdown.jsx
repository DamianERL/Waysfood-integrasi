import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
// import Modal from '../Atoms/modal'
import Dropdown from "../Atoms/dropdown";
import Link from "next/link";
import { UserContext } from "../../app/userContext";
import { CartContext } from "../../app/cartContext";
export default function dropdown() {
  const router = useRouter();
  const [modalProfil, setModalProfil] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  const [carts,setCarts]=useContext(CartContext)

  console.log("status di cart",state)
  console;
  const hadleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        {state.user.role === "customer"?
        
        <img  
        onClick={() => router.push("/cart")}
        className="cursor-pointer  w-9 h-9"
        src="https://res.cloudinary.com/fnxr/image/upload/v1665643577/shopping-basket_1_1_1_bunesh.svg"
        alt=""
        />
        :""}
        {state.user.role === "customer"?
        
        <div className=
          {carts.cart?.length ===null
          ?"hidden"
          :carts.cart?.length === 0
          ?"hidden"
          :carts.cart?.length ===undefined
          ?"hidden"
          :"circle"
          }>{carts.cart?.length}
        </div>
        :""}
        <img
          onClick={() => {
            setModalProfil(true);
          }}
          className="w-16 h-16 cursor-pointer  rounded-full"
          src="https://res.cloudinary.com/fnxr/image/upload/v1665621418/taejune-kim-blonde-gtz-pnix-taejunekim_zzgsfj.jpg"
          alt=""
        />
        <Dropdown isVisible={modalProfil} onClose={() => setModalProfil(false)}>
          <div className=" flex justify-center items-center">
            <div className=" gap-4 flex flex-col ">
              {state.user.role === "patner" ? (
                <Link href="/profil-patner">
                  <div className="flex items-center ">
                    <img
                      src="https://res.cloudinary.com/fnxr/image/upload/v1665566973/profile_h4jscd.svg"
                      alt=""
                    />
                    <p className="m-2">Profile Patner</p>
                  </div>
                </Link>
              ) : (
                <Link href="/profil">
                  <div className="flex items-center">
                    <img
                      src="https://res.cloudinary.com/fnxr/image/upload/v1665566973/profile_h4jscd.svg"
                      alt=""
                    />
                    <p className="m-2">Profil</p>
                  </div>
                </Link>
              )}
              {state.user.role === "patner" ? (
                <Link href="/add-product">
                  <div className="flex items-center">
                    <img
                      src="https://res.cloudinary.com/fnxr/image/upload/v1665566974/burger_fyxhgs.svg"
                      alt=""
                    />
                    <p className="m-2">Add Product</p>
                  </div>
                </Link>
              ) : (
                ""
              )}
              <div onClick={hadleLogout} className="flex items-center ">
                <img
                  src="https://res.cloudinary.com/fnxr/image/upload/v1665402927/logout_1_d43eax.svg"
                  alt=""
                />
                <p className="m-2">Logout</p>
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </>
  );
}
