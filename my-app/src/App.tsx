import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import comfortpic from "comfortpic.png";
import Faqs from "./pages/faqs";
import { Box, Image, Center } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home"
import ContactUs from "./pages/contact-us"

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Box backgroundColor="#F5F5F5">
          <TopBar />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Box>
      </HashRouter>
    </>
  );
}

export default App;
