import React from "react";
import { Box, Heading, Grid, Divider } from "@chakra-ui/react";
import Sellingcard from "./Sellingcard";

const Categoricalitems = ({
  theme,
  category,
  selectedCategoryItems,
  setSelectedItem,
  setSelectedPage,
}) => {
  return (
    <Box
      bgColor={theme ? "#393939" : "#F1EEE4"}
      textColor={theme ? "#EBEDEF" : "black"}
      borderRadius="1vh"
      className="my_cards"
      p="1rem"
      w="80vw"
      h="100vh"
      m="auto"
      mt="3rem"
      overflow="scroll"
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
      overflowX="hidden"
    >
      <Box w="100%" p="2rem">
        <Heading
          as="h1"
          size="2xl"
          mb="1rem"
          borderBottom={theme ? "1px solid gray" : "1px solid #7C7E80"}
        >
          {category}
        </Heading>
      </Box>
      <Grid w="100%" h="fit-content" templateColumns="repeat(4, 1fr)" gap="1%">
        {selectedCategoryItems.map((item, i) => {
          return (
            <>
              {!item.isSold && (
                <Sellingcard
                  setSelectedPage={setSelectedPage}
                  setSelectedItem={setSelectedItem}
                  key={i}
                  item={item}
                  theme={theme}
                />
              )}
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Categoricalitems;
