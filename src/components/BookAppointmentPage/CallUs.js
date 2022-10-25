import React from 'react';
import styled from "styled-components"

function CallUs() {
  return (
    <Wrapper>
      <TextWrapper>
        <PhoneNumber>CALL US: 123-456-7890</PhoneNumber>
      </TextWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-color: #e6e6e6;
  border: 1px solid transparent;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 200px;
`

export const PhoneNumber = styled.p`
  color: #EC4A34;
  font-size: 13px;
`

export default CallUs;