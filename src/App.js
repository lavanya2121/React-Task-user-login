// import React from 'react'
// import {BrowserRouter,Route,Link} from 'react-router-dom'
// import Login from './components/Login'
// import { mockData } from './mock-data';


// function App(){
//   console.log('mockData', mockData);
//     return(
//         <BrowserRouter>
//         <div>
//              <Link to="/"></Link>

//              <Route link="/" component={Login} exact={true}/>
//              {/* <Route link="/home" component={Home}/> */}
//         </div>
//         </BrowserRouter>
//     )
// }

// export default App

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
// import { requireAuth } from './require-auth';
import { mockData } from './mock-data';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
