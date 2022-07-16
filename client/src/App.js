import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div classname="App">
      <Logo>
        <Link to="/"> AnthologyApp </Link>
      </Logo>
      {/* <Navbar /> */}
      <Header slogan="Organize your outfits!"/>

    </div>
  )
}

export default App;
