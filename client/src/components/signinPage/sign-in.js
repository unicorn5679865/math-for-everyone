import React, { useState, useEffect, useContext} from "react";
import axios, { AxiosResponse } from "axios";
import GoogleLogin from "react-google-login";
import jwt_decode from "jwt-decode"

export default function Signin() {

  const [user, setUser] = useState({});

  function handleCredentialResponse(response) {
    console.log("encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }


  useEffect(() => {
    // global google
    google.accounts.id.initialize( {
      client_id: `${process.env.REACT_APP_CLIENT_ID}`,
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )
  }, []);


  return (
    <div id="signInDiv" className="h-screen w-screen flex items-center justify-center flex-col bg-gray-100">
        {user && 
        <>
          <img src={user.picture} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
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

