import React, { useState, useEffect } from "react";
import { SearchIcon, ChevronDownIcon, BellIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  Image,
  Flex,
  Input,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useNavigate } from "react-router-dom";
import SearchDrawer from "../SearchDrawer";
import { FaMoon, FaSun } from "react-icons/fa";
import axios from "axios";

const Navbar = ({ setTheme, theme, setSelectedPage, selectedPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { user, setClicked } = ChatState();
  const [clicked, setClicked] = useState("Userdetails");
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  });

  return (
    <>
      {user && (
        <Box
          bg="transparent"
          p="0.7rem 1rem"
          px="2rem"
          pl="1rem"
          width="100%"
          // border="solid white"
          height="100px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex gap={"2rem"} alignItems={"center"}>
            <Image
              src="images/logo.png"
              sx={{ filter: theme ? "invert(100%)" : "invert(0%)" }}
              w="14vw"
              h="8vh"
            ></Image>
          </Flex>
          <Box display="flex" gap="1rem" alignItems="center">
            <Button
              onClick={() => {
                setTheme((prevTheme) => !prevTheme);
              }}
              // colorScheme="teal"
              variant="outline"
              bgColor="transparent"
            >
              {theme ? <FaSun color="white" /> : <FaMoon color="white" />}
            </Button>
            <SearchDrawer />
            <Menu>
              <MenuButton as={Button} bg={theme ? "#ced4da" : "white"}>
                <Flex
                  alignItems="center"
                  justifyContent="space-around"
                  gap="5px"
                >
                  <Image
                    borderRadius="full"
                    boxSize="40px"
                    src={user.user.pic}
                    alt="Dan Abramov"
                  />
                  {user.user.name}
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setSelectedPage("Userdetails")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
