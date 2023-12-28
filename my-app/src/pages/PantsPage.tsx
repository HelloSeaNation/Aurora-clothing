import React from "react";
import {
  Text,
  Card,
  Image,
  CardBody,
  SimpleGrid,
  Flex,
  Box,
} from "@chakra-ui/react";
import HoverImage from "../components/HoverImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,} from "@fortawesome/free-solid-svg-icons";

const textStyles = {
  fontFamily: "Koulen",
  margin: "auto",
};

const cardStyles = {
  fontFamily: "Koulen",
  fontSize: "20px",
  fontWeight: "500",
  width: "21vh",
};

const cardStylesRight ={
  width: "3vh",
  paddingLeft: "8px",
};

const boxStyle = {
  flexGrow: 1,
  marginBottom: "-50px",
  marginTop: "-25px",
};

function Pants() {
  return (
    <>
      <Text
        fontWeight={"600"}
        fontSize={"30px"}
        padding={"20px 0 20px 0"}
        width={"80%"}
        style={textStyles}
      >
        Pants
      </Text>
      <SimpleGrid spacingY={60} columns={4} width={"85%"} margin={"auto"}>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/drawstring-front.png"
                hoverImage="./assets/drawstring-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Drawstring pants</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$19.99</Text>
               <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/elastic-waist-front.png"
                hoverImage="./assets/elastic-waist-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Elastic waist sport pants</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$19.99</Text>
               <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/graphic-wide-front.png"
                hoverImage="./assets/graphic-wide-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Graphic Wide pants</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$17.99</Text>
               <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/hip-hop-cargo-front.png"
                hoverImage="./assets/hip-hop-cargo-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Hip-hop cargo pants</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$19.99</Text>
               <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage 
              defaultImage="./assets/plaid-paint-front.png" 
              hoverImage="./assets/plaid-paint-back.png" />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Plaid paint pants</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$15.99</Text>
               <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
               defaultImage="./assets/solid-color-front.png"
               hoverImage="./assets/solid-color-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Solid color pants</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$14.99</Text>
               <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/sporty-elastic-front.png"
                hoverImage="./assets/sporty-elastic-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Sporty Elastic pants</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$20.99</Text>
               <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage 
              defaultImage="./assets/two-tone-front.png" 
              hoverImage="./assets/two-tone-back.png"/>
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Two-tone-pants</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$23.99</Text>
               <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default Pants;
