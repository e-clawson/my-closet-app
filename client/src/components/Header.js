import React from 'react'
// import styled from "styled-components";

const Header = ({storename, slogan}) => {
  return (
      <div>
        <h1> {storename} </h1>
        <h2> {slogan} </h2>
      </div>
  )
}

// const Wrapper = styled.header`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
// `;

export default Header;