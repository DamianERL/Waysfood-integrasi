import Router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { API } from "../config/api";
import { setAuthToken } from "../config/api";

export const Auth = ({ children }) => {
  const router = useRouter();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("ok",state.user.role)
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (state.isLogin === false && !isLoading) {
      router.push("/");
    } 
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/get-user", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      // console.log("ini data user", response);

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // console.log("oke", payload);
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // user : {asdadadsadasd}

  useEffect(() => {
    checkUser();
  }, []);

  return <>{isLoading ? <></> : children}</>;
};
