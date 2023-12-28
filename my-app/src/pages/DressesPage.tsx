import React from "react";
import {
  Text,
  Card,
  Image,
  CardBody,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { text } from "stream/consumers";

const textStyles = {
  fontFamily: "Koulen",
  margin: "auto",
};

const cardStyles = {
  fontFamily: "Koulen",
  margin: "auto",
  fontSize: "20px",
  fontWeight: "600",
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
          <CardBody>
            <Image
              src="./assets/baby-blue-floral-front.png"
              width={"18vh"}
              height={"auto"}
            />
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem colSpan={2} rowSpan={1}>
                <Text style={cardStyles}>Baby Blue Floral Dress</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Text style={cardStyles}>$49/99</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text style={cardStyles}>Fivestar</Text>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
        <Card style={cardStyles}>
          <CardBody>
            <Image
              src="./assets/black-short-sleeve-front.png"
              width={"18vh"}
              height={"auto"}
            />
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem colSpan={2} rowSpan={1}>
                <Text style={cardStyles}>Black short sleeve</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Text style={cardStyles}>$49/99</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text style={cardStyles}>Fivestar</Text>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
        <Card style={cardStyles}>
          <CardBody>
            <Image
              src="./assets/dark-blue-short-front.png"
              width={"18vh"}
              height={"auto"}
            />
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem colSpan={2} rowSpan={1}>
                <Text style={cardStyles}>Dark Blue short</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Text style={cardStyles}>$49/99</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text style={cardStyles}>Fivestar</Text>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
        <Card style={cardStyles}>
          <CardBody>
            <Image
              src="./assets/green-strap-front.png"
              width={"18vh"}
              height={"auto"}
            />
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem colSpan={2} rowSpan={1}>
                <Text style={cardStyles}>Green Strap dress</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Text style={cardStyles}>$49/99</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text style={cardStyles}>Fivestar</Text>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
        <Card style={cardStyles}>
          <CardBody>
            <Image
              src="./assets/leopard-dress-front.png"
              width={"18vh"}
              height={"auto"}
            />
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem colSpan={2} rowSpan={1}>
                <Text style={cardStyles}>Leopard pattern dress</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Text style={cardStyles}>$49/99</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text style={cardStyles}>Fivestar</Text>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default Dresses;
