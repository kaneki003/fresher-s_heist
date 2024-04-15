import React from 'react'
import { Box, Text,Image  } from "@chakra-ui/react";
import { Avatar} from "@chakra-ui/avatar";

const Cardlistitem = ({Item}) => {
  return (
     <Box
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Image
        mr={2}
        size="sm"
        cursor="pointer"
        name={Item.name}
        src={Item.pic}
      />
      <Box>
        <Text>{Item.name}</Text>
        <Text fontSize="xs">
          <b>Price : </b>
          {Item.price}
        </Text>
      </Box>
    </Box>
  )
}

export default Cardlistitem
