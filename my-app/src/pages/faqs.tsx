import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

  const textStyles = {
    fontFamily: "sans-serif",
  };

function Faqs(){
    return(
        <Box style={textStyles}>
          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Devliery Information
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Our orders are delivered directly from our warehouse in Auckland.
                    Depending on where you are located, our orders usually take between
                    3-6 business days to ship within New Zealand.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Returns and Exchanges
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    To make a return or exchange you will need to email our support team
                    with the reason for returns/exchange. This feedback helps us provide 
                    understand areas we can improve on. In order to claim a refund, you can request
                    a return parcel to be sent to your address. The return and refund should take
                    no longer than 3-5 business days to be completed.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            How can I track my delivery?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Once your order has been dispatched from our warehouse, our team will not
                </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
    );
}

export default Faqs;