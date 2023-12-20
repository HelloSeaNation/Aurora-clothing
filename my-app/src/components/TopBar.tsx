import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function TopBar() {
  return (
    <>
      <Flex
        backgroundColor="#E8BCBC"
        minHeight={"5vh"}
        maxWidth={"100%"}
      >
        <Box m={[15]} flex="5">
          <img src="../aurora.svg" height={"30vh"} />
        </Box>
        <Box flex="1" style={{ fontSize: "20px" }}>
          <SearchIcon color="red" />
        </Box>
      </Flex>
    </>
  );
}

export default TopBar;
