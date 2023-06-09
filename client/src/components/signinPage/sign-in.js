import React, { useState, useEffect, useContext} from "react";
import axios, { AxiosResponse } from "axios";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../api/api";



export default function Signin() {

  const { authData, login } = useAuth();
  const handleCredentialResponse = async (response) => {
    const { data: { user } } = await api.authorizeUser({ credential: response.credential });
    login(user);
  }

  useEffect(() => {
    // global google
    window.google.accounts.id.initialize( {
      client_id: `${process.env.REACT_APP_CLIENT_ID}`,
      callback: handleCredentialResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
    window.google.accounts.id.prompt();
  }, []);

console.log(authData);
  return (
    <div className="sm:h-screen flex items-center justify-center bg-gray-100 ">
      <div className="min-w-[30%] max-w-[90%] min-h-2/3 flex flex-col items-center justify-center border-solid rounded-xl border-2 drop-shadow-md bg-white p-5">
        <div className="mx-[10%] ">
          <h1 className="sm:text-5xl text-2xl text-center mt-[7%]">Добро пожаловать!</h1>
          <p className="text-center my-[5%] "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        <div id="signInDiv" className=""></div>
          {authData && 
          <>
            <img src={authData.user.picture} className="rounded-full" />
            <h1 className="text-xl font-semibold text-center my-5">
              {authData.user.name}, ты сделал первый шаг в мир Математики!
            </h1>
          </>
          }
      </div>
    </div>
  )
}


