import React from 'react';
import styled from "styled-components"
import { Plus } from '@styled-icons/bootstrap/Plus'

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
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  
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
`

export default Navbar;