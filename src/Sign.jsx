import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = () => {
    try {
        const res = axios
        .post("http://localhost:8080/api/v1/auth/authenticate", {
          email: email,
          password: password,
        })
        if (res) {
          console.log(res.data);
    //       let unDecodeToken = res.data._data.accessToken;
    //       storageService.setAccessToken(unDecodeToken);
    //       const token = jwtDecode(unDecodeToken);
    //       loginSuccessNotify();
    //       dispatch(setIsLogin(true));
    //       dispatch(setRole(token[roleToken]));
    //       storageService.setRole(token[roleToken]);
    //       if (role === "Instructor") {
           
    // navigate("/heart");
    //       } else if (role === "Admin") {
    //         navigate("/admin");
    //       } else {
    //         navigate("/");
    //       }
        }
      } catch (error) {
        // setMessage(error.response.data._message);
        // loginFailNotify();
      }
    

  };
  return (
    <form onSubmit={signIn}>
      <h1>login</h1>
      <div className="flex flex-col gap-2 w-[400px]">
        {" "}
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login in</button>
      </div>
    </form>
  );
}

export default Sign;
