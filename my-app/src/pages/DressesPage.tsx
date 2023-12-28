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

function Dresses() {
  return (
    <>
      <Text
        fontWeight={"600"}
        fontSize={"30px"}
        padding={"20px 0 20px 0"}
        width={"80%"}
        style={textStyles}
      >
        Dresses
      </Text>
      <SimpleGrid spacingY={60} columns={4} width={"85%"} margin={"auto"}>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/baby-blue-floral-front.png"
                hoverImage="./assets/baby-blue-floral-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Baby Blue Floral Dress</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$49.99</Text>
              <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/black-short-sleeve-front.png"
                hoverImage="./assets/black-short-sleeve-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Black short sleeve</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$25.99</Text>
              <Flex alignItems="center">
                <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
                <Text style={{ ...cardStyles, ...cardStylesRight }}>3.0</Text>
              </Flex>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/dark-blue-short-front.png"
                hoverImage="./assets/dark-blue-short-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>dark blue short dress</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$48.99</Text>
              <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{...cardStyles, ...cardStylesRight}} >3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/green-strap-front.png"
                hoverImage="./assets/green-strap-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Green Strap dress</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$39.99</Text>
              <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{...cardStyles, ...cardStylesRight}} >3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/leopard-dress-front.png"
                hoverImage="./assets/leopard-dress-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>leopard pattern dress</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$55.99</Text>
              <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{...cardStyles, ...cardStylesRight}} >3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/light-brown-floral-front.png"
                hoverImage="./assets/light-brown-floral-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Light brown floral dress</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$39.99</Text>
              <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{...cardStyles, ...cardStylesRight}} >3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/long-blue-floral-front.png"
                hoverImage="./assets/long-blue-floral-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Long Blue floral dress</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$59.99</Text>
              <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{...cardStyles, ...cardStylesRight}} >3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/orange-dress-front.png"
                hoverImage="./assets/orange-dress-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Orange dress</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$43.99</Text>
              <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{...cardStyles, ...cardStylesRight}} >3.0</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <HoverImage
                defaultImage="./assets/red-stripe-dress-front.png"
                hoverImage="./assets/red-stripe-dress-back.png"
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Red-stripe dress</Text>
            </Box>
            <Flex alignItems="center">
              <Text style={cardStyles}>$54.99</Text>
              <FontAwesomeIcon icon={faStar} color={"#F1C040"} />
              <Text style={{...cardStyles, ...cardStylesRight}} >3.0</Text>
            </Flex>
          </Box>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default Dresses;
