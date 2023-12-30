import { Image, Box, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box h={"100vh"}>
      <Image src="../comfortpic.png" width={"100%"}></Image>

      <Text
        fontFamily={"Khula"}
        fontWeight={"600"}
        fontSize={"20px"}
        margin={"30px"}
      >
        New Releases
      </Text>
    </Box>
    
  );
};

export default Home;
