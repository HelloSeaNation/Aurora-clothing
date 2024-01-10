import { useShoppingCart } from "../context/cartFunction";
import dresses from "../hooks/dressdata.json";
import pants from "../hooks/pants-data.json";
import tops from "../hooks/top-data.json";
import { Stack, Image, Flex, Box } from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";

type CartItemProps = {
  id: number;
  quantity: number;
  size: string;
};

export function CartItem({ id, quantity, size }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const allStoreItems = [...dresses, ...pants, ...tops];
  const item = allStoreItems.find((item) => item.id === id);
  if (item == null) return null;
  const totalPrice = item.price * quantity;

  return (
    <Flex gap={100}>
      <Link to={`/${item.id}`}>
        <Image src={item.imgUrl} style={{ width: "100px", height: "100px" }} />
      </Link>
      <Box>{item.name}</Box>
      <Box>Size {size}</Box>
      <Box>Qty: {quantity}</Box>
      <Box>{formatCurrency(totalPrice)}</Box>
    </Flex>
  );
}