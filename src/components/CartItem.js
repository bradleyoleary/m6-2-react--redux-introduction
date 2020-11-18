import React from "react";
import styled from "styled-components";
import { x } from "react-icons-kit/feather/x";
import { Icon } from "react-icons-kit";
import { removeItem, updateQuantity } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ title, quantity, id }) => {
  const dispatch = useDispatch();
  //get the current quantity of the item from the store and display qty in the input we created
  const itemQuantity = useSelector((state) => state[id].quantity);
  return (
    <Container>
      <TopDiv>
        <Title>{title}</Title>
        <RemoveBtn onClick={() => dispatch(removeItem(id))}>
          <Icon icon={x} size={"100%"} style={{ color: "white" }} />
        </RemoveBtn>
      </TopDiv>
      <QtyDiv>
        Quantity:{" "}
        <Input
          type="text"
          placeholder={quantity ? quantity : 0}
          value={itemQuantity}
          onChange={(event) => dispatch(updateQuantity(id, event.target.value))}
        />
      </QtyDiv>
    </Container>
  );
};

const Container = styled.div`
  color: white;
  border: 2px dashed grey;
  margin-top: 50px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  color: white;
  font-size: 1.2em;
  padding: 0 8px;
`;

const RemoveBtn = styled.button`
  height: 35px;
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const QtyDiv = styled.div`
  background: #301732;
  padding: 8px;
  color: #dcdcdc;
`;

const Input = styled.input`
  height: 25px;
  width: 30px;
  font-size: inherit;
  display: inline-block;
`;

export default CartItem;
