import { Box } from "@chakra-ui/react";

const categoryStyles = 
{display: "grid", 
gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
fontSize: "9px",
paddingLeft: "325px",
paddingRight: "275px",
}; 

const textStyles = {fontFamily: "Koulen"};

function TopMenu() {
    return (
        <Box style={categoryStyles}>
            <h1>New</h1>
            <h1>Clothing</h1>
            <h1>Accessories</h1>
            <h1>Swim</h1>
            <h1>Sale</h1>
            <h1>Contact us</h1>
        </Box>
    );
}
export default TopMenu;