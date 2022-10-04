import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  /* justify-content: space-between; */
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 26%;
  &:first-child {
    width: 10%;
  }
  &:nth-child(2) {
    width: 25.5%;
  }
  &:nth-child(3) {
    width: 25.7%;
  }
  &:nth-child(4) {
    width: 34%;
  }
  &:last-child {
    width: 4.6%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

