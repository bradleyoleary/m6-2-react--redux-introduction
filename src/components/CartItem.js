import React from "react";
import styled from "styled-components";
import { x } from "react-icons-kit/feather/x";
import { Icon } from "react-icons-kit";
import { removeItem } from "../actions";
import { useDispatch } from "react-redux";

const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <TopDiv>
        <Title>{title}</Title>
        <RemoveBtn
          onClick={() => {
            dispatch(removeItem({ id }));
          }}
        >
          <Icon icon={x} size={"100%"} style={{ color: "white" }} />
        </RemoveBtn>
      </TopDiv>
      <QtyDiv>
        Quantity: <Input />
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
  width: 25px;
  font-size: inherit;
  display: inline-block;
`;

export default CartItem;
