import React from 'react';
import styled from "styled-components"

function HelloFriends() {
  return (
    <Wrapper>
      <TextWrapper>
        <Header>HELLO</Header>
        <Span>FREINDS!</Span>
        <Text>I'm a paragraph. Click here to add your own text and edit me.
          I’m a great place for you to tell a story and let your users know a little more about you.</Text>
        <Button>BOOK AN APPOINTMENT</Button>
      </TextWrapper>
    </Wrapper>
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
`

export default HelloFriends;