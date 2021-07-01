import logo from './logo.svg';
import './App.css';
import Post from './Components/Posts/Post';
import Profile from './Components/Profile/Profile';
import User from './Components/User/User';
import UserDetails from './Components/User/UserDetails';
import PostDetailsComment from './Components/Posts/PostDetailsComment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import { createContext, useState } from 'react';

export const UserContext = createContext()
function App() {
  const [userInfo, setUserInfo] = useState([])
  console.log(userInfo)
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <div>
          <NavBar/>
          <Switch>

            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/user">
              <User/>
            </Route>
            <Route path="/userDetails/:id">
              <UserDetails/>
            </Route>
            <Route path="/:id">
              <PostDetailsComment/>
            </Route>
            <Route path="/">
              <Post />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
