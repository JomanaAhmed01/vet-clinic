import React from 'react';
import styled from "styled-components"
import CallUs from '../components/Homepage/CallUs'
import Navbar from '../components/Homepage/Navbar'
import HelloFriends from '../components/Homepage/HelloFriends'
import OurServices from '../components/Homepage/OurServices'
import AboutOurClinic from '../components/Homepage/AboutOurClinic'
import KeepInTouch from '../components/Homepage/KeepInTouch'

function HomePageCompound() {
  return (
    <Wrapper>
      <CallUs />
      <Navbar />
      <HelloFriends />
      <OurServices />
      <AboutOurClinic />
      <KeepInTouch />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default HomePageCompound;