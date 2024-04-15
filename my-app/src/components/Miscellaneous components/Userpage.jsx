import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
// import CoursesPage from "../DashboardTabPages/CoursesPage";
// import CourseContent from "../CourseInfoPages/CourseContent";
// import CourseVedios from "../CourseInfoPages/CourseVedios";
// import { ChatState } from "../../Context/ChatProvider";
// import Userdetails from "./Userdetails";
// import DomainPage from "./DomainPage";
// import AllTeachers from "../DashboardTabPages/AllTeachers";
// import ContactUs from "../DashboardTabPages/ContactUs";
// import Faq from "../DashboardTabPages/Faq";
// import Chatpage from "../components/Chatpage";
import Userdetails from "../Userdetails";
import Sellingdetails from "../Sellingdetails";
import Youritems from "../Youritems";
import Mainpage from "../Mainpage";
import Categoricalitems from "../Categoricalitems";
import Itemselling from "../Itemselling";

const Userpage = ({selectedCategory,selectedCategoryItems,selectedPage,setSelectedPage,theme}) => {
  // const { clicked } = ChatState();
  const [selectedItem,setSelectedItem]=useState(null)


  const [domainObj, setdomainObj] = useState({});
  return (
    <Box
      w="85%"
      display="flex"
      flexDirection="column"
      gap="2rem"
      h="100%"
      bgColor={theme?"#27282A":"#f5f6fc"}
      borderTopLeftRadius="1rem"
      borderBottomRightRadius="1rem"
      overflow="scroll"
      
      sx={{
        "&::-webkit-scrollbar": {
          width: "0px",
          background: "transparent", // for Chrome, Safari, and Opera
        },
        scrollbarWidth: "none", // for Firefox
        "-ms-overflow-style": "none", // for Internet Explorer and Edge
        overflowY: "scroll",
      }}
    >
      {selectedPage==="Userdetails"&&<Userdetails theme={theme}/>}
      {selectedPage==="Sellingdetails"&&<Sellingdetails theme={theme}/>}
     {selectedPage==="Youritems"&& <Youritems setSelectedPage={setSelectedPage} setSelectedItem={setSelectedItem} theme={theme}/>}
      {selectedPage==="Itemselling"&&<Itemselling  selectedItem={selectedItem}  theme={theme}/>}
      {selectedPage==="Mainpage"&&<Mainpage setSelectedPage={setSelectedPage} setSelectedItem={setSelectedItem} theme={theme}/>}
      {selectedPage==="Categoricalitems"&&<Categoricalitems category = {selectedCategory} selectedCategoryItems={selectedCategoryItems} setSelectedPage={setSelectedPage} setSelectedItem={setSelectedItem} theme={theme}/>}
      {/* <Youritems/> */}
    </Box>
  );
};

export default Userpage;
