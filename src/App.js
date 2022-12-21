import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return <Router>
  <nav>
    <Link to = "/About" className='link'>ABOUT</Link>
    <Link to = "/" className='link'>HOME</Link>
    <Link to = "/Contact" className='link'>CONTACT</Link>
  </nav>
  <Routes>
    <Route path="/About" element={<About/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
  </Routes>
</Router>

}

export default App;
