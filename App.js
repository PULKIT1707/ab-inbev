import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import { BrowserRouter, Switch ,Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomePage />}>
          </Route>
          <Route path="/login" element= {<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
