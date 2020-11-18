import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray, getSubTotal } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const subtotal = useSelector(getSubTotal);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(subtotal / 100);
  //console.log(storeItems);
  return (
    <Wrapper>
      <h2>Your Cart</h2>
      <NumOfItems>{storeItems.length} Item(s)</NumOfItems>
      {storeItems.map((item) => {
        //console.log(item);
        return (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            id={item.id}
            quantity={item.quantity}
          ></CartItem>
        );
      })}
      <TotalCostAndButton>
        <Total>
          Total: <strong>{formattedPrice}</strong>
        </Total>
        <PurchaseBtn>Purchase</PurchaseBtn>
      </TotalCostAndButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  background: #401f43;
  color: white;
  top: 0;
  min-height: 100vh;
  padding: 15px 20px;
`;

const NumOfItems = styled.span`
  color: #dcdcdc;
  margin-top: -10px;
`;

const TotalCostAndButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 20px;
  width: 88%;
`;

const Total = styled.p`
  font-size: 1.2em;
`;

const PurchaseBtn = styled(Button)`
  max-width: 40%;
`;

export default Cart;
