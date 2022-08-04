import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import Notification from "./Notification";
// import About from "./About";
import Home from "./Home";
import Login from "./user/Login";
import Logout from "./user/Logout";
import Profile from "./user/Profile";
import Signup from "./user/Signup";
// import ItemForm from "./items/NewItemForm";
// import { GoogleOAuthProvider } from '@react-oauth/google';
import OutfitContainer from "../containers/OutfitContainer"
import OutfitForm from "./outfits/OutfitForm";
import OutfitList from "./outfits/OutfitList";
import NewItemForm2 from "./items/NewItemForm2";
import OutfitItemContainer from "../containers/OutfitItemContainer"
import ItemCard from "./items/ItemCard";
import ItemContainer from "../containers/ItemContainer";
import OutfitPage from "./outfits/OutfitPage";
import Outfits from "./outfits/Outfits";


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
          <Switch>
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
              <NewItemForm2 />
            </Route>
            <Route path="/outfits">
              <Outfits />
            </Route>
            <Route path="/:oufit_id/outfitItems">
              <OutfitPage />
            </Route>
            <Route path="/newoutfit">
              <OutfitForm />
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