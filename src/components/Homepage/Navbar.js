import React from 'react';
import styled from "styled-components"
import { Plus } from '@styled-icons/bootstrap/Plus'
import { PersonCircle } from '@styled-icons/ionicons-solid/PersonCircle'
import { Menu } from '@styled-icons/entypo/Menu'

function Navbar() {
    return (
        <Wrapper>
            <LogoWrapper>
                <FirstRow>
                    <TheAnimalClinic>THE ANIMAL</TheAnimalClinic>
                    <PlusIcon />
                </FirstRow>
                
                <SecondRow>
                    <Clinic>CLINIC</Clinic>
                    <VetService>VET SERVICE</VetService>
                </SecondRow>
            </LogoWrapper>

            <ItemsWrapper>
                <LinksWrapper>
                  <Link>HOME</Link>
                  <Link>OUR SERVICES</Link>
                  <Link>ABOUT OUR CLINIC</Link>
                  <Link>KEEP IN TOUCH</Link>
                  <Link>BOOK NOW</Link>
                </LinksWrapper>

                <LoginWrapper>
                    <ProfileIcon />
                    <Login>Log in</Login>
                </LoginWrapper>
            </ItemsWrapper>

            <MenuIcon />
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  width: 87%;

  @media screen and (max-width: 1024px) {
    align-items: center;
    width: 90%;
  }
`

export const LogoWrapper = styled.div`
  
`

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
`

export const TheAnimalClinic = styled.p`
  color: #555555;
  font-size: 25px;
  font-weight: bold;
`

export const PlusIcon = styled(Plus)`
  width: 25px;
  height: 25px;
  color: #EC4A34;
`

export const SecondRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: -50px;
`

export const Clinic = styled.p`
  color: #555555;
  font-size: 25px;
`

export const VetService = styled.p`
  color: #A0A0A0;
  font-size: 13px;
  margin-bottom: 4px;
  margin-left: 6px;
`

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin-right: 40px;
`

export const Link = styled.p`
  color: #555555;
  font-size: 13px;
  cursor: pointer;
`

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileIcon = styled(PersonCircle)`
  width: 26px;
  height: 26px;
  color: #EC4A34;
  margin-right: 15px;
  cursor: pointer;
`

export const Login = styled.p`
  color: #F56A56;
  font-size: 14px;
  cursor: pointer;
`

export const MenuIcon = styled(Menu)`
  display: none;
  
  @media screen and (max-width: 1024px) {
    display: initial;
    width: 50px;
    height: 50px;
    color: #000000;
    cursor: pointer;
  }
`

export default Navbar;