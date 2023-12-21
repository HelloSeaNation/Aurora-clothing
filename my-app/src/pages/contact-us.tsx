import {
    Box,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    AccordionIcon
} from '@chakra-ui/react'
import Map from '../components/Map'

export const ContactUs = () =>{

    const textStyles = {
        fontFamily: "Koulen"
    }

    const inputStyle = {
        width: '100%',
        height: '35px', // Adjust the height as needed
        marginBottom: 0,
    };


    return(
        <Box style={textStyles}>
            <Box textAlign="center">
                <h1>Contact Us</h1>
            </Box>

            <Box textAlign="center" style={{ width: 500, margin: '0 auto' }}>
                <Box as="h3" style={{ textAlign: 'left', marginBottom: 0 }}>Name</Box>
                <Input style={inputStyle}></Input>

                <Box as="h3" style={{ textAlign: 'left', marginBottom: 0 }}>Email</Box>
                <Input style={inputStyle}></Input>

                <Box as="h3" style={{ textAlign: 'left', marginBottom: 0 }}>Question type</Box>
                <Menu>
                    <MenuButton as="button" style={inputStyle}>
                        <Box></Box>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>My order never arrived</MenuItem>
                        <MenuItem>Problem with customer service</MenuItem>
                        <MenuItem>Issue with product quality</MenuItem>
                        <MenuItem>Request refund/exchange</MenuItem>
                    </MenuList>
                </Menu>

                <Box as="h3" style={{ textAlign: 'left', marginBottom: 0 }}>Write your question</Box>
                <Input style={{...inputStyle, height: "125px"}}></Input>
            </Box>

            <Box textAlign="center">
                <h1>Or</h1>
            </Box>

            <Box>
                <Map width="50%" height="450"/>
            </Box>
        </Box>
    )
}

export default ContactUs;
