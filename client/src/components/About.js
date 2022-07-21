import styled from "styled-components";

const About = () => {
    return (
      <div>
        <Wrapper>
        <h1>About MyCloset App</h1>
        </Wrapper>
        <Wrapper>
          <p>Designed to save you from asking, "what should I wear today?" and "I don't have any good outfits!" 
            With My Closet App, you can upload pictures of clothing items, jewelry, and accessories from 
            your own closet and orgnize these into outfits! Then you can add these outfits into collections by type
             - you choose the type (for example, "work wear," "summer outfits," "fancy outfits," etc.")</p>
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
  
  
  export default About;