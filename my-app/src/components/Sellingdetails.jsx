import { React, useState, useEffect } from "react";
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
  Textarea,
  InputLeftElement,Spinner,
  InputRightElement,
} from "@chakra-ui/react";
import Uploadimg from "./Uploadimg";
import { ItemState } from "../Context/context";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sellingdetails = ({theme}) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [Image, setImage] = useState(""); //might be a error
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [user, setUser] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, []);

  console.log(category);

  const CreateItem = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };

      const { data } = await axios.post(
        "https://fresher-s-heist.onrender.com/api/item/createitem",
        { name: title, price: price, description: desc, category: category ,pic:Image},
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
    {user && (<Box h="100vh">
      <Box textAlign="left" p="2rem">
        <Heading as="h1" size="4xl" mb="5px" textColor={theme?"#EBEDEF":"black"} borderBottom={theme?"1px solid gray":"1px solid #7C7E80"}>
          Selling a Item
        </Heading>
      </Box>

      <Box borderRadius="1vh" m="auto" className="details" p="2rem" w="60%" bgColor={theme?"#393939":"#F1EEE4"} textColor={theme?"#EBEDEF":"black"}>
        <FormControl>
          <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
            Title
          </FormLabel>
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            // variant="filled"
            bg={theme?"#535353":"white"}
            placeholder="Enter name of product"
            mb="1rem"
            size="lg"
            value={title}
          />
          {console.log(title)}
          <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
            Product Description
          </FormLabel>
          <Textarea
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Here is a sample placeholder"
            // variant="filled"
            bg={theme?"#535353":"white"}
            mb="1rem"
          />
          <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
            Price
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="green.300"
              fontSize="1.2em"
              // bg={theme?"#535353":"white"}
            >
              ₹
            </InputLeftElement>
            <Input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Enter amount"
              // variant="filled"
              bg={theme?"#535353":"white"}
              mb="1rem"
            />
          </InputGroup>

          <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
            Select Category
          </FormLabel>
          <Select
  placeholder="Select Category"
  bg={theme?"#535353":"white"}
  mb="1rem"
  // variant="filled"
  colorScheme="green"
  onChange={(e) => {
    setCategory(e.target.value);
  }}
>
  <option value="Ed Kit">Ed Kit</option>
  <option value="Calculator">Calculator</option>
  <option value="Coat">Coat</option>
  <option value="Cycle">Cycle</option>
  <option value="Drafter">Drafter</option>
  <option value="Miscellaneous">Miscellaneous</option>
</Select>

          <FormLabel fontSize="lg" fontWeight="bolder" mb="1rem">
            Upload Images
          </FormLabel>
          <Box py="1rem">
            <Uploadimg theme={theme} setImage={setImage} />
          </Box>
          <Flex justifyContent="right" gap="1rem">
            <Button  onClick={CreateItem} colorScheme="teal" type="submit">
              {loading?<Spinner/>:"Done"}
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Box>)}
    </>
  );
};

export default Sellingdetails;
