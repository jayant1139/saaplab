import './App.css';
import { Redirect, Route,Switch } from 'react-router';
import Home from './Components/Home';
import Research from './Components/Research';
import Publications from './Components/Publications';
import Team from './Components/Team';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Switch>
   <Route exact path="/" component={Home}/>
     <Route exact path="/Research" component={Research}/>
     <Route exact path="/Publications" component={Publications}/>
     <Route exact path="/Team" component={Team}/>
     <Route exact path="/Gallery" component={Gallery}/>
     <Route exact path="/Contact" component={Contact}/>
     
     <Redirect to="/"/>
     
   </Switch>
   <Footer/>

</>
  );
}

export default App;
