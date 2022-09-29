import React from 'react';
import styled from "styled-components"
import CallUs from '../components/Homepage/CallUs'
import Navbar from '../components/Homepage/Navbar'
import HelloFriends from '../components/Homepage/HelloFriends'
import OurServices from '../components/Homepage/OurServices'

function HomePageCompound() {
  return (
    <Wrapper>
      <CallUs />
      <Navbar />
      <HelloFriends />
      <OurServices />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default HomePageCompound;