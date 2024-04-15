import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import Navbar from "./Miscellaneous components/Navbar";
import Sidebar from "./Miscellaneous components/Sidebar";
import Userpage from "./Miscellaneous components/Userpage";

const Dashboard = ({ theme, setTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);
  const [selectedPage, setSelectedPage] = useState("Mainpage");

  return (
    <Box
      className="App"
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      bgColor={theme ? "black" : "#34a0a4"}
      
    >
      {
        <Navbar
          setTheme={setTheme}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          theme={theme}
        />
      }
      <Flex justifyContent="space-between" h="90%" w="100%" pl="1rem">
        {
          <Sidebar
            theme={theme}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setSelectedCategory={setSelectedCategory}
            setSelectedCategoryItems={setSelectedCategoryItems}
          />
        }
        {
          <Userpage
            theme={theme}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            selectedCategory={selectedCategory}
            selectedCategoryItems={selectedCategoryItems}
          />
        }
      </Flex>
    </Box>
  );
};

export default Dashboard;
