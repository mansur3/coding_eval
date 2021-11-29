
import './App.css';
import {Link, Switch, Route} from "react-router-dom";
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { About } from './Components/About';
import { News } from './Components/News';



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
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/about">
            <About />
          </Route>
          <Route path = "/news">
          <News />
          </Route>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
