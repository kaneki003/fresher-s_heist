import React from "react";
import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup, Flex, Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  SimpleGrid,
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Text,
  Divider,
  Stack,
} from "@chakra-ui/react";
import Googlelogin from "./Googlelogin";
import { BsCheckCircleFill } from "react-icons/bs";

//**  3.Images designer 4.Toast naming

const Homepage = () => {
  return (
    <Box h="screen" bgColor="white">
      <Flex justifyContent="space-around" mb="12vh">
        <Image src="images/logo.png" w="16vw" h="8vh"></Image>
        <Flex alignItems="center" gap="1vw">
          <Button colorScheme="teal" variant="ghost" size="lg">
            Home
          </Button>
          <Button colorScheme="teal" variant="ghost" size="lg">
            About
          </Button>
          <Button colorScheme="teal" variant="ghost" size="lg">
            Offerings
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="green" variant="solid" size="lg">
                Sign Up
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w="fit-content" p="1rem">
                <PopoverBody>
                  <Googlelogin />
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Flex>
      </Flex>
      <Box className="hero">
        <Heading as="h6" size="md">
          DISCOVER PRE-LOVED TREASURES
        </Heading>
        <br />
        <Heading as="h1" size="4xl">
          Welcome to Fresher’s Heist
        </Heading>
        <br />
        <Button
          colorScheme="green"
          variant="solid"
          size="lg"
          px="2rem"
          py="1.5rem"
          mb="3vh"
        >
          Explore Now
        </Button>
      </Box>
      <Box w="100%">
        <Image
          src="images/title.png"
          alt="Dan Abramov"
          m="auto"
          w="70%"
          borderRadius="1vh"
          h="55vh"
        />
      </Box>
      <Box mt="3%" bgColor="#f5f5de" py="5rem">
        <Box className="heading" mb="3%">
          <Heading as="h1" size="md" noOfLines={1} mb="2rem">
            OUR UNIQUE VALUES
          </Heading>
          <Heading as="h1" size="xl" noOfLines={1}>
            Why Choose Fresher's Heist
          </Heading>
        </Box>
        <Box className="cards" w="100%" px="20rem">
          <SimpleGrid spacing={4} templateColumns="repeat(3,1fr)">
            <Card size="lg">
              <CardHeader pt="3rem" pb="0">
                <Heading size="sm" textColor="green">
                  01.
                </Heading>
              </CardHeader>
              <CardBody>
                <Heading size="md" pb="1rem">
                  Instant Communication
                </Heading>
                <Text size="md" py="0">
                  Connect directly with sellers via WhatsApp for quick responses
                  and seamless transactions.
                </Text>
              </CardBody>
            </Card>
            <Card size="lg">
              <CardHeader pt="3rem" pb="0">
                <Heading size="sm" textColor="green">
                  02.
                </Heading>
              </CardHeader>
              <CardBody>
                <Heading size="md" pb="1rem">
                  Detailed Listings
                </Heading>
                <Text size="md" py="0">
                  Browse items with comprehensive descriptions and images for
                  accurate assessments of the product.
                </Text>
              </CardBody>
            </Card>
            <Card size="lg">
              <CardHeader pt="3rem" pb="0">
                <Heading size="sm" textColor="green">
                  03.
                </Heading>
              </CardHeader>
              <CardBody>
                <Heading size="md" pb="1rem">
                  Transparent Process
                </Heading>
                <Text size="md" py="0">
                  Enjoy a transparent selling experience with real-time updates
                  and secure payment methods.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
      <Box className="popular_cat" w="100%" py="5rem">
        <Box className="heading" mb="3%">
          <Heading as="h1" size="md" noOfLines={1} mb="2rem">
            BROWSE OUR ITEMS
          </Heading>
          <Heading as="h1" size="xl" noOfLines={1}>
            Discover Our Latest Offerings
          </Heading>
        </Box>
        <Box className="cards" w="100%" px="20rem">
          <SimpleGrid spacing={4} templateColumns="repeat(4,1fr)" gap="3vh">
            <Card maxW="sm" borderTopRadius="10px">
              <CardBody py="0" px="0">
                <Image
                  src="images/ed.png"
                  alt="Green double couch with wooden legs"
                  borderBottomRadius="0"
                  borderTopRadius="10px"
                  objectFit="cover"
                />
              </CardBody>
              <CardFooter>
                <Text w="100%" fontSize="xl" textColor="green">
                  ED KIT
                </Text>
              </CardFooter>
            </Card>
            <Card maxW="sm" borderTopRadius="10px">
              <CardBody py="0" px="0">
                <Image
                  src="images/cycle.png"
                  alt="Green double couch with wooden legs"
                  borderBottomRadius="0"
                  borderTopRadius="10px"
                />
              </CardBody>
              <CardFooter>
                <Text w="100%" fontSize="xl" textColor="green">
                  CYCLE
                </Text>
              </CardFooter>
            </Card>
            <Card maxW="sm" borderTopRadius="10px">
              <CardBody
                py="0"
                px="0"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="images/greycoat.png"
                  alt="Green double couch with wooden legs"
                  borderBottomRadius="0"
                  borderTopRadius="10px"
                />
              </CardBody>
              <CardFooter>
                <Text w="100%" fontSize="xl" textColor="green">
                  GREY-APPRON
                </Text>
              </CardFooter>
            </Card>
            <Card maxW="sm" borderTopRadius="10px">
              <CardBody py="0" px="0">
                <Image
                  src="images/labcoat.png"
                  alt="Green double couch with wooden legs"
                  borderBottomRadius="0"
                  borderTopRadius="10px"
                />
              </CardBody>
              <CardFooter>
                <Text w="100%" fontSize="xl" textColor="green">
                  LAB-COAT
                </Text>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
      <Box
        className="advantages"
        mt="3%"
        bgColor="#f5f5de"
        py="5rem"
        px="20rem"
      >
        <Flex justifyContent="space-around">
          <Image
            src="images/Designer.png"
            alt="Dan Abramov"
            m="auto"
            w="40%"
            borderRadius="1vh"
            h="45vh"
          />
          <Flex
            flexDirection="column"
            justifyContent="center"
            textAlign="left"
            w="50%"
            h="45vh"
          >
            <Heading as="h1" size="sm" noOfLines={1} mb="1rem">
              OUR UNIQUE ADVANTAGE
            </Heading>
            <Heading as="h1" size="lg" noOfLines={1} mb="1rem">
              Our Unique Value Proposition
            </Heading>
            <Text fontSize="xl">
              Experience a new way of buying and selling with Fresher’s Heist.
            </Text>
            <Text fontSize="lg" mb="1rem">
              Discover what sets us apart.
            </Text>
            <Flex alignItems="center" gap="5px">
              <BsCheckCircleFill />
              <Text fontSize="lg">Seamless Connections</Text>
            </Flex>
            <Flex alignItems="center" gap="5px">
              <BsCheckCircleFill />
              <Text fontSize="lg">Interative GUI</Text>
            </Flex>
            <Flex alignItems="center" gap="5px">
              <BsCheckCircleFill />
              <Text fontSize="lg">Real-Time Updates</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box className="end" bgColor="#171e30" py="5rem">
        <Heading as="h1" size="lg" noOfLines={1} mb="1rem" textColor="white">
          START YOUR JOURNEY
        </Heading>
        <Heading as="h1" size="mb" noOfLines={1} mb="1rem" textColor="white">
          Start your buying and selling journey with Fresher’s Heist. Explore
          the latest items and enjoy secure transactions.
        </Heading>
        <Button colorScheme="green" variant="outline">
          Start Shopping
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
