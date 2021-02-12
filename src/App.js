import React from 'react';

import './App.css';
import home from  "./pages/home.js";
import room from  "./pages/room.js";
import error from  "./pages/error.js";
import singleRoom from  "./pages/singleRoom.js";
import {Route , Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return ( <>
  <Navbar/>
<Switch>
<Route exact path="/" component={home} />
<Route exact path="/room/" component={room} />
<Route exact path="/room/:slug" component={singleRoom} />
<Route component={error} />
</Switch>

   </>
  );
}

export default App;
