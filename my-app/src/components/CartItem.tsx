import { useShoppingCart } from "../context/cartFunction"
import dresses from "../hooks/dressdata.json";
import pants from "../hooks/pants-data.json";
import tops from "../hooks/top-data.json";
import { Stack, Image } from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";

type CartItemProps = {
    id: number
    quantity: number
    size: string
}

export function CartItem ({ id, quantity, size }: CartItemProps) {
    const { removeFromCart} = useShoppingCart()
    const allStoreItems = [...dresses, ...pants, ...tops];
    const item = allStoreItems.find((item) => item.id === id);
    if (item == null) return null;

    return (
        <Stack gap = {2}>
        <Image src={item.imgUrl} style={{ width: "100px", height: "100px"}} />
        <div>{item.name}</div>
        <div>Size {size}</div>
        <div>Quantity {quantity}</div>
        <div>{formatCurrency(item.price)}</div>
        <Link to={`/${item.id}`}>View Product</Link>
        </Stack>
    )
}