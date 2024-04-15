import { useState,React,useRef } from "react";
import { Box, Flex, Text, Input } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const Uploadimg = ({setImage,theme}) => {
  // const {user}=ItemState();

  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const toast = useToast();
  
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileTobase(file);
    console.log(file);
  };
  const setFileTobase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  

  

  return (
    <Flex>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgColor={theme?"#797979":"white"}
        rounded="lg"
        shadow="xl"
        px="6"
        py="1"
      >
        <Box mb="3" textAlign="center">
          <Text fontSize="2xl" fontWeight="semibold" mb="2" textColor="black">
            Upload your Images
          </Text>
          <Text fontSize="sm" color="gray.700">
            File should be of format .jpg, .png, .jpeg
          </Text>
        </Box>
        <form action="#" className="relative w-4/5 h-24 max-w-xs mb-5 ">
          <Input type="file" id="file-upload" display="none" cursor="pointer" onChange={handleImage} />
          <label
            htmlFor="file-upload"
            className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
          >
            <Text
              zIndex="10"
              fontSize="xs"
              fontWeight="light"
              textAlign="center"
              color="gray.700"
            >
              Drag & Drop your files here
            </Text>
            <svg
              className="text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
            </svg>
          </label>
        </form>
      </Box>
    </Flex>
  );
};

export default Uploadimg;
