import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import { Hash } from "crypto";
import TopMenu from "./components/TopMenu";

function App() {
  return (
    <>
    <HashRouter basename="/">
      <Box backgroundColor="#F5F5F5" minHeight={"100vh"}>
        <Box
          backgroundColor="#E8BCBC"
          minHeight={"5vh"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box m={[15]}>
            <img src="../aurora.svg" height={"30vh"} />
          </Box>
        </Box>
        <TopMenu />
        <Box>
          <Routes>
            <Route path="/home"/>
            <Route path="/about" />
            <Route path="/contact" />
          </Routes>
        </Box>
      </Box>
      </HashRouter>
    </>
  );
}

export default App;
