import dresses from "../hooks/dressdata.json";
import pant from "../hooks/pants-data.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box,
Button,
Image,
Modal,
ModalOverlay,
ModalCloseButton,
ModalBody,
useDisclosure,
ModalContent
 } from "@chakra-ui/react"

 import { ChevronRightIcon } from '@chakra-ui/icons'

interface Item {
  id: number; 
  name: string;
  price: number;
  imgUrl: string;
  hoverImage: string;
}

const titleText = {
    fontFamily: "Koulen"
}

const textStyles = {
    fontFamily: "Koulen",
    fontSize: "13px"

}

const rightContainer = {
    flex: 1,
    marginLeft: 150
}

const leftContainer = {
    marginLeft: 200,
    marginTop: 20
}

const findItemById = (itemId: string): Item | undefined => {
  const dressItem = dresses.find((item) => item.id.toString() === itemId);
  const pantItem = pant.find((item) => item.id.toString() === itemId);

  if (dressItem) {
    return dressItem;
  } else if (pantItem) {
    return pantItem;
  }

  return undefined;
};

const IndividualItem: React.FC = () => {
  const { itemId } = useParams() as { itemId: string };

  const [isHovered, setIsHovered] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <Box display="flex" justify-content="space-between">
        <Box style={leftContainer}>

            <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <img src={isHovered ? hoverImage : imgUrl}
                style={{ width: "350px", height: "470px" }} />
            </Box>

        </Box>

        <Box style={rightContainer}>

            <Box style={titleText}>   
                <h1>{name}</h1>
            </Box>

            <Box style={textStyles}>
                <h1>${price}</h1>

                {/* Size Guide button with modal */}
                <Button backgroundColor="white" 
                borderStyle="none"
                fontFamily="Koulen"
                cursor="pointer"
                onClick={onOpen}> 
                
                Size Guide 
                
                <ChevronRightIcon />

                </Button>

                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.5)"/>
                        <ModalContent textAlign="center" marginTop="150px">
                        <ModalBody>
                            <Image src="../assets/size-guide.png" style={{width: "800px"}}/>
                        </ModalBody>
                        <ModalCloseButton onClick={onClose} style={{width: "23px", height: "23px", position: "absolute", top: 0, right: 275, backgroundColor: "#E8BCBC", border: "none", borderRadius: "5px" }}/>
                    </ModalContent>
                </Modal>

            </Box>
        </Box>
      
    </Box>
  );
};

export default IndividualItem;
