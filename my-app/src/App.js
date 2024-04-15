import logo from "./logo.svg";
import "./App.css";
import Sellingcard from "./components/Sellingcard";
import Userdetails from "./components/Userdetails";
import Itemselling from "./components/Itemselling";
import Sellingdetails from "./components/Sellingdetails";
import Uploadimg from "./components/Uploadimg";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <Box
    bgColor={theme?"black":"blue"}
      className="App"
      
    >
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/dashboard"
          element={<Dashboard theme={theme} setTheme={setTheme} />}
        />
      </Routes>
      {/* <Sellingcard/> */}
      {/* <Userdetails/> */}
      {/* <Itemselling/> */}
      {/* <Sellingdetails/> */}
      {/* <Uploadimg/> */}
      {/* <Dashboard/> */}
    </Box>
  );
}

export default App;
