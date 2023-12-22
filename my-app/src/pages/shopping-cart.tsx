import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Container, Text } from "@chakra-ui/react";
import { text } from "stream/consumers";

const textStyles = {
  fontFamily: "Koulen",
  margin: "auto",
  width: "80%",
};

function ShoppingCart() {
  return (
    <>
      <Text
        fontSize={"30"}
        textAlign={"left"}
        padding={"20px 0 20px 0"}
        style={textStyles}
      >
        Shopping Cart
      </Text>
      <Container
        style={{
          border: "1px solid #AFA79F",
          height: "36vh",
          textAlign: "center",
          ...textStyles,
        }}
      >
        <FontAwesomeIcon
          icon={faShoppingCart}
          color={"#E8BCBC"}
          fontSize={"70px"}
          style={{ margin: "auto", padding: "5vh 0 0 0" }}
        />
        <Text
          fontSize={"36"}
          textAlign={"center"}
          padding={"20px 0 0 0"}
          style={textStyles}
        >
          YOUR CART IS EMPTY!
        </Text>
        <Text
          fontSize={"26"}
          textAlign={"center"}
          color={"#E8BCBC"}
          style={textStyles}
        >
          Continue Shopping
        </Text>
      </Container>
    </>
  );
}

export default ShoppingCart;
