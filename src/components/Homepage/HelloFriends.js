import React from 'react';
import styled from "styled-components"

function HelloFriends() {
  return (
    <>
      <Wrapper>
        <TextWrapper>
          <Header>HELLO</Header>
          <Span>FREINDS!</Span>
          <Text>I'm a paragraph. Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a little more about you.</Text>
          <Button>BOOK AN APPOINTMENT</Button>
        </TextWrapper>
      </Wrapper>

      {/* Mobile View Section */}

      <MobileWrapper>
        <MobileImage src='./img/first-image.png' />
        <MobileTextWrapper>
          <MobileHeader>HELLO</MobileHeader>
          <MobileSpan>FREINDS!</MobileSpan>
          <MobileText>I'm a paragraph. Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a little more about you.</MobileText>
          <MobileButton>BOOK AN APPOINTMENT</MobileButton>
        </MobileTextWrapper>
      </MobileWrapper>
    </>
  );
}


export const Wrapper = styled.div`
  background-image: url('/img/bg-1.png');
  background-position: left;
  background-size: cover;
  background-attachment: fixed;
  height: 756px;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const TextWrapper = styled.div`
  background-color: #FFFFFF;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding-left: 180px;
  padding-top: 160px;
`

export const Header = styled.p`
  color: #000000;
  font-size: 45px;
  font-weight: bold;
`

export const Span = styled.p`
  color: #000000;
  font-size: 45px;
  margin-top: -55px;
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  width: 235px;
  margin-bottom: 50px;
`

export const Button = styled.button`
  width: 218px;
  height: 37px;
  background-color: #F56A56;
  color: #FFFFFF;
  border: 1px solid transparent;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #CA2913;
    cursor: pointer;
  }
`

/* Mobile View Section */

export const MobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`

export const MobileImage = styled.img`
  width: 100%;
`

export const MobileTextWrapper = styled.div`
  background-color: #DDDDDD66;
  width: 100%;
`

export const MobileHeader = styled.p`
  color: #000000;
  font-size: 45px;
  font-weight: bold;
  padding-left: 160px;
  
  @media screen and (max-width: 520px) {
    padding-left: 50px;
    font-size: 33px;
  }
`

export const MobileSpan = styled.p`
  color: #000000;
  font-size: 45px;
  margin-top: -55px;
  padding-left: 160px;

  @media screen and (max-width: 520px) {
    padding-left: 50px;
    margin-top: -40px;
    font-size: 33px;
  }
`

export const MobileText = styled.p`
  color: #000000;
  font-size: 16px;
  width: 235px;
  margin-bottom: 50px;
  padding-left: 160px;

  @media screen and (max-width: 520px) {
    padding-left: 50px;
  }
`

export const MobileButton = styled.button`
  width: 218px;
  height: 37px;
  background-color: #F56A56;
  color: #FFFFFF;
  border: 1px solid transparent;
  margin-left: 160px;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #CA2913;
    cursor: pointer;
  }

  @media screen and (max-width: 520px) {
    margin-left: 50px;
  }
`

export default HelloFriends;