import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useToast,
  Flex,
} from "@chakra-ui/react";
import {
  CalendarIcon,
  ChatIcon,
  InfoIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { ChatState } from "../../Context/ChatProvider";

const Sidebar = ({
  setSelectedCategory,
  setSelectedCategoryItems,
  selectedPage,
  setSelectedPage,
  theme,
}) => {
  const [user, setUser] = useState(null);
  const [clicked, setClicked] = useState("Userdetails");
  const [searched, setSearched] = useState("");
  // const { setClicked, clicked } = ChatState();
  // const navigate = useNavigate();
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

  const logoutHandler = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };

  const SearchCategory = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/item/searchitem?search=${searched}`,
        config
      );

      console.log(data);
      setSelectedCategoryItems(data);
      toast({
        title: "Success",
        description: "Fetched Successfully",
        status: "success",
        duration: 500,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to fetch category data",
        status: "error",
        duration: 500,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searched) {
      SearchCategory();
    }
  }, [searched]);

  return (
    <Stack
      mt="2rem"
      w="13%"
      h="95%"
      spacing="1rem"
      alignItems="center"
      bg="transparent"
    >
      <Button
        color={clicked === "Homepage" ? "black" : "white"}
        bgColor={clicked === "Homepage" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        justifyContent={"flex-start"}
        onClick={() => {
          setSelectedPage("Mainpage");
        }}
      >
        <AiOutlineHome fontSize="20px" />
        HomePage
      </Button>
      <Menu>
        <MenuButton
          as={Button}
          color={clicked === "Popular Categories" ? "black" : "white"}
          bgColor={clicked === "Popular Categories" ? "white" : "transparent"}
          _hover={{ bg: "white", color: "black" }}
          w="200px"
          gap="1rem"
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems="center"
          onClick={() => setSelectedPage("Popular Categories")}
        >
          <Flex gap="1rem">
            <HamburgerIcon fontSize="20px" />
            Varieties
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem
              onClick={() => {
                setSearched("Ed Kit");
                setSelectedCategory("Ed Kit");
                SearchCategory();
                setSelectedPage("Categoricalitems");
              }}
            >
              Ed Kit
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSearched("Calculator");
                setSelectedCategory("Calculator");
                SearchCategory();
                setSelectedPage("Categoricalitems");
              }}
            >
              Calculator
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSearched("Coat");
                setSelectedCategory("Coat");
                SearchCategory();
                setSelectedPage("Categoricalitems");
              }}
            >
              Coat
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSearched("Cycle");
                setSelectedCategory("Cycle");
                SearchCategory();
                setSelectedPage("Categoricalitems");
              }}
            >
              Cycle
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSearched("Drafter");
                setSelectedCategory("Drafter");
                SearchCategory();
                setSelectedPage("Categoricalitems");
              }}
            >
              Drafter
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSearched("Miscellaneous");
                setSelectedCategory("Miscellaneous");
                SearchCategory();
                setSelectedPage("Categoricalitems");
              }}
            >
              Miscellaneous
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <Button
        color={clicked === "Your_Items" ? "black" : "white"}
        bgColor={clicked === "Your_Items" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        justifyContent={"flex-start"}
        onClick={() => setSelectedPage("Youritems")}
      >
        <BsCart4 />
        Your Items
      </Button>
      <Button
        color={clicked === "Sell_a_Item" ? "black" : "white"}
        bgColor={clicked === "Sell_a_Item" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        justifyContent={"flex-start"}
        onClick={() => setSelectedPage("Sellingdetails")}
      >
        <GiCash />
        Sell a Item
      </Button>
      <Button
        color={clicked === "Edit_Profile" ? "black" : "white"}
        bgColor={clicked === "Edit_Profile" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        justifyContent={"flex-start"}
        onClick={() => setSelectedPage("Userdetails")}
      >
        <GrUserSettings />
        Edit Profile
      </Button>
      
      <Divider />
      <Button
        color="white"
        _hover={{ bg: "white", color: "black" }}
        bgColor="transparent"
        w="200px"
        gap="1rem"
        display={"flex"}
        // onClick={logoutHandler}
        justifyContent={"flex-start"}
        onClick={()=>{
          logoutHandler()
        }}
      >
        <i class="fas fa-sign-out-alt"></i>
        Log Out
      </Button>
    </Stack>
  );
};

export default Sidebar;
