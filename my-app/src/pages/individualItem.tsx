import dresses from "../hooks/dressdata.json";
import pant from "../hooks/pants-data.json";
import top from "../hooks/top-data.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalContent,
  Text,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckField } from "@fortawesome/free-solid-svg-icons";

interface Item {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  hoverImage: string;
}

const titleText = {
  fontFamily: "Koulen",
  fontSize: "16px",
};

const textStyles = {
  fontFamily: "Koulen",
  fontSize: "13px",
};

const rightContainer = {
  flex: 1,
  marginLeft: 150,
  maxWidth: 400,
};

const leftContainer = {
  marginLeft: 200,
  marginTop: 20,
};

const sizeButtons = {
  fontFamily: "Koulen",
  backgroundColor: "white",
  borderColor: "#767676",
  cursor: "pointer",
  width: 33,
};

const findItemById = (itemId: string): Item | undefined => {
  const dressItem = dresses.find((item) => item.id.toString() === itemId);
  const pantItem = pant.find((item) => item.id.toString() === itemId);
  const topItem = top.find((item) => item.id.toString() === itemId);

  if (dressItem) {
    return dressItem;
  } else if (pantItem) {
    return pantItem;
  } else if (topItem) {
    return topItem;
  }

  return undefined;
};

const IndividualItem: React.FC = () => {
  const { itemId } = useParams() as { itemId: string };

  const [isHovered, setIsHovered] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  //   const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!itemId) {
    // Error handle
    return <div>Item not available</div>;
  }

  const item = findItemById(itemId);

  if (!item) {
    // Handle item not found
    return <div>Item not found</div>;
  }

  const { name, price, imgUrl, hoverImage } = item;

  return (
    <Box
      display="flex"
      justify-content="space-between"
      width={"95%"}
      margin={"auto"}
    >
      <Box style={leftContainer}>
        {/* shows the same hover display as item cards */}
        <Box
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? hoverImage : imgUrl}
            style={{ width: "400px", height: "auto" }}
          />
        </Box>
      </Box>

      <Box style={rightContainer}>
        {/* render title by item.id */}
        <Box style={titleText}>
          <Text fontSize={"30px"} fontWeight={"500"}>
            {name}
          </Text>
        </Box>

        {/* render price by item.id */}
        <Box style={textStyles}>
          <Text fontSize="20px">${price}</Text>

          {/* Size options */}
          <Box
            display="flex"
            flex-direction="row"
            justify-content="space-between"
            gap="15"
            paddingBottom="10px"
          >
            <Button
              style={sizeButtons}
              //  onClick={() => setSelectedSize("XS")}
              //  isSelected={selectedSize === "XS"}
            >
              XS
            </Button>
            <Button
              style={sizeButtons}
              //  onClick={() => setSelectedSize("S")}
              //  isSelected={selectedSize === "S"}
            >
              S
            </Button>
            <Button
              style={sizeButtons}
              //  onClick={() => setSelectedSize("<M>")}
              //  isSelected={selectedSize === "M"}
            >
              M
            </Button>
            <Button
              style={sizeButtons}
              //  onClick={() => setSelectedSize("L")}
              //  isSelected={selectedSize === "L"}
            >
              L
            </Button>
            <Button
              style={sizeButtons}
              //  onClick={() => setSelectedSize("XL")}
              //  isSelected={selectedSize === "XL"}
            >
              XL
            </Button>
          </Box>

          {/* Size Guide button with modal */}
          <Button
            backgroundColor="white"
            borderStyle="none"
            fontFamily="Koulen"
            cursor="pointer"
            padding="0px"
            onClick={onOpen}
            marginTop={"10px"}
          >
            Size Guide
            <ChevronRightIcon />
          </Button>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size={{ width: "600px", height: "400px" }}
          >
            <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.5)" />
            <ModalContent textAlign="center" marginTop="150px">
              <ModalBody>
                <Image src="../assets/size-guide.png" />
              </ModalBody>
              <ModalCloseButton
                onClick={onClose}
                style={{
                  width: "23px",
                  height: "23px",
                  position: "absolute",
                  top: 3,
                  right: 275,
                  backgroundColor: "#E8BCBC",
                  border: "none",
                  borderRadius: "5px",
                }}
              />
            </ModalContent>
          </Modal>
          {/* Add to cart button */}
          <Button
            style={{
              backgroundColor: "#E8BCBC",
              border: "none",
              color: "white",
              fontFamily: "Koulen",
              fontSize: "25px",
              cursor: "pointer",
              marginTop: "20px",
              display: "flex",
              width: "330px",
              height: "60px",
              marginBottom: "20px",
            }}
            // onClick={() => addToCart()}
          >
            {" "}
            Add To Cart{" "}
          </Button>

          {/* Shipping information */}
          <Box
            style={textStyles}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            width={"83%"}
          >
            <Text fontSize="20px" marginBottom="-15px">
             --------------------- Shipping -------------------
            </Text>
            <Text fontSize={"15px"} color={"#767676"} marginBottom="-15px">
              Shipping to New Zealand
            </Text>
            <Box display="flex" alignItems={"center"}>
              <FontAwesomeIcon icon={faTruckField} fontSize="13px" color="#767676" />
              <Text fontSize={"15px"} color={"#767676"} marginLeft="10px">
                Estimated delivery 4-5 business days
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IndividualItem;
