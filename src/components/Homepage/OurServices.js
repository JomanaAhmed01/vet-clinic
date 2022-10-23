import React from 'react';
import styled from "styled-components"
import { KeyboardArrowRight } from '@styled-icons/material-twotone/KeyboardArrowRight'

function OurServices() {
  return (
    <Wrapper>
      <OurServicesTextWrapper>
        <Header>OUR</Header>
        <Span>SERVICES!</Span>
      </OurServicesTextWrapper>

      <OurServicesWrapper>
        <OurServicesItemWrapper>
          <OurServicesHeaderWrapper>
            <ArrowIcon />
            <OurServicesHeader>WELLNESS EXAMS</OurServicesHeader>
          </OurServicesHeaderWrapper>
          <OurServicesText>I'm a paragraph. Click here to add your own text and edit me.</OurServicesText>
        </OurServicesItemWrapper>

        <OurServicesItemWrapper>
          <OurServicesHeaderWrapper>
            <ArrowIcon />
            <OurServicesHeader>MICROCHIPPING</OurServicesHeader>
          </OurServicesHeaderWrapper>
          <OurServicesText>I'm a paragraph. Click here to add your own text and edit me.</OurServicesText>
        </OurServicesItemWrapper>

        <OurServicesItemWrapper>
          <OurServicesHeaderWrapper>
            <ArrowIcon />
            <OurServicesHeader>SURGERY</OurServicesHeader>
          </OurServicesHeaderWrapper>
          <OurServicesText>I'm a paragraph. Click here to add your own text and edit me.</OurServicesText>
        </OurServicesItemWrapper>

        <OurServicesItemWrapper>
          <OurServicesHeaderWrapper>
            <ArrowIcon />
            <OurServicesHeader>VACCINATION</OurServicesHeader>
          </OurServicesHeaderWrapper>
          <OurServicesText>I'm a paragraph. Click here to add your own text and edit me.</OurServicesText>
        </OurServicesItemWrapper>

        <OurServicesItemWrapper>
          <OurServicesHeaderWrapper>
            <ArrowIcon />
            <OurServicesHeader>EMERGENCY CARE</OurServicesHeader>
          </OurServicesHeaderWrapper>
          <OurServicesText>I'm a paragraph. Click here to add your own text and edit me.</OurServicesText>
        </OurServicesItemWrapper>

        <OurServicesItemWrapper>
          <OurServicesHeaderWrapper>
            <ArrowIcon />
            <OurServicesHeader>GROOMING</OurServicesHeader>
          </OurServicesHeaderWrapper>
          <OurServicesText>I'm a paragraph. Click here to add your own text and edit me.</OurServicesText>
        </OurServicesItemWrapper>

        <OurServicesItemWrapper>
          <OurServicesHeaderWrapper>
            <ArrowIcon />
            <OurServicesHeader>BOARDING</OurServicesHeader>
          </OurServicesHeaderWrapper>
          <OurServicesText>I'm a paragraph. Click here to add your own text and edit me.</OurServicesText>
        </OurServicesItemWrapper>

        <OurServicesItemWrapper>
          <OurServicesHeaderWrapper>
            <ArrowIcon />
            <OurServicesHeader>DENTAL CARE</OurServicesHeader>
          </OurServicesHeaderWrapper>
          <OurServicesText>I'm a paragraph. Click here to add your own text and edit me.</OurServicesText>
        </OurServicesItemWrapper>
      </OurServicesWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1154px) {
    flex-direction: column;
  }
`

export const OurServicesTextWrapper = styled.div`
  background-color: #DDDDDD66;
  width: 400px;
  height: 660px;
  display: flex;
  flex-direction: column;
  padding-left: 180px;
  padding-top: 60px;

  @media screen and (max-width: 1154px) {
    flex-direction: column;
    height: auto;
    padding-top: 0px;
    padding-left: 0px;
    width: 100%;
  }
`

export const Header = styled.p`
  color: #000000;
  font-size: 45px;
  font-weight: bold;

  @media screen and (max-width: 1154px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Span = styled.p`
  color: #000000;
  font-size: 45px;
  margin-top: -55px;

  @media screen and (max-width: 1154px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const OurServicesWrapper = styled.div`
  /* border: 3px solid yellow; */
  width: 50%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 70px;

  @media screen and (max-width: 1154px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    width: 70%;
  }
`

export const OurServicesItemWrapper = styled.div`
  /* border: 3px solid pink; */
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const OurServicesHeaderWrapper = styled.div`
  /* border: 3px solid yellow; */
  display: flex;
  align-items: center;
`

export const ArrowIcon = styled(KeyboardArrowRight)`
  /* border: 3px solid purple; */
  width: 35px;
  height: 35px;
  color: #3399ff;
`

export const OurServicesHeader = styled.p`
  color: #555555;
  font-size: 20px;
  margin-left: 5px;
`

export const OurServicesText = styled.p`
  color: #000000;
  font-size: 14px;
  width: 220px;
  margin-left: 40px;
  margin-top: -2px;
`

export default OurServices;