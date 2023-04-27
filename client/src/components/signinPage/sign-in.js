import React, { useState, useEffect, useContext} from "react";
import axios, { AxiosResponse } from "axios";
import { useAuth } from "../../hooks/useAuth";

const { REACT_APP_BACKEND_URL } = process.env;

export default function Signin() {

  const { authData, login } = useAuth();
  const handleCredentialResponse = async (response) => {
    // document.getElementById("signInDiv").hidden = true;

    const { data: {user} } = await axios.post(`${REACT_APP_BACKEND_URL}/api/auth`, { credential: response.credential }, {withCredentials: true});
    // const userObject = jwt_decode(token);

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
      { theme: "outline", size: "large"}
    )
    window.google.accounts.id.prompt();
  }, []);

console.log(authData);
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-2/3 h-2/3 flex flex-col items-center justify-center border-solid rounded-xl border-2 drop-shadow-md bg-white-100">
        <div><p>ffkfkfkfkfkf</p></div>
        <div id="signInDiv" className=""></div>
          {authData && 
          <>
            <img src={authData.user.picture} className="rounded-full" />
            <h1 className="text-xl font-semibold text-center my-5">
              {authData.user.name}
            </h1>
          </>
          }
      </div>
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

