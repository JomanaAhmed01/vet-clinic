import React from 'react';
import styled from "styled-components"

function AboutOurClinic() {
    return (
        <Wrapper>
            <TextWrapper>
                <Header>ABOUT <Span>OUR CLINIC</Span></Header>
                <Text>I'm a paragraph.
                    Click here to add your own text and edit me.
                    It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    Feel free to drag and drop me anywhere you like on your page.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                    <TextSpan>
                        This is a great space to write long text about your company and your services.
                        You can use this space to go into a little more detail about your company.
                        Talk about your team and what services you provide.
                        Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                        Make your company stand out and show your visitors who you are.
                    </TextSpan>
                    <TextSpan>
                        At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you!
                        Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support.
                        Feel free to tell us what you think and give us feedback in the Wix Forum.
                    </TextSpan>
                </Text>
            </TextWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  background-image: url('./img/about-clinic-bg.png');
  height: 589px;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`

export const TextWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  padding-top: 200px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 50px;
    padding-left: 30px;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 45px;
  font-weight: bold;
  margin-top: 0px;

  @media screen and (max-width: 550px) {
    font-size: 32px;
  }
`

export const Span = styled.p`
  color: #FFFFFF;
  font-size: 45px;
  font-weight: 400;
  margin-top: -10px;

  @media screen and (max-width: 550px) {
    font-size: 32px;
  }
`

export const Text = styled.p`
  color: #FFFFFF;
  font-size: 15px;
  width: 625px;

  @media screen and (max-width: 768px) {
    width: 85%;
    margin-top: -50px;
  }

  @media screen and (max-width: 550px) {
    margin-top: -30px;
  }
`

export const TextSpan = styled.p`
  width: 645px;
  
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export default AboutOurClinic;