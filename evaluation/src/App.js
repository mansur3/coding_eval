
import './App.css';
import {Link, Switch, Route} from "react-router-dom";
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { About } from './Components/About';
import { News } from './Components/News';
import {Show} from "./Components/Show";
import {Confirm} from "./Components/confirm";


function App() {
  return (
    <div className="App">
      <div style = {{height: "40px", backgroundColor: "gray"}}>
        <Link style = {{marginLeft : "30px", fontWeight: "bolder", fontSize: "30px", color: "white" }} to = "/">HOME</Link>
        <Link style = {{marginLeft : "30px", fontWeight: "bolder", fontSize: "30px", color: "white" }} to = "/login">LOGIN</Link>
        <Link style = {{marginLeft : "30px", fontWeight: "bolder", fontSize: "30px", color: "white" }} to = "/about">ABOUT</Link>
        <Link style = {{marginLeft : "30px", fontWeight: "bolder", fontSize: "30px", color: "white" }} to = "/news">NEWS</Link>


        
      </div>
      <div>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/login">
            <Login />
          </Route>
          <Route exact path = "/about">
            <About />
          </Route>
          <Route exact path = "/news">
          <News />
          </Route>
          <Route exact path = "/:movie/:id">
              <Show />
          </Route>
          <Route exact path = "/:event/:id">
              <Show />
          </Route>
          <Route exact path = "/:play/:id">
              <Show />
          </Route>
          <Route exact path = "/ask">
              <Confirm />
          </Route>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
