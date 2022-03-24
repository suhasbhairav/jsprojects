import React from 'react';
import styled from 'styled-components';
import deliveryImg from '../assets/images/delivery.png';

const Banner = () => {
  return (
    <Wrapper>
        <img src={deliveryImg} alt='delivery'/>
        <Offer>
            <Greeting>Hello Suhas</Greeting>
            <OfferDetails>
                Get free delivery every <span>$10</span> purchase
            </OfferDetails>
        </Offer>
    </Wrapper>
  )
}

export default Banner;
const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f5e3c9;
  border-radius: 28px;
  display: flex;
  align-items: center;
  div {
    margin-bottom: 0 !important;
  }
  img {
    height: 80%;
    margin-right: 30px;
  }
`

const Offer = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const Greeting = styled.div`
  font-family: Comfortaa-Bold;
  font-size: 36px;
  font-weight: 900;
`

const OfferDetails = styled.div`
  font-size: 18px;
  span {
    font-family: Comfortaa-Bold;
    color: #f38c00;
    font-weight: 900;
    font-size: 20px;
  }
`

const OfferButton = styled.div`
  text-align: center;
  background-color: #f38c00;
  padding: 14px 28px;
  border-radius: 28px;
  color: #eee;
  &:hover {
    cursor: pointer;
    background-color: #f8ce93;
    color: black;
    transform: scale(1.1);
  }
`