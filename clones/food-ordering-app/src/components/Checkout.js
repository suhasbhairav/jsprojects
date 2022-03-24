import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {selectOrderList} from '../features/orderSlice';
import OrderItem from './OrderItem';


const Checkout = () => {
    const [grandTotal, setGrandTotal] = useState(0);
    const orderList = useSelector(selectOrderList);

    useEffect(() => {
      let total = 0
      orderList.forEach(item => {
          total += item.subtotal
      });

      setGrandTotal(total);
    }, [orderList]);
    

  return (
    <Wrapper>
        <Header>
        <NotificationIcon>
          <i className='far fa-bell'></i>
        </NotificationIcon>
        <ProfileContainer>
          <ProfileIcon>
            <img
              src='https://avatars.githubusercontent.com/u/61084415?v=4'
              alt=''
            />
          </ProfileIcon>
          <ProfileName>David</ProfileName>
          <div>
            <i className='fas fa-caret-down'></i>
          </div>
        </ProfileContainer>
      </Header>

      <Card>
      <AcceptedCardTypes>
          <i className='fab fa-cc-amex'></i>
          <i className='fab fa-cc-visa'></i>
          <i className='fab fa-cc-mastercard'></i>
          <i className='fab fa-cc-discover'></i>
        </AcceptedCardTypes>
        <CardForm>
          <FormRow>
            <CardNumber placeholder='Card Number' />
          </FormRow>
          <FormRow>
            <CardValidThru placeholder='Valid Thru' />
            <CardCVC placeholder='CVC/CVC2' type='password' maxLength='3' />
          </FormRow>
        </CardForm>
        <GrandTotal>
            <span>$</span>
            {grandTotal.toFixed(2)}
        </GrandTotal>
      </Card>
      <CurrentOrder>
          {orderList.map(item => {
              <OrderItem item={item} />
          })}
      </CurrentOrder>
      <CheckoutButton>
          <span>Checkout</span>
      </CheckoutButton>
    </Wrapper>
  )
}

export default Checkout;
const Wrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(400px - 24px);
  background-color: #f6f6f6;
  padding: 40px 12px;
  & > div {
    margin-bottom: 40px;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  & > div {
    margin-right: 12px;
  }
`

const NotificationIcon = styled.div`
  background-color: #f1f1f3;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  i {
    font-size: 20px;
    color: #8e8d91;
  }
  &:hover {
    background-color: #f8ce93;
    cursor: pointer;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 48px;
  height: 36px;
  padding-left: 4px;
  & > div {
    margin-right: 12px;
  }
  & > div > i {
    font-size: 16px;
  }
  &:hover {
    background-color: #f8ce93;
    cursor: pointer;
  }
`

const ProfileIcon = styled.div`
  display: grid;
  place-items: center;
  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

const ProfileName = styled.div`
  font-family: Comfortaa-Bold;
  font-weight: 900;
  font-size: 18px;
`

const Card = styled.div`
  height: 150px;
  margin: 0 24px;
  border-radius: 36px;
  padding: 16px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  box-shadow: 0px 0 6px 6px rgba(243, 140, 0, 0.8);
  background-color: rgba(243, 140, 0, 0.9);
`

const AcceptedCardTypes = styled.div`
  display: flex;
  justify-content: flex-end;
  & > i {
    color: white;
    font-size: 24px;
    margin-right: 12px;
  }
`
const CardForm = styled.div`
  margin-top: 24px;
`

const FormRow = styled.div`
  flex: 1;
  margin: 18px 0;
  & > input {
    font-size: 18px;
    color: #f6f6f6;
    background: none;
    border: none;
    outline: none;
    &::placeholder {
      color: #f1f1f3;
      font-size: 14px;
    }
  }
`

const CardNumber = styled.input`
  width: 100%;
`
const CardValidThru = styled.input`
  width: 30%;
  margin-right: 18px;
`
const CardCVC = styled.input`
  width: 30%;
`

const GrandTotal = styled.div`
  color: #f6f6f6;
  font-size: 22px;
  font-weight: 800;
`

const CurrentOrder = styled.div`
  flex: 1;
  overflow: scroll;
`

const CheckoutButton = styled.div`
  height: 60px;
  margin-bottom: 0 !important;
  background-color: #f38e00;
  border-radius: 28px;
  display: grid;
  place-items: center;
  color: #f6f6f6;
  font-size: 18px;
  font-weight: 900;
  &:hover {
    background-color: #f8ce93;
    cursor: pointer;
    transform: scale(1.03);
  }
`