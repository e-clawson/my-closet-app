import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import Notification from "./Notification";
import About from "./About";
import Home from "./Home";
import Login from "./user/Login";


function App() {
  const {getCurrentUser, user} = useContext(UserContext)
  
  useEffect(() => {
        getCurrentUser()
  }, [])

  return (
    <div className="App">
      <Router>
        <Notification/>
        <NavBar />
        <Header slogan="Organize your closet!"/>
          <Switch>
            <Route path="/about">
              <About /> 
            </Route>
            <Route path="/login">
             <Login /> 
            </Route>
            <Route path="/logout">
              {/* <Logout />  */}
            </Route>
            <Route path="/profile">
              {/* <Profile />  */}
            </Route>
            <Route path="/signup">
              {/* <SignUpForm /> */}
            </Route>
            <Route path="/newprompt">
              {/* <PromptForm /> */}
            </Route>
            <Route path="/newstory">
              {/* <StoryForm /> */}
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;