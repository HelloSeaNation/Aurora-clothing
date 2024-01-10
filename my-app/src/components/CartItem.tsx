import { useShoppingCart } from "../context/cartFunction";
import dresses from "../hooks/dressdata.json";
import pants from "../hooks/pants-data.json";
import tops from "../hooks/top-data.json";
import { Button, Image, Flex, Box, Input } from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type CartItemProps = {
  id: number;
  quantity: number;
  size: string;
};

export function CartItem({ id, quantity, size }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  const allStoreItems = [...dresses, ...pants, ...tops];
  const item = allStoreItems.find((item) => item.id === id);
  const [totalPrice, setTotalPrice] = useState<number | undefined>(
    (item?.price ?? 0) * quantity
  ); // Initialize as undefined
  useEffect(() => {
    if (item) {
      setTotalPrice(item.price * updatedQuantity); // Update total price whenever the quantity changes
    }
  }, [updatedQuantity, item?.price]);

  if (item == null) return null;



  const handleQuantityChange = (newQuantity: number) => {
    setUpdatedQuantity(newQuantity);
  };

  return (
    <Flex gap={100}>
      <Link to={`/${item.id}`}>
        <Image src={item.imgUrl} style={{ width: "100px", height: "100px" }} />
      </Link>
      <Box>{item.name}</Box>
      <Box>Size {size}</Box>
      <Box>
        <Input
          type="number"
          min={1}
          value={updatedQuantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
        />
      </Box>
    <Box>{formatCurrency(totalPrice ?? 0)}</Box>
    </Flex>
  );
}
