import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import comfortpic from "comfortpic.png";
import Faqs from "./pages/faqs";
import { Box, Image, Center } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <Center>
        <HashRouter basename="/">
          <Box backgroundColor="#F5F5F5">
            <TopBar />
            <NavigationBar />
            <Image src="../comfortpic.png" width={"100%"}></Image>
            <Box>
              <Routes>
                <Route path="/home" />
                <Route path="/about" />
                <Route path="/faqs" element={<Faqs />} />
              </Routes>
            </Box>
          </Box>
        </HashRouter>
      </Center>
    </>
  );
}

export default App;
