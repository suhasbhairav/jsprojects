import React from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {addItem} from '../features/orderSlice';


const MenuItem = ({item}) => {
  const dispatch = useDispatch();
  
    return (
    <Wrapper>
        <MenuItemEmoji>
            <span>{item.emoji}</span>
        </MenuItemEmoji>
        <MenuItemImage src={item.image} />
        <LowerContainer>
            <MenuItemDetails>
                <MenuItemTitle>{item.name}</MenuItemTitle>
            

            <MenuItemRating>
            <i class='fas fa-star'/>
            {item.rating}
            </MenuItemRating>
            <MenuItemPrice>
            <span>$</span>
            {item.price}
            </MenuItemPrice>
            </MenuItemDetails>
            <ActionItemsContainer>
                <AddToCartContainer onClick={() => dispatch(addItem(item))}>
                    <i className='fas fa-cart-plus'/>
                </AddToCartContainer>
            </ActionItemsContainer>
            
        </LowerContainer>
        
    </Wrapper>
  )
}

export default MenuItem;

const Wrapper = styled.div`
  min-width: 125px;
  max-width: 200px;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 24px;
`

const MenuItemEmoji = styled.div`
  align-self: flex-end;
  height: 20px;
  width: 20px;
  padding: 8px;
  display: grid;
  place-items: center;
  font-size: 14px;
  background-color: #f3d5cd;
  border-radius: 50%;
`

const MenuItemImage = styled.img`
  height: 78px;
  width: 78px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: -36px;
  z-index: 100;
`

const LowerContainer = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100px;
  padding: 48px 16px 16px 16px;
  border-radius: 28px;
  display: flex;
`

const MenuItemDetails = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MenuItemTitle = styled.div`
  font-family: Comfortaa-Bold;
  font-weight: 800;
`

const MenuItemRating = styled.div`
  color: #f38c00;
`

const MenuItemPrice = styled.div`
  font-family: Comfortaa-Bold;
  font-size: 18px;
  font-weight: 900;
  padding-bottom: 12px;
  span {
    color: #f38c00;
    font-weight: 900;
    font-size: 14px;
  }
`

const ActionItemsContainer = styled.div`
  flex: 0.3;
  display: grid;
  align-items: end;
  justify-content: center;
`

const AddToCartContainer = styled.div`
  color: black;
  align-self: flex-end;
  justify-self: flex-end;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: #f38c00;
  color: #f6f6f6;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`