import { useShoppingCart } from "../context/cartFunction"
import dresses from "../hooks/dressdata.json";
import pants from "../hooks/pants-data.json";
import tops from "../hooks/top-data.json";
import { Stack, Image } from "@chakra-ui/react";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem ({ id, quantity }: CartItemProps) {
    const { removeFromCart} = useShoppingCart()
    const allStoreItems = [...dresses, ...pants, ...tops];
    const item = allStoreItems.find((item) => item.id === id);
    if (item == null) return null;

    return (
        <Stack gap = {2}>
        <Image src={item.imgUrl} style={{ width: "100px", height: "100px"}} />
        <div>{item.name}</div>
        </Stack>
    )
}