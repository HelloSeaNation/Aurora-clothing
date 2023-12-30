import dresses from "../hooks/dressdata.json";
import pant from "../hooks/pants-data.json";
import React from "react";
import { useParams } from "react-router-dom";

interface Item {
  id: number; 
  name: string;
  price: number;
  imgUrl: string;
  hoverImage: string;
}

const findItemById = (itemId: string): Item | undefined => {
  const dressItem = dresses.find((item) => item.id.toString() === itemId);
  const pantItem = pant.find((item) => item.id.toString() === itemId);

  if (dressItem) {
    return dressItem;
  } else if (pantItem) {
    return pantItem;
  }

  return undefined;
};

const IndividualItem: React.FC = () => {
  const { itemId } = useParams() as { itemId: string };

  if (!itemId) {
    // Error handle
    return <div>Item not available</div>;
  }

  const item = findItemById(itemId);

  if (!item) {
    // Handle item not found
    return <div>Item not found</div>;
  }

  const { name, price, imgUrl } = item;

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Price: ${price}</h1>
      <img src={imgUrl} />
    </div>
  );
};

export default IndividualItem;
