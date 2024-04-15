import React, { useState, useEffect } from "react";
import ImageSlider from "./Imageslider";
import { Box, Heading, Grid, Divider, useToast } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";
import Sellingcard from "./Sellingcard";
import { BsCalculator } from "react-icons/bs";
import { LuPencilRuler } from "react-icons/lu";
import { GiLabCoat } from "react-icons/gi";
import { FaBicycle } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Mainpage = ({ setSelectedItem, setSelectedPage, theme }) => {
  const [items, setItems] = useState([]);
  const [cycle, setCycle] = useState([]);
  const [calculator, setCalculator] = useState([]);
  const [drafter, setDrafter] = useState([]);
  const [ed, setEd] = useState([]);
  const [coat, setCoat] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchResults, SetsearchResults] = useState([]);
  const toast = useToast();

  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  });

  const fetchItems = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };

      const { data } = await axios.get(
        "https://fresher-s-heist.onrender.com/api/item/fetchall",
        config
      );

      // console.log(data);
      setItems(data);
      setCycle(
        items.filter((item) => item.category === "Cycle" && !item.isSold)
      );
      setEd(items.filter((item) => item.category === "Ed Kit" && !item.isSold));
      setCalculator(
        items.filter((item) => item.category === "Calculator" && !item.isSold)
      );
      setCoat(items.filter((item) => item.category === "Coat" && !item.isSold));
      setDrafter(
        items.filter((item) => item.category === "Drafter" && !item.isSold)
      );

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    fetchItems();
  }, [user]);

  return (
    <Box h="100%" w="100%" p="1rem">
      <Box className="crousel" display="flex" justifyContent="center" w="100%">
        <ImageSlider
          h="50vh"
          w="100%"
          slides={[
            {
              image: "images/1.png",
            },
            {
              image: "images/2.png",
            },
            {
              image: "images/3.png",
            },
            {
              image: "images/4.png",
            },
          ]}
        />
      </Box>
      <Box
        m="auto"
        w="80vw"
        display="grid"
        gridTemplateColumns="repeat(5,1fr)"
        gap="15px"
        mt="3rem"
      >
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap="10px"
          borderRadius="10px"
          bgColor={theme ? "black" : "#d8f3dc"}
          p="1rem"
        >
          <BsCalculator
            style={{
              filter: theme ? "invert(100%)" : "invert(0%)",
              fontSize: "40px",
            }}
          />

          <Heading textColor={theme ? "#EBEDEF" : "black"} as="h2" size="lg">
            {calculator.length} Calculators
          </Heading>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap="10px"
          borderRadius="10px"
          bgColor={theme ? "black" : "#d8f3dc"}
          textColor="#081c15"
          p="1rem"
        >
          <LuPencilRuler
            style={{
              filter: theme ? "invert(100%)" : "invert(0%)",
              fontSize: "40px",
            }}
            fontSize="40px"
          />
          <Heading textColor={theme ? "#EBEDEF" : "black"} as="h2" size="lg">
            {ed.length} Ed Kits
          </Heading>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap="10px"
          borderRadius="10px"
          bgColor={theme ? "black" : "#d8f3dc"}
          textColor="#081c15"
          p="1rem"
        >
          <GiLabCoat
            style={{
              filter: theme ? "invert(100%)" : "invert(0%)",
              fontSize: "40px",
            }}
            fontSize="40px"
          />
          <Heading textColor={theme ? "#EBEDEF" : "black"} as="h2" size="lg">
            {coat.length} Coats
          </Heading>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap="10px"
          borderRadius="10px"
          bgColor={theme ? "black" : "#d8f3dc"}
          textColor="#081c15"
          p="1rem"
        >
          <FaBicycle
            style={{
              filter: theme ? "invert(100%)" : "invert(0%)",
              fontSize: "40px",
            }}
            fontSize="40px"
          />
          <Heading textColor={theme ? "#EBEDEF" : "black"} as="h2" size="lg">
            {cycle.length} Cycles
          </Heading>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap="10px"
          borderRadius="10px"
          bgColor={theme ? "black" : "#d8f3dc"}
          textColor="#081c15"
          p="1rem"
        >
          <FaRulerCombined
            style={{
              filter: theme ? "invert(100%)" : "invert(0%)",
              fontSize: "40px",
            }}
            fontSize="40px"
          />
          <Heading textColor={theme ? "#EBEDEF" : "black"} as="h2" size="lg">
            {drafter.length} Drafters
          </Heading>
        </Box>
      </Box>
      <Box
        bgColor={theme ? "#393939" : "#F1EEE4"}
        borderRadius="1vh"
        className="my_cards"
        p="1rem"
        w="80vw"
        h="70vh"
        m="auto"
        mt="3rem"
        sx={{
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
          '&::-webkit-scrollbar-corner': {
            background: 'transparent', // This will remove the white corner
          },
          scrollbarWidth: 'thin',
          scrollbarColor: '#888 #f1f1f1',
        }}
        overflowY="scroll"
      >
        <Box w="100%" p="2rem">
          <Heading
            textColor={theme ? "#EBEDEF" : "black"}
            borderBottom={theme ? "1px solid gray" : "1px solid #7C7E80"}
            as="h1"
            size="2xl"
          >
            Recent Arrivals
          </Heading>
        </Box>
        <Grid
          w="100%"
          h="fit-content"
          templateColumns="repeat(4, 1fr)"
          gap="1%"
        >
          {items.map((item, i) => {
            return (
              <>
                {!item.isSold && (
                  <Sellingcard
                    theme={theme}
                    setSelectedPage={setSelectedPage}
                    setSelectedItem={setSelectedItem}
                    key={i}
                    item={item}
                  />
                )}
              </>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Mainpage;
