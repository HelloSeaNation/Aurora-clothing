import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import comfortpic from "comfortpic.png"
import Faqs from "./pages/faqs"
import { Box, Center } from "@chakra-ui/react";
import TopMenu from "./components/TopMenu";
import { SearchIcon} from "@chakra-ui/icons"


function App() {
  return (
    <>
    <HashRouter basename="/">
      <Center>
      <Box backgroundColor="#F5F5F5" minHeight={"100vh"} maxWidth={"1440px"}>
        <Box
          backgroundColor="#E8BCBC"
          minHeight={"5vh"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box m={[15]} display="flex">
            <img src="../aurora.svg" height={"30vh"} />
            <Box style={{ fontSize: '1.5em' }}>
              <SearchIcon color="white"/>
            </Box>
          </Box>
        </Box>
        <TopMenu />
        <img src="../comfortpic.png" width={"100%"}></img>
        <Box>
          <Routes>
            <Route path="/home"/>
            <Route path="/about" />
            <Route path="/faqs" element={<Faqs />} />
          </Routes>
        </Box>
      </Box>
      </Center>
      </HashRouter>
    </>
  );
}

export default App;
