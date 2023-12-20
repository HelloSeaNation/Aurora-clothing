import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { ReactNode } from "react";

const categoryStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  fontSize: "18px",
  fontFamily: "Koulen",
  justifyItems: "center",
  margin: "0 15% 0 15%",
};

const hoverStyles = {
  cursor: "pointer",
};

// Define the type for the children prop
interface CategoryItemProps {
  children: ReactNode;
}

// Individual category item component with hover effect
const CategoryItem: React.FC<CategoryItemProps> = ({ children }) => (
    <Text _hover={hoverStyles}>{children}</Text>
);

const TopMenu = () => (
  <Box style={categoryStyles}>
    <CategoryItem>New</CategoryItem>
    <CategoryItem>Clothing</CategoryItem>
    <CategoryItem>Accessories</CategoryItem>
    <CategoryItem>Swim</CategoryItem>
    <CategoryItem>Sale</CategoryItem>
    <Link to="./faqs">
      <CategoryItem>Contact us</CategoryItem>
    </Link>
  </Box>
);
export default TopMenu;
