import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Container, Text, Stack, Box } from "@chakra-ui/react";
import { CartItem } from "../components/CartItem";
import { useShoppingCart } from "../context/cartFunction";

const textStyles = {
  fontFamily: "Koulen",
  margin: "auto",
  width: "80%",
};

function ShoppingCart() {
  const { cartItems } = useShoppingCart();

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
      <Box
          style={{
            ...textStyles,
            fontSize: "20px",
          }}
        >
      {cartItems.length > 0 ? ( // Conditionally render based on cartItems length
        <Box >
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item}  size={item.size} />
          ))}
        </Box>
      ) : (
        <Container
          style={{
            border: "1px solid #AFA79F",
            height: "20vh",
            textAlign: "center",
            width: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            paddingBottom:"5rem",
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
          {/* <Text
            fontSize={"26"}
            textAlign={"center"}
            color={"#E8BCBC"}
            style={textStyles}
          >
            Continue Shopping
          </Text> */}
        </Container>
      )} </Box>
    </>
  );
}

export default ShoppingCart;