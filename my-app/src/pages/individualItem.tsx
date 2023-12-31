import dresses from "../hooks/dressdata.json";
import pant from "../hooks/pants-data.json";
import top from "../hooks/top-data.json";
import { useShoppingCart } from "../context/cartFunction";
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
  Input,
  Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckField } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../utilities/formatCurrency";

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
  fontSize: "20px",
  backgroundColor: "white",
  borderColor: "#767676",
  cursor: "pointer",
  width: 40,
  height: 35,
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
  //State for selected size
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const handleAddToCart = (selectedSize: string | null) => {
    if (selectedSize) {
      // Check if a size is selected
      increaseCartQuantity(Number(itemId), selectedSize);
    } else {
      setSizeError(true);
      setErrorMessage("Please select a size!"); // Set the error message
    }
  };

  const { itemId } = useParams() as { itemId: string };
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(Number(itemId));

  const [isHovered, setIsHovered] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  //Array of sizes
  const sizes = ["XS", "S", "M", "L", "XL"];
  const renderSizeButtons = () => {
    return sizes.map((size) => (
      <Button
        key={size}
        style={{
          ...sizeButtons,
          backgroundColor: selectedSize === size ? "#E8BCBC" : "white",
          color: selectedSize === size ? "white" : "black",
        }}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </Button>
    ));
  };

  const [reviews, setReviews] = useState<{ [key: string]: string[] }>({});
  const [newReview, setNewReview] = useState<string>("");
  const {
    isOpen: openReview,
    onOpen: onOpenReview,
    onClose: closeReview,
  } = useDisclosure();

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

  const addReview = () => {
    if (newReview.trim() !== "") {
      setReviews({
        ...reviews,
        [itemId]: [...(reviews[itemId] || []), newReview],
      });
      setNewReview("");
    }
  };

  const buttonStyles = {
    backgroundColor: "#E8BCBC",
    color: "white",
    fontSize: "25px",
    fontFamily: "Koulen",
    width: "335px",
    height: "58px",
    justifyContent: "center",
    border: "none",
  };

  const qualityButtonStyles = {
    backgroundColor:  "#E8BCBC",
    color: "white",
    fontSize: "25px",
    fontWeight: "normal",
    width: "50px",
    border: "none",
  };

  const qualityBoxStyles = {
    backgroundColor: "#E8BCBC",
    color: "white",
    width: "235px",
    height: "58px",
    fontSize: "25px",
    margin:"0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
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
            <Text fontSize="20px">{formatCurrency(price)}</Text>

            {/* Size options */}
            <Box
              display="flex"
              flex-direction="row"
              justify-content="space-between"
              gap="15"
              paddingBottom="10px"
            >
              {renderSizeButtons()}
            </Box>
            {sizeError && !selectedSize && (
              <Text
                style={{
                  color: "red",
                  marginTop: "-10px",
                  marginBottom: "-14px",
                }}
              >
                {errorMessage}
              </Text>
            )}

            {/* Size Guide button with modal */}
            <Button
              backgroundColor="white"
              borderStyle="none"
              fontFamily="Koulen"
              cursor="pointer"
              padding="0px"
              onClick={onOpen}
              marginTop={"20px"}
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
            <Box marginTop="15px">
              {quantity === 0 ? (
                <Button
                  style={buttonStyles}
                  onClick={() => handleAddToCart(selectedSize)}
                >
                  Add to bag
                </Button>
              ) : (
                <Box display="flex" justifyContent="flex-start">
                  <Button
                    style={qualityButtonStyles}
                    onClick={() => handleAddToCart(selectedSize)}
                  >
                    +
                  </Button>

                  <Box 
                  style={qualityBoxStyles}>{quantity} added</Box>

                  <Button
                    style={qualityButtonStyles}
                    onClick={() => decreaseCartQuantity(Number(itemId))}
                  >
                    -
                  </Button>
                </Box>
              )}
            </Box>

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
                <FontAwesomeIcon
                  icon={faTruckField}
                  fontSize="13px"
                  color="#767676"
                />
                <Text fontSize={"15px"} color={"#767676"} marginLeft="10px">
                  Estimated delivery 4-5 business days
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Review section */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="10px"
      >
        <h3>Reviews</h3>
      </Box>
      <Box display="flex" justify-content="space-between" width={"95%"}>
        <Box style={leftContainer}> Hello </Box>
        <Box style={rightContainer}>
          <Button onClick={onOpenReview} cursor="pointer">
            Write a review
          </Button>

          <Modal
            isOpen={openReview}
            onClose={closeReview}
            isCentered
            size={{ width: "600px", height: "400px" }}
          >
            <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.5)" />
            <ModalContent textAlign="center" marginTop="150px">
              <ModalBody
                backgroundColor="white"
                width="600px"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <h2>Write your review</h2>

                <Input
                  value={newReview}
                  height="150px"
                  width="300px"
                  borderRadius="5px"
                  borderColor="#767676"
                  onChange={(e) => setNewReview(e.target.value)}
                ></Input>

                <Button
                  onClick={addReview}
                  width="90px"
                  height="35px"
                  borderRadius="5px"
                  backgroundColor="#E8BCBC"
                  border="none"
                  fontFamily="Koulen"
                  color="white"
                  cursor="pointer"
                  marginTop="10px"
                >
                  Submit
                </Button>
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
                  color: "white",
                }}
              />
            </ModalContent>
          </Modal>

          {/* display review by id */}
          {reviews[itemId] && reviews[itemId].length > 0 && (
            <Box marginTop="20px">
              <Divider />
              <label style={textStyles}>Reviews:</label>
              {reviews[itemId].map((review, index) => (
                <Text key={index} style={textStyles}>
                  {review}
                </Text>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default IndividualItem;
