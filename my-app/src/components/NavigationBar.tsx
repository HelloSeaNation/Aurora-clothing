import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";

const categoryStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  justifyItems: "center",
  margin: "1% 15% 1% 15%",
};

const MenuButtonStyle = {
  fontFamily: "Koulen",
  fontSize: "18px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
};

const MenuListStyle = {
  backgroundColor: "#F5F5F5",
  width: "15vh",
  marginTop: "-8px",
  padding: "10px 0 5px 10px",
  fontFamily: "Koulen",
  fontSize: "18px",
  boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
};

const MenuItemStyle = {
  marginBottom: "10px",
};

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box style={categoryStyles}>
      <Menu isOpen={isMenuOpen} onClose={handleMenuClose}>
        <MenuButton style={MenuButtonStyle}>New</MenuButton>
        <MenuButton style={MenuButtonStyle}>Clothing</MenuButton>
        <MenuButton style={MenuButtonStyle}>Accessories</MenuButton>
        <MenuButton style={MenuButtonStyle}>Swim</MenuButton>
        <MenuButton style={MenuButtonStyle}>Sale</MenuButton>
        <MenuButton
          style={MenuButtonStyle}
          onMouseEnter={handleMenuOpen}
          onMouseLeave={handleMenuClose}
        >
          Contact us
        </MenuButton>
        <MenuList
          onMouseOver={handleMenuOpen}
          onMouseLeave={handleMenuClose}
          style={MenuListStyle}
        >
          <MenuItem as="a" href="./#/faqs" style={MenuItemStyle}>
            FAQs
          </MenuItem>
          <MenuItem as="a" href="./#/contact-us" style={MenuItemStyle}>
            Contact us
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default NavigationBar;
