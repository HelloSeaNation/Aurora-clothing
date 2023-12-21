import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Center,
    Heading
  } from '@chakra-ui/react'

  const faqsStyles = {
    fontFamily: "Koulen",
    maxWidth: "750px",
    margin: "auto",
  };

  const boarderStyles = {
    border: "1px solid #C3C3C3",
    backgroundColor: "white",
    fontFamily: "Koulen",
    fontSize: "large",
    // borderRadius: '8px', // Add border radius
    // marginBottom: '20px', // Add margin at the bottom for spacing
  }

function Faqs(){
    return(
        <Box style={faqsStyles}>
            <Box textAlign="center">
                <h1>Frequently Asked Questions</h1>
            </Box>
          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton style={boarderStyles}>
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
                    <AccordionButton style={boarderStyles}>
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
                    <AccordionButton style={boarderStyles}>
                        <Box as="span" flex="1" textAlign="left">
                            How can I track my delivery?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Once your order has been dispatched from our warehouse, our team will not know
                    exactly where your order is. 
                    <br/>
                    <br/>
                    Alternatively, you can reach out to NZ post (our postal provider) for any Information
                    regarding your order!
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton style={boarderStyles}>
                        <Box as="span" flex="1" textAlign="left">
                            Can I return items purchased online?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    In short, yes!
                    <br/>
                    <br/>
                    Our returns and exchanges are the same whether an item is purchased
                    instore or online. Head to our contact page for more information.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton style={boarderStyles}>
                        <Box as="span" flex="1" textAlign="left">
                            Refund Policies
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Here at Aurora, we offer refunds given there is a valid reason for 
                    refunding the product. Some examples may be:
                    <br />
                    Product came damaged
                    <br />
                    Unhappy with the quality of the product
                    <br />
                    Wrong size purchased or delivered
                    <br />
                    <br />
                    However, if you have a unique reason as to why you'd like a refund,
                    don't hesitate to contact our team at Aurora and we will help you
                    the best we can
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton style={boarderStyles}> 
                        <Box as="span" flex="1" textAlign="left">
                            Vegan/Cruelty free information
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Aurora takes pride in saying all of our product are vegan and cruelty free!
                </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
    );
}

export default Faqs;