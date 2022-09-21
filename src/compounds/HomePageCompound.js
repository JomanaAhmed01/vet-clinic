import React from 'react';
import styled from "styled-components"
import CallUs from '../components/Homepage/CallUs'
import Navbar from '../components/Homepage/Navbar'
import HelloFriends from '../components/Homepage/HelloFriends'

function HomePageCompound() {
  return (
    <Wrapper>
      <CallUs />
      <Navbar />
      <HelloFriends />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default HomePageCompound;