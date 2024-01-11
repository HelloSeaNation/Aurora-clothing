import React from "react";
import PaymentForm from "../components/PaymentForm";
import { Box, Text, Flex } from "@chakra-ui/react";

const textStyles = {
  fontFamily: "Koulen",
  margin: "auto",
  width: "80%",
};

const PaymentPage = () => {
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
        <Box width={"50%"} margin={"auto"} backgroundColor={"#EDEDED"}>test</Box>
      </Flex>
    </>
  );
};

export default PaymentPage;
