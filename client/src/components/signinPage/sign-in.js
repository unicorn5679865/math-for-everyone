import React, { useState, useEffect, useContext} from "react";
import axios, { AxiosResponse } from "axios";
import GoogleLogin from "react-google-login";
import jwt_decode from "jwt-decode"
import { useAuth } from "../../hooks/useAuth";

const { REACT_APP_BACKEND_URL } = process.env;

export default function Signin() {

  const { authData, login } = useAuth();
  const handleCredentialResponse = async (response) => {
    // document.getElementById("signInDiv").hidden = true;

    const { data: {token} } = await axios.post(`${REACT_APP_BACKEND_URL}/api/auth`, { token: response.credential });
    const userObject = jwt_decode(token);

    login(userObject, token);
  }

  useEffect(() => {
    // global google
    window.google.accounts.id.initialize( {
      client_id: `${process.env.REACT_APP_CLIENT_ID}`,
      callback: handleCredentialResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )
  }, []);

console.log(authData);
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col bg-gray-100">
      <div id="signInDiv"></div>
        {authData && 
        <>
          <img src={authData.user.picture} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {authData.user.name}
          </h1>
        </>
        }
  </div>

  )
}


// export default function Signin() {
//   const [user, setUser] = useState(null);
//   const onSuccess = async (res) => {
//     try {
//       const result = await axios.post("/auth/", {
//         token: res?.tokenId,
//       });

//       setUser(result.data.user);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   console.log(`${process.env.REACT_APP_CLIENT_ID}`)
//   return (
//     <div className="h-screen w-screen flex items-center justify-center flex-col bg-gray-800">
//         <div className="h-screen w-screen flex items-center justify-center flex-col">
//           {!user && (
//           <GoogleLogin
//           clientId={`${process.env.REACT_APP_CLIENT_ID}`}
//           onSuccess={onSuccess}
//           onFailure={(err) => {console.log(err)}}
//           />
//         )}

//       {user && (
//         <>
//           <img src={user.avatar} className="rounded-full" />
//           <h1 className="text-xl font-semibold text-center my-5">
//             {user.name}
//           </h1>
//         </>
//       )
//       }
//     </div>
//   </div>
//   )
// }

