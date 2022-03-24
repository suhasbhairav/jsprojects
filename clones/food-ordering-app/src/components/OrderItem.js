import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {removeItem} from '../features/orderSlice';


const OrderItem = ({item}) => {
    const dispatch = useDispatch();

  return (
    <Wrapper>
        <RemoveButton onClick={() => dispatch(removeItem(item))}>
            <i className='fas fa-minus' /> 
        </RemoveButton>

        <ItemImage>
            <img src={item.image} alt={item.name} />
        </ItemImage>
        <ItemImage>
            <img src={item.image} alt={item.name} />
        </ItemImage>
        <ItemInfo>
            <Title>{item.title}</Title>
            <PriceInfo>
                <div>
                    <Quantity>
                        <span>x</span>
                        {item.quantity}
                    </Quantity>
                    <Price>
                        <span>x$</span>
                        {item.price.toFixed(2)}
                    </Price>
                </div>
                <SubtotalContainer>
                    <Subtotal>
                        <span>$</span>
                        {item.subtotal.toFixed(2)}
                    </Subtotal>
                </SubtotalContainer>
            </PriceInfo>
        
        </ItemInfo>
    
    
    
    </Wrapper>
  )
}

export default OrderItem;
const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 48px);
  padding: 12px;
  /* TRouBLe */
  margin: 0 -12px 0 12px;
  border-radius: 18px;
  &:hover {
    cursor: pointer;
    background-color: #f1f1f3;
  }
`

const RemoveButton = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  z-index: 100;
  display: grid;
  /* TRouBLe */
  margin: -8px -14px 0 -8px;
  place-items: center;
  background-color: rgba(246, 246, 246, 1);
  border: 1px solid rgba(145, 147, 150, 1);
  color: #d32c28;
  & > i {
    font-size: 10px;
  }
  &:hover {
    transform: scale(1.2);
  }
`

const ItemImage = styled.div`
  height: 70px;
  width: 70px;
  display: grid;
  place-items: center;
  background-color: #f3d3ad;
  padding: 12px;
  border-radius: 18px;
  & > img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
  }
`
const ItemInfo = styled.div`
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.div`
  font-weight: 900;
  font-size: 20px;
`

const PriceInfo = styled.div`
  display: flex;
  align-items: flex-end;
  & > div {
    display: flex;
  }
  span {
    color: #f38c00;
    font-weight: 900;
  }
`

const Quantity = styled.div``

const Price = styled.div`
  margin-left: 8px;
`

const SubtotalContainer = styled.div`
  flex: 1;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
`

const Subtotal = styled.div`
  text-align: right;
`