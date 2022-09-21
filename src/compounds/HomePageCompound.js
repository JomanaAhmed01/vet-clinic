import React from 'react';
import styled from "styled-components"
import CallUs from '../components/Homepage/CallUs'
import Navbar from '../components/Homepage/Navbar'

function HomePageCompound() {
  return (
    <Wrapper>
      <CallUs />
      <Navbar />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default HomePageCompound;