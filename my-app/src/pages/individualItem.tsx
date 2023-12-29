import dresses from "../hooks/dressdata.json";
import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  itemId: string;
}

const IndividualItem: React.FC = () => {
  const { itemId } = useParams() as { itemId: string };

  if (!itemId) {
    // Error handle
    return <div>Item ID not found</div>;
  }


  return (
    <div>
      <h1>Item ID: {itemId}</h1>
      {/* Add other details as needed */}
    </div>
  );
};

export default IndividualItem;