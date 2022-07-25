import React from "react";
import styled from "styled-components";
import About from "./About";

const Home = () => {

  return (
    <div> 
      <Wrapper>
        <h2>Homepage</h2>
     </Wrapper>
     <Wrapper>
      <About />
     </Wrapper>
    </div>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default Home