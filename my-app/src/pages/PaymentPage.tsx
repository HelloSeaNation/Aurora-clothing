import React from "react";
import PaymentForm from "../components/PaymentForm";
import { Box, Text, Flex } from "@chakra-ui/react";
import { CartItem } from "../components/CartItemForPayment";
import { useShoppingCart } from "../context/cartFunction";

const textStyles = {
  fontFamily: "Koulen",
  margin: "auto",
  width: "80%",
};

const PaymentPage = () => {
  const { cartItems, cartQuantity } = useShoppingCart();

  return (
    <>
      <Text
        fontSize={"30"}
        textAlign={"left"}
        padding={"20px 0 20px 0"}
        style={textStyles}
      >
        Payment
      </Text>
      <Flex direction={"row"} width={"80%"} margin={"auto"}>
        {/* Left side  */}
        <Box width={"50%"} margin={"auto"}>
          <PaymentForm />
        </Box>

        {/* Right side */}
        <Box width={"50%"} margin={"auto"} backgroundColor={"#EDEDED"}>
          {"Order Summary"}
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} size={item.size} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default PaymentPage;
