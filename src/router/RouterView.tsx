import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../pages/login/login'
import ChatRoom from '../pages/chatRoom/chatRoom';

function RouterView() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/chatRoom">
                <ChatRoom/>
            </Route>
            <Route path="/">
                <Login/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouterView;
