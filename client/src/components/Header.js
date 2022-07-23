import React from 'react'
import styled from "styled-components";

const Header = ({slogan}) => {
  return (
    <>
      <Wrapper>
        <div>
          <h3> {slogan} </h3>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default Header;