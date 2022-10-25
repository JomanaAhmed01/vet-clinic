import React from 'react';
import styled from "styled-components"

function KeepInTouch() {
  return (
    <Wrapper>
      <HeaderAndAddressWrapper>
        <HeaderWrapper>
          <Header>KEEP <Span>IN TOUCH</Span></Header>
        </HeaderWrapper>

        <AddressWrapper>
          <HeaderWrapperResponsive>
            <HeaderResponsive>KEEP <SpanResponsive>IN TOUCH</SpanResponsive></HeaderResponsive>
          </HeaderWrapperResponsive>
          <ColumnsWrapper>
            <FirstColumn>
              <OurAddressHeader>OUR <OurAddressHeaderSpan>ADDRESS</OurAddressHeaderSpan></OurAddressHeader>
              <Address>500 Terry Francois St, San Francisco, CA 94158</Address>
              <Email>Email: <EmailSpan>info@mysite.com</EmailSpan></Email>
              <Tel>Tel: <TelSpan>123-456-7890</TelSpan></Tel>
            </FirstColumn>

            <SecondColumn>
              <OpeningHoursHeader>OPENING <OpeningHoursHeaderSpan>HOURS</OpeningHoursHeaderSpan></OpeningHoursHeader>
              <Time>7:00 AM - 10:00 PM <TimeSpan>Monday - Saturday</TimeSpan></Time>

              <Time>10:00 AM - 6:00 PM <TimeSpan>Sunday</TimeSpan></Time>
            </SecondColumn>
          </ColumnsWrapper>

          <MapWrapper>
            <Image src='./img/map.png' alt='Vet Clinic Location' />
          </MapWrapper>

          <ContactWrapper>
            <ContactHeader>CONTACT <ContactSpan>US</ContactSpan></ContactHeader>

            <ContactFieldsWrapper>
              <FirstContactColumn>
                <Input placeholder='Name' />
                <Input placeholder='Email' />
                <Input placeholder='Subject' />
              </FirstContactColumn>

              <SecondContactColumn>
                <InputTextArea placeholder='Message' />
                <Button>Submit</Button>
              </SecondContactColumn>

            </ContactFieldsWrapper>
          </ContactWrapper>
        </AddressWrapper>
      </HeaderAndAddressWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export const HeaderAndAddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderWrapper = styled.div`
  background-color: #FFFFFF;
  height: 874px;
  width: 500px;

  @media screen and (max-width: 1090px) {
    display: none;
  }
`

export const AddressWrapper = styled.div`
  background-color: #DDDDDD66;
  width: 846px;
  height: 874px;
  padding-left: 80px;
  padding-top: 80px;

  @media screen and (max-width: 1090px) {
    width: 100%;
    height: auto;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    margin-right: auto;
  }
`

export const Header = styled.p`
  color: #000000;
  font-size: 45px;
  font-weight: bold;
  padding-left: 100px;
  padding-top: 60px;
`

export const Span = styled.p`
  color: #000000;
  font-size: 45px;
  font-weight: 400;
  margin-top: -15px;
`

export const ColumnsWrapper = styled.div`
  display: flex;
  margin-bottom: 70px;

  @media screen and (max-width: 1090px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }
`

export const FirstColumn = styled.div`
  border-right: 1px solid #cccccc;
  width: 330px;
  height: 250px;

  @media screen and (max-width: 768px) { 
    border-right: 1px solid transparent;
    width: auto;
  }
`

export const OurAddressHeader = styled.p`
  color: #555555;
  font-size: 20px;
  font-weight: bold;
`

export const OurAddressHeaderSpan = styled.span`
  color: #555555;
  font-size: 20px;
  font-weight: 400;
`

export const Address = styled.p`
  color: #000000;
  font-size: 15px;
  width: 275px;
`

export const Email = styled.p`
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  width: 275px;
  margin-top: 30px;
`

export const EmailSpan = styled.span`
  color: #000000;
  font-size: 15px;
  font-weight: 400;
`

export const Tel = styled.p`
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  width: 275px;
  margin-top: -10px;
`

export const TelSpan = styled.span`
  color: #000000;
  font-size: 15px;
  font-weight: 400;
`

export const SecondColumn = styled.div`
  padding-left: 70px;

  @media screen and (max-width: 768px) {
    
    width: auto;
    padding-left: 0px;
  }
`

export const OpeningHoursHeader = styled.p`
  color: #555555;
  font-size: 20px;
  font-weight: bold;
`

export const OpeningHoursHeaderSpan = styled.span`
  color: #555555;
  font-size: 20px;
  font-weight: 400;
`

export const Time = styled.p`
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  width: 275px;
  margin-top: 20px;
`

export const TimeSpan = styled.p`
  color: #000000;
  font-size: 15px;
  font-weight: 400;
`

export const MapWrapper = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1090px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const Image = styled.img`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ContactWrapper = styled.div`
  
`

export const ContactHeader = styled.p`
  color: #555555;
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 1090px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    text-align: left;
    padding-left: 40px;
  }
`

export const ContactSpan = styled.span`
  /*  */
  font-weight: 400;
`

export const ContactFieldsWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1090px) {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: left;
    padding-left: 40px;
  }
`

export const FirstContactColumn = styled.div`
  /* border: 3px solid green; */
  display: flex;
  flex-direction: column;
  margin-top: -5px;
`

export const SecondContactColumn = styled.div`
  /* border: 3px solid grey; */
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  /* border: 3px solid grey; */
  margin-top: 5px;
  width: 300px;
  height: 30px;
  border: 1px solid transparent;
  background-color: #FFFFFF;
  font-size: 14px;

  :hover {
    background-color: #b3d9ff;
    cursor: auto;
  }

  :focus {
    background-color: #ffffcc;
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`

export const InputTextArea = styled.textarea`
  width: 299px;
  height: 106px;
  margin-left: 5px;
  border: 1px solid transparent;
  background-color: #FFFFFF;
  resize: none;
  font-size: 14px;

  :hover {
    background-color: #b3d9ff;
    cursor: auto;
  }

  :focus {
    background-color: #ffffcc;
    outline: none;
  }

  @media screen and (max-width: 768px) {
    margin-top: 5px;
    margin-left: 0px;
    width: 85%;
  }
`

export const Button = styled.button`
  /* border: 3px solid grey; */
  width: 76px;
  height: 35px;
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

  @media screen and (max-width: 768px) {
    margin-right: auto;
    margin-left: 0;
  }
`

export const HeaderWrapperResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1090px) {
    display: initial;
    position: relative;
    bottom: 30px;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    padding-left: 40px;
    margin: 0;
  }
`

export const HeaderResponsive = styled.p`
  display: none;

  @media screen and (max-width: 1090px) {
    display: initial;
    color: #000000;
    font-size: 45px;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

export const SpanResponsive = styled.p`
  display: none;

  @media screen and (max-width: 1090px) {
    display: initial;
    color: #000000;
    font-size: 45px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

export default KeepInTouch;