import { useShoppingCart } from "../context/cartFunction";
import dresses from "../hooks/dressdata.json";
import pants from "../hooks/pants-data.json";
import tops from "../hooks/top-data.json";
import { Image, Flex, Box, Button } from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";

type CartItemProps = {
  id: number;
  quantity: number;
  size: string;
};

const ButtonStyle = {
  backgroundColor: "#E8BCBC",
  color: "#FFFFFF",
  border: "none",
  width: "30px",
  height: "30px",
  margin: "0 10px 0 10px",
};

export function CartItem({ id, quantity, size }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
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
      <Box>
        Qty:{" "}
        <Button
          style={ButtonStyle}
          onClick={() => decreaseCartQuantity(id, size)}
        >
          -
        </Button>
        {quantity}
        <Button
          style={ButtonStyle}
          onClick={() => increaseCartQuantity(id, size)}
        >
          +
        </Button>
      </Box>
      <Box>{formatCurrency(totalPrice)}</Box>
    </Flex>
  );
}
