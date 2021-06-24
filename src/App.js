import React, { useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./components/firebase";
import Whiteboard from "./components/whiteboard";
import BooksPage from "./components/Books/BooksPage";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
          );
        } else {
          dispatch(logout());
        }
        console.log(authUser.email)
      console.log(authUser);
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={user ? Home : Login} />
          <Route path="/whiteboard" component={Whiteboard} />
          <Route path="/books" component={BooksPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
