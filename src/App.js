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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hajj" element={<Hajj/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
