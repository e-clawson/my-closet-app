import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <div> 
      <Wrapper>
        <h2>Homepage</h2>
     </Wrapper>
     <Wrapper>
        <h3> This is the Homepage When you're logged in you will see a
            List of outfits here and a list of collections here.</h3>
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