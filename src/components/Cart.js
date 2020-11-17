import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <NumOfItems>1 Item</NumOfItems>
      <CartItem />
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
  height: 100%;
  padding: 15px 20px;
`;

const Title = styled.h2``;

const NumOfItems = styled.span`
  color: #dcdcdc;
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
