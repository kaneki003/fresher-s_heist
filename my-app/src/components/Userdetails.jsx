import { useState, useEffect, useRef, setImage } from "react";
import React from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Box,
  Stack,
  Button,
  ButtonGroup,
  Heading,
  Text,
  Divider,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormHelperText,
  Select,
  MenuDivider,
  useToast,
} from "@chakra-ui/react";
import Uploadimg from "./Uploadimg";
import { useNavigate } from "react-router-dom";

const Userdetails = ({theme}) => {
  const [image, setImage] = useState("");
  const hiddenFileInput = useRef(null);
  const [user, setUser] = useState(null);
  const [number, setNumber] = useState();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, []);

 
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileTobase(file);
    console.log(file);
  };
  const setFileTobase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };



  const UpdateProfile = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };

      let Payload = {}
      if(number){
        Payload.number=number;
      }
      if(image){
        Payload.pic=image
      }

      const { data } = await axios.put(
        "http://localhost:5000/api/user/update",
        Payload,
        config
      );

      console.log(data);

      toast({
        title: "Success",
        description: "Updated Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to update the user",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  return (
    <>
      {user && (
        <Box h="100vh">
          <Box textAlign="left" p="2rem" >
            <Heading as="h1" size="4xl" textColor={theme?"#EBEDEF":"black"} borderBottom={theme?"1px solid gray":"1px solid #7C7E80"}>
              User Details
            </Heading>
            
          </Box>

          <Box
            bgColor={theme?"#393939":"#F1EEE4"}
            borderRadius="1vh"
            textColor={theme?"#EBEDEF":"black"}
            className="image"
            p="1rem"
            w="80vw"
            display="flex"
            alignItems="center"
            flexDirection="row"
            minH="60vh"
            m="auto"
          >
            <Box
              w="40%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image
                borderRadius="full"
                boxSize="200px"
                src={user.user.pic}
                alt="Dan Abramov"
              />
              <Heading as="h1" size="3xl" noOfLines={1}>
                {user.user.name}
              </Heading>
              <Text fontSize="lg">{user.user.branch}</Text>
            </Box>
            <Box w="60%">
              <FormControl>
                <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
                  Full Name
                </FormLabel>
                <Input
                  isReadOnly
                  // variant="filled"
                  placeholder="Full Name"
                  bg={theme?"#535353":"white"}
                  mb="1rem"
                  size="lg"
                  value={user.user.name}
                />
                <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
                  Email address
                </FormLabel>
                <Input
                  // variant="filled"
                  bg={theme?"#535353":"white"}
                  placeholder="Email Address"
                  mb="1rem"
                  size="lg"
                  isReadOnly
                  value={user.user.email}
                />
                <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
                  Whatsapp Number
                </FormLabel>
                <Input
                  // variant="filled"
                  bg={theme?"#535353":"white"}
                  placeholder="Whatsapp Number"
                  mb="1rem"
                  size="lg"
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                  value={user.user.number}
                />
                <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
                  Branch Name
                </FormLabel>
                <Input
                  // variant="filled"
                  bg={theme?"#535353":"white"}
                  placeholder="Branch"
                  mb="1rem"
                  size="lg"
                  isReadOnly
                  value={user.user.branch}
                />
                <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
                  Year
                </FormLabel>
                <Select
                bg={theme?"#535353":"white"} placeholder="Select Year" mb="1rem">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Select>
                <Flex justifyContent="right" gap="1rem">
                  <Button
                    colorScheme="teal"
                    type="submit"
                    onClick={handleClick}
                  >
                    Change Profile Picture
                  </Button>
                  <Input
                    ref={hiddenFileInput}
                    type="file"
                    id="file-upload"
                    display="none"
                    cursor="pointer"
                    onChange={handleImage}
                  />
                  <Button colorScheme="teal" onClick={UpdateProfile}>Submit</Button>
                </Flex>
              </FormControl>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Userdetails;
