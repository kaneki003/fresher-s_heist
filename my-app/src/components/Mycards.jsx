import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

const Mycards = ({ theme, item, setSelectedItem, setSelectedPage,handleFunction,setId }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);
  });

  const UpdateItem = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };

      const { data } = await axios.put(
        "https://fresher-s-heist.onrender.com/api/item/updateitem",
        { itemId : id },
        config
      );

      console.log(data);

    } catch (error) {
      console.log("not updated");
    }
  };
  
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      // variant="outline"
      w="100%"
      h="15vh"
      bgColor={theme?"#171C21":"#F1EEE4"}
      textColor={theme?"#EBEDEF":"black"}
    >
      <Image
        objectFit="fill"
        maxW={{ base: "100%", sm: "200px" }}
        src={
          item.pic
            ? item.pic
            : "https://images.unsplash.com/photo-1667489022797-ab608913feeb?xlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        }
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody textAlign="left" pb="0">
          <Heading size="lg">{item.name}</Heading>
          <Text py="0">{item.description}</Text>
        </CardBody>

        <CardFooter pt="1" gap="1rem">
          <Button
            variant="ghost"
            colorScheme="green"
            bgColor={theme?"#253749":"#b7e4c7"}

            onClick={() => {
              setSelectedItem(item);
              setSelectedPage("Itemselling");
            }}
          >
            View
          </Button>
          <Button
            variant="ghost"
            colorScheme="green"
            bgColor={theme?"#253749":"#b7e4c7"}
            onClick={()=>{
              UpdateItem(item._id);
            }
            }
          >
            Delete
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Mycards;
