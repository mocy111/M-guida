import './App.css';
import Error from "./pages/Error"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SimgleRoom from "./pages/SimgleRoom"
import {Route , Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>

      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/rooms/">
        <Rooms/>  
      </Route>
      <Route exact path="/rooms/:slug" component={SimgleRoom}/>
      <Route >
        <Error/>
      </Route>
   
    </Switch>
    
    </>
  );
}

export default App;
