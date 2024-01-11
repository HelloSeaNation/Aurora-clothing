import React from "react";
import PaymentForm from "../components/PaymentForm";
import { Box, Text, Flex } from "@chakra-ui/react";
import { CartItem } from "../components/CartItemForPayment";
import { useShoppingCart } from "../context/cartFunction";

const PaymentPage = () => {
  const { cartItems, cartQuantity } = useShoppingCart();

  return (
    <>
      <Flex direction={"row"} width={"100%"}>
        {/* Left side  */}
        <Box width={"50%"} paddingTop={"20px"}>
          <PaymentForm />
        </Box>

        {/* Right side */}
        <Box
          width={"50%"}
          paddingLeft={"30px"}
          paddingTop={"20px"}
          backgroundColor={"#EDEDED"}
          fontFamily={"Koulen"}
          fontSize={"30px"}
        >
          Order Summary
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} size={item.size} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default PaymentPage;
