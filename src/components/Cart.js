import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  //console.log(storeItems);
  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <NumOfItems>1 Item</NumOfItems>
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
          Total: <strong>$12.34</strong>
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

const Title = styled.h2``;

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
