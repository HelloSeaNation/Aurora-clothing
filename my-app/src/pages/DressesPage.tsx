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
import { text } from "stream/consumers";

const textStyles = {
  fontFamily: "Koulen",
  margin: "auto",
};

const cardStyles = {
  fontFamily: "Koulen",
  fontSize: "20px",
  fontWeight: "500",
  width: "30vh",
};

const cardImage = {
  width: "21vh",
  height: "auto",
};

const boxStyle ={
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
              <Image
                src="./assets/baby-blue-floral-front.png"
                style={cardImage}
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Baby Blue Floral Dress</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$49.99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <Image
                src="./assets/black-short-sleeve-front.png"
                style={cardImage}
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Black short sleeve</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$25.99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <Image
                src="./assets/dark-blue-short-front.png"
                style={cardImage}
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>dark blue short dress</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$48.99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <Image src="./assets/green-strap-front.png" style={cardImage} />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Green Strap dress</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$39.99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <Image src="./assets/leopard-dress-front.png" style={cardImage} />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>leopard pattern dress</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$55.99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <Image
                src="./assets/light-brown-floral-front.png"
                style={cardImage}
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Light brown floral dress</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$39.99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <Image
                src="./assets/long-blue-floral-front.png"
                style={cardImage}
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Long Blue floral dress</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$49/99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <Image src="./assets/orange-dress-front.png" style={cardImage} />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Orange dress</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$43.99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
        <Card style={cardStyles}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <CardBody>
              <Image
                src="./assets/red-stripe-dress-front.png"
                style={cardImage}
              />
            </CardBody>
            <Box style={boxStyle}>
              <Text style={cardStyles}>Red-stripe dress</Text>
            </Box>
            <Flex justifyContent="space-between">
              <Text style={cardStyles}>$54.99</Text>
              <Text style={cardStyles}>Fivestar</Text>
            </Flex>
          </Box>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default Dresses;
