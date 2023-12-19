import 
{ Box,
Menu,
MenuButton,
MenuList,
MenuItem} from "@chakra-ui/react";
import React, { ReactNode } from "react";

const categoryStyles = 
{display: "grid", 
gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
fontSize: "9px",
paddingLeft: "325px",
paddingRight: "275px",
}; 

const hoverStyles = {
    cursor: "pointer"
    };
  
    // Define the type for the children prop
  interface CategoryItemProps {
    children: ReactNode;
  }
  
  // Individual category item component with hover effect
  const CategoryItem: React.FC<CategoryItemProps> = ({ children }) => (
    <Box _hover={hoverStyles}>
      <h1>{children}</h1>
    </Box>
  );

  
  
  const TopMenu = () => (
    <Box style={categoryStyles}>
      <CategoryItem>New</CategoryItem>
      <CategoryItem>Clothing</CategoryItem>
      <CategoryItem>Accessories</CategoryItem>
      <CategoryItem>Swim</CategoryItem>
      <CategoryItem>Sale</CategoryItem>
      <CategoryItem>Contact us</CategoryItem>
    </Box>
  );
export default TopMenu;