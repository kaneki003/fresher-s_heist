import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Text,
  Box,
  Tooltip,
  useToast,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import Cardlistitem from "./Cardlistitem";

const SearchDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [search, Setsearch] = useState("");
  const [searchResults, SetsearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);
  });

  const submitHandler = async () => {
    if (!search) {
      toast({
        title: "Please enter Something in search",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);





      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };

      const { data } = await axios.get(`https://fresher-s-heist.onrender.com/api/item/searchitem?search=${search}`, config);
      setLoading(false);
      SetsearchResults(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };
  //for running submitHandler through Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  useEffect(() => {
    if (!search) SetsearchResults([]);
  }, [search]);
  return (
    <>
      <Tooltip hasArrow label="Search Item" bg="gray.300" color="black">
        <Button gap="0.7rem" ref={btnRef} onClick={onOpen}>
          <SearchIcon />
          <Text>Find Items</Text>
        </Button>
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        bg="black"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Items</DrawerHeader>
          <DrawerBody>
            <Box>
              <Input
                mb="1rem"
                type="search"
                placeholder="Search here..."
                value={search}
                onChange={(e) => Setsearch(e.target.value)}
                onKeyUp={handleKeyPress}
              />
            </Box>
            <Stack spacing={2}>
              {loading ? (
                <Stack>
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                </Stack>
              ) : (
                searchResults?.slice(0, 9).map((Item, i) => {
                  return (
                    <>
                    {
                      !(Item.isSold) && <Cardlistitem
                      key={i}
                      Item={Item}
                    />
                    }</>
                  );
                })
              )}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                SetsearchResults([]);
                Setsearch("");
              }}
            >
              Clear
            </Button>
            <Button colorScheme="blue" onClick={submitHandler}>
              Search
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
