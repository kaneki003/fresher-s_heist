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
} from "@chakra-ui/react";

const Sellingcard = ({item,setSelectedItem,setSelectedPage,theme}) => {
  return (
   <>
   {item &&  <Box>
      <Card W="20rem" bgColor={theme?"#0E0E0E":"#F1EEE4"} textColor={theme?"#EBEDEF":"black"} >
        <CardBody pb="0">
          <Image
            src={item.pic?item.pic:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            H="10rem"
            // border="solid black"
            w="100%"
            objectFit="cover"
          />
          <ButtonGroup display="flex" mt="0.5rem">
            <Button variant="solid" bgColor="#F3ECD8" size="sm" fontWeight="700">
              {item.category}
            </Button>
          </ButtonGroup>
          <Heading size="md" noOfLines="2" textAlign="left" mt="1rem">
            {item.name}
          </Heading>
          <Text textColor={theme?"#EBEDEF":"blue.600"} fontSize="2xl" textAlign="left">
          ₹{item.price}
          </Text>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter p="1rem" m="0">
          <ButtonGroup spacing="1">
            <Button variant="solid" bgColor="#DBC386" size="md" onClick={()=>{
              setSelectedItem(item);
              setSelectedPage("Itemselling");
            }
            }>
              Buy now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>}
   </>
  );
};

export default Sellingcard;
