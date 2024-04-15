import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import ImageSlider from "./Imageslider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Itemselling = ({ selectedItem, theme }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const link = "https://wa.me/";

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {user && (
        <Box h="100vh" display="flex" p="2rem">
          <Box
            m="auto"
            // bgColor="#F1EEE4"
            borderRadius="1vh"
            className="image"
            p="1rem"
            w="80vw"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            minH="60vh"
            textColor={theme ? "#EBEDEF" : "black"}
            bgColor={theme ? "#393939" : "#F1EEE4"}
          >
            <Box className="image" w="60%" h="50%">
              <Box p={4} color="white">
                <ImageSlider
                  slides={[
                    {
                      image: selectedItem.pic,
                    },
                  ]}
                />
              </Box>
            </Box>
            <Box
              className="content"
              display="flex"
              flexDirection="column"
              justifyContent="left"
              textAlign="left"
              p="3rem"
              w="40%"
            >
              <Heading as="h1" size="3xl" noOfLines="3" mb="3%">
                {selectedItem.name}
              </Heading>
              <Heading as="h1" size="lg" mb="3%">
                ₹ {selectedItem.price}
              </Heading>
              <Text fontSize="lg" noOfLines="4" mb="3%">
                {selectedItem.description}
              </Text>
              <Heading as="h1" size="lg" mb="3%">
                Owner:
                {selectedItem.userid.name
                  ? selectedItem.userid.name
                  : user.user.name}
              </Heading>
              <Button
                as="a"
                href={
                  selectedItem.userid.name
                    ? link + "+91" + selectedItem.userid.number
                    : link + "+91" + user.user.number
                }
                target="_blank"
                textColor="white"
                colorScheme="green"

                // variant="outline"
                w="50%"
                justifyContent="center"
              >
                Contact on Whatsapp
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Itemselling;
