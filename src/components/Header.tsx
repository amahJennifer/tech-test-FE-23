import React from 'react';
import styled from 'styled-components'

const Header = ()=>{
    return (
        <HeaderWrapper>
            <HeaderText>Payouts</HeaderText>
        </HeaderWrapper>)
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const HeaderText = styled.h1`
  font-family: Inter,sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin:0
`;


export default Header
