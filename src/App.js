import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from './components/Home/Home';
import Hajj from './components/Hajj/Hajj';
import Flight from './components/Flight/Flight';
import Hotels from './components/Hotels/Hotels';
import Visa from './components/Visa/Visa';
import Tours from './components/Tours/Tours';
import Buses from './components/Buses/Buses';
import Trains from './components/Trains/Trains';
import About from './components/About/About';
import Policy from './components/Policy/Policy';
import Terms from './components/Policy/Terms';
import Faq from './components/Faq/Faq';
import UserLogin from './components/Login/UserLogin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hajj/>} />
        <Route path="/hajj" element={<Hajj/>} />
        <Route path="/flights" element={<Flight/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/visa" element={<Visa/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/buses" element={<Buses/>} />
        <Route path="/trains" element={<Trains/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/login" element={<UserLogin/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
