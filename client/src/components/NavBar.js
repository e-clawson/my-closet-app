import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button"
import { UserContext } from "../context/user";
import Header from "./Header";

const NavBar = () => {
  const {user} = useContext(UserContext)

  return (
   <>
      <Logo>
        <Link to="/"> My Closet App </Link>
      </Logo>
      <Header slogan="Organize your closet!"/>
      <br/>
      <Wrapper>
      <Nav>
        <Button as={Link} to="/">
         Home
        </Button>
        {user ? (
          <>
            <Button as={Link} to="/profile">
              My Profile
            </Button>

            <Button as={Link} to="/newitem">
              New Item
            </Button>

            <Button as={Link} to="/newoutfit">
              New Outfit
            </Button>

            {/* <Button as={Link} to="/newoutfit">
              New Collection
            </Button> */}

            <Button as={Link} to="/outfits">
              My Outfits
            </Button>

            {/* <Button as={Link} to="/collections">
              My Collections
            </Button> */}

            <Button as={Link} to="/logout">
              Logout
            </Button>
          </>
          ) : (
            <>
              <Button as={Link} to="/login">
              Login
              </Button>

              <Button as={Link} to="/signup">
              Signup
              </Button>
            </>
          )
        }
      </Nav>
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

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 3rem;
  color: purple;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  right: 8px;
`;

export default NavBar;