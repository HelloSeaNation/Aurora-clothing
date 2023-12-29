import React from "react"
import { Box,
Text,
Image } from "@chakra-ui/react"
import dresses from "../hooks/dressdata.json"

interface itemPageProps {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    hoverUrl: string;
}

const titleStyles = {
    fontFamily: "Koulen",

}

const textStyles = {
    fontFamily: "Koulen",

}

const IndividualItem: React.FC<itemPageProps> = ({id, name, price, imgUrl, hoverUrl}: itemPageProps) => {
    return(
        <></>
    )
}

export default IndividualItem;