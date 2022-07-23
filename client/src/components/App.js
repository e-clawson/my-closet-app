import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
// import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import Notification from "./Notification";
import About from "./About";
import Home from "./Home";
import Login from "./user/Login";
import Logout from "./user/Logout";
import Profile from "./user/Profile";
import Signup from "./user/Signup";
import ItemForm from "./items/NewItemForm";


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
              <Logout /> 
            </Route>
            <Route path="/profile">
              <Profile /> 
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/newitem">
              <ItemForm />
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