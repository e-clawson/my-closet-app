import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <h2>My Closet App </h2> 
      {/* <Navbar /> */}
      <Header slogan="Organize your outfits!"/>

    </div>
  )
}

export default App;
