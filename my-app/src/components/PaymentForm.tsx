import React, { useState } from "react";
import {
  CardElement,
  AddressElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useShoppingCart } from "../context/cartFunction";
import dresses from "../hooks/dressdata.json";
import pants from "../hooks/pants-data.json";
import tops from "../hooks/top-data.json";
import { formatCurrency } from "../utilities/formatCurrency";

const PaymentForm = () => {
  const { cartItems, cartQuantity } = useShoppingCart();
  const totalPrice = cartItems
    .reduce((total: number, cartItem: { id: number; quantity: number }) => {
      const allStoreItems = [...dresses, ...pants, ...tops];
      const item = allStoreItems.find((item) => item.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
    .toFixed(2);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState<StripeError | undefined>(
    undefined
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const addressElement = elements.getElement(AddressElement);

    if (cardElement && addressElement) {
      try {
        const { paymentMethod, error } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            address: {
              country: "NZ",
            },
          },
        });

        if (error) {
          setPaymentError(error);
        } else {
          // Send the token to your server for further processing
          console.log(paymentMethod);
        }
      } catch (error) {
        console.error("Error processing payment:", error);
      }
    } else {
      console.error("Card Element or Address Element not found");
    }
  };

  const cardStyle = {
    base: {
      fontSize: "20px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  };

  const cardElementOptions = {
    hidePostalCode: true,
    style: cardStyle,
    disableLinks: false,
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text> Total payment {formatCurrency(Number(totalPrice))}</Text>
      <CardElement options={cardElementOptions} />
      <Text> Billing Address</Text>
      <AddressElement options={{ mode: "billing" }} />
      {paymentError && (
        <div style={{ color: "red" }}>{paymentError.message}</div>
      )}
      <Button type="submit" disabled={!stripe}>
        Pay
      </Button>
    </form>
  );
};

export default PaymentForm;
