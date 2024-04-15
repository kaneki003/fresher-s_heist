import React from "react";
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
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Mycards from "./Mycards";
import { useState, useEffect } from "react";

const Youritems = ({ setSelectedItem, setSelectedPage, theme }) => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [id, setId] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);
  });
  // console.log(user.auhToken)

  const deleteItem = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };

      const { data } = await axios.delete(
        "http://localhost:5000/api/item/delete",
        { itemId: id },
        config
      );

      // console.log(data);
    } catch (error) {
      console.log("not found");
      setLoading(false);
    }
  };

  return (
    <>
      {user && (
        <Box h="100vh">
          <Box textAlign="left" p="2rem">
            <Heading
              as="h1"
              size="4xl"
              textColor={theme ? "#EBEDEF" : "black"}
              borderBottom={theme ? "1px solid gray" : "1px solid #7C7E80"}
            >
              Your Items
            </Heading>
          </Box>

          <Box
            bgColor={theme ? "#393939" : "#F1EEE4"}
            borderRadius="1vh"
            className="my_cards"
            p="1rem"
            w="80vw"
            display="flex"
            // alignItems="center"
            flexDirection="row"
            h="70vh"
            m="auto"
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
              "&::-webkit-scrollbar-corner": {
                background: "transparent", // This will remove the white corner
              },
              scrollbarWidth: "thin",
              scrollbarColor: "#888 #f1f1f1",
            }}
            overflowY="scroll"
            overflowX="hidden"
            scrollBehavior="smooth"
          >
            <Grid
              w="100%"
              h="fit-content"
              templateColumns="repeat(2, 1fr)"
              gap="1%"
            >
              {user.user.selling_items.map((item, i) => {
                return (
                  <>
                    {!item.isSold && (
                      <Mycards
                        theme={theme}
                        key={i}
                        item={item}
                        setSelectedPage={setSelectedPage}
                        setSelectedItem={setSelectedItem}
                      />
                    )}
                  </>
                );
              })}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Youritems;
