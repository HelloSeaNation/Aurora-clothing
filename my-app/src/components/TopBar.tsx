import React, {useState} from "react";
import { Box, Center, Flex, Image, Input } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import { SearchIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

function TopBar() {

  const [showInput, setShowInput] = useState(false);

  return (
    <Flex
      backgroundColor="#E8BCBC"
      minHeight={"5vh"}
      maxWidth={"100%"}
      justifyContent="space-between" // To space the elements
      alignItems="center" // To vertically center the items
      paddingLeft="15vh" // Add padding for some space around elements
    >
      <Box flex="1" style={{ textAlign: "center" }}>
        <Link to="/">
          <Image src="../aurora.svg" height={"3vh"} margin={"20px"} />
        </Link>
      </Box>
      <Box style={{ fontSize: "30px", cursor: 'pointer' }} paddingRight="40px">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color="#F5F5F5"
          style={{ paddingRight: "40px" }}
          onClick={() => setShowInput(!showInput)}
        />
        {showInput && (
          <Input
          type="text"
          placeholder="search"
          style={{
            transition: "width 1s ease-out",
            width: "200px",
          }}></Input>
        )}
        <FontAwesomeIcon icon={faBagShopping} color="#F5F5F5" />
      </Box>
    </Flex>
  );
}

export default TopBar;
