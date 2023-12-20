import React from "react";
import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function TopBar() {
  return (
    <Flex
      backgroundColor="#E8BCBC"
      minHeight={"5vh"}
      maxWidth={"100%"}
      justifyContent="space-between" // To space the elements
      alignItems="center" // To vertically center the items
      paddingLeft="80px" // Add padding for some space around elements
    >
      <Box flex="1" style={{ textAlign: "center" }}>
        <Image src="../aurora.svg" height={"3vh"} margin={"20px"} />
      </Box>
      <Box style={{ fontSize: "30px" }} paddingRight="20px">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color="#F5F5F5"
          style={{ paddingRight: "20px" }}
        />
        <FontAwesomeIcon icon={faCartShopping} color="#F5F5F5" />
      </Box>
    </Flex>
  );
}

export default TopBar;
