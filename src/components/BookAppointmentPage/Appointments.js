import React from 'react';
import styled from "styled-components"

function Appointments() {
    return (
        <Wrapper>
            <AppointmentsWrapper>
                <Header>AVAILABLE <Span>APPOINTMENTS</Span></Header>

                <Appointment>
                    <AppointmentTypeWrapper>
                        <AppointmentType>DENTAL CARE</AppointmentType>
                    </AppointmentTypeWrapper>

                    <AppointmentPriceAndTimeWrapper>
                        <AppointmentPriceAndTime>20 min <SpanPrice>$79</SpanPrice></AppointmentPriceAndTime>
                    </AppointmentPriceAndTimeWrapper>

                    <BookNowButtonWrapper>
                        <BookNowButton>BOOK NOW</BookNowButton>
                    </BookNowButtonWrapper>
                </Appointment>

                <Appointment>
                    <AppointmentTypeWrapper>
                        <AppointmentType>SURGERY</AppointmentType>
                    </AppointmentTypeWrapper>

                    <AppointmentPriceAndTimeWrapper>
                        <AppointmentPriceAndTime>1 hr 30 min <SpanPrice>$200</SpanPrice></AppointmentPriceAndTime>
                    </AppointmentPriceAndTimeWrapper>

                    <BookNowButtonWrapper>
                        <BookNowButton>BOOK NOW</BookNowButton>
                    </BookNowButtonWrapper>
                </Appointment>

                <Appointment>
                    <AppointmentTypeWrapper>
                        <AppointmentType>EMERGENCY CARE</AppointmentType>
                    </AppointmentTypeWrapper>

                    <AppointmentPriceAndTimeWrapper>
                        <AppointmentPriceAndTime>50 min <SpanPrice>$100</SpanPrice></AppointmentPriceAndTime>
                    </AppointmentPriceAndTimeWrapper>

                    <BookNowButtonWrapper>
                        <BookNowButton>BOOK NOW</BookNowButton>
                    </BookNowButtonWrapper>
                </Appointment>

                <Appointment>
                    <AppointmentTypeWrapper>
                        <AppointmentType>VACCINATIONS</AppointmentType>
                    </AppointmentTypeWrapper>

                    <AppointmentPriceAndTimeWrapper>
                        <AppointmentPriceAndTime>20 min <SpanPrice>$79</SpanPrice></AppointmentPriceAndTime>
                    </AppointmentPriceAndTimeWrapper>

                    <BookNowButtonWrapper>
                        <BookNowButton>BOOK NOW</BookNowButton>
                    </BookNowButtonWrapper>
                </Appointment>

                <Appointment>
                    <AppointmentTypeWrapper>
                        <AppointmentType>MICRO CHIPPING</AppointmentType>
                    </AppointmentTypeWrapper>

                    <AppointmentPriceAndTimeWrapper>
                        <AppointmentPriceAndTime>20 min <SpanPrice>$79</SpanPrice></AppointmentPriceAndTime>
                    </AppointmentPriceAndTimeWrapper>

                    <BookNowButtonWrapper>
                        <BookNowButton>BOOK NOW</BookNowButton>
                    </BookNowButtonWrapper>
                </Appointment>

                <Appointment>
                    <AppointmentTypeWrapper>
                        <AppointmentType>BOARDING</AppointmentType>
                    </AppointmentTypeWrapper>

                    <AppointmentPriceAndTimeWrapper>
                        <AppointmentPriceAndTime>25 min <SpanPrice>$79</SpanPrice></AppointmentPriceAndTime>
                    </AppointmentPriceAndTimeWrapper>

                    <BookNowButtonWrapper>
                        <BookNowButton>BOOK NOW</BookNowButton>
                    </BookNowButtonWrapper>
                </Appointment>

                <Appointment>
                    <AppointmentTypeWrapper>
                        <AppointmentType>GROOMING</AppointmentType>
                    </AppointmentTypeWrapper>

                    <AppointmentPriceAndTimeWrapper>
                        <AppointmentPriceAndTime>1 hr<SpanPrice>$150</SpanPrice></AppointmentPriceAndTime>
                    </AppointmentPriceAndTimeWrapper>

                    <BookNowButtonWrapper>
                        <BookNowButton>BOOK NOW</BookNowButton>
                    </BookNowButtonWrapper>
                </Appointment>

                <Appointment>
                    <AppointmentTypeWrapper>
                        <AppointmentType>WELLNESS EXAMS</AppointmentType>
                    </AppointmentTypeWrapper>

                    <AppointmentPriceAndTimeWrapper>
                        <AppointmentPriceAndTime>1 hr<SpanPrice>$99</SpanPrice></AppointmentPriceAndTime>
                    </AppointmentPriceAndTimeWrapper>

                    <BookNowButtonWrapper>
                        <BookNowButton>BOOK NOW</BookNowButton>
                    </BookNowButtonWrapper>
                </Appointment>
            </AppointmentsWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  
`

export const AppointmentsWrapper = styled.div`
  margin-left: 180px;
  margin-top: 30px;

  @media screen and (max-width: 1024px) {
    margin-left: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    margin-left: 100px;
  }

  @media screen and (max-width: 570px) {
    margin-left: 60px;
  }
`

export const Header = styled.p`
  color: #000000;
  font-size: 45px;
  font-weight: bold;
  width: 82%;
  border-bottom: 1px solid #cccccc;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

export const Span = styled.p`
  color: #000000;
  font-size: 45px;
  font-weight: 400;
  margin-top: -9px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

export const Appointment = styled.div`
  border-bottom: 1px solid #cccccc;
  width: 82%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 20px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const AppointmentTypeWrapper = styled.div`
  
`

export const AppointmentType = styled.p`
  color: #28ADD1;
  font-size: 22px;
`

export const AppointmentPriceAndTimeWrapper = styled.div`
  position: relative;
  left: 140px;
  top: 20px;

  @media screen and (max-width: 1024px) {
    left: 0px;
    top: 0px;
  }
`

export const AppointmentPriceAndTime = styled.p`
  color: #000000;
  font-size: 16px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

export const SpanPrice = styled.p`
  
`

export const BookNowButtonWrapper = styled.div`
  
`

export const BookNowButton = styled.button`
  width: 151px;
  height: 38px;
  background-color: #F56A56;
  border: 1px solid transparent;
  color: #FFFFFF;
  font-size: 14px;
  margin-left: auto;
  margin-top: 10px;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #cc0000;
    cursor: pointer;
  }
`

export default Appointments;