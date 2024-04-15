import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Googlelogin = () => {

    const navigate=useNavigate();


    const submitHandler = async (name,email,branch) => {
            
        try {
    
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const { data } = await axios.post(
            'https://fresher-s-heist.onrender.com/api/user',
            {
              email: email,
              branch:branch,
              name:name
            },
            config
          );
    
          console.log(data);
    
          if (data.success) {
            //redirect
            localStorage.setItem("userinfo", JSON.stringify(data));
            
            navigate("/dashboard");
          } 
        } catch (error) {
          console.log(error)
        }
      };

  return (
    <Box w="100%">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse?.credential);
            // console.log(decoded);
            const name=decoded.given_name;
            // console.log(name);
            const email=decoded.email;
            // console.log(email);
            const branch=decoded.name.split(':')[1].split('.')[0].replace("Engg", "").trim();
            // console.log(branch);
            const year=24-email.match(/\d+/g);

            submitHandler(name,email,branch);

        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </Box>
  );
};

export default Googlelogin;
