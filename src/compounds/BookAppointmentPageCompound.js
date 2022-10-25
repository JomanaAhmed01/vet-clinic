import React from 'react';
import styled from "styled-components"
import CallUs from '../components/BookAppointmentPage/CallUs'
import Navbar from '../components/BookAppointmentPage/Navbar'

function BookAppointmentPageCompound() {
    return (
        <Wrapper>
            <CallUs />
            <Navbar />
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  
`

export default BookAppointmentPageCompound;