import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FifteenPoints from './pages/FifteenPoints';
import ThirtyPoints from './pages/ThirtyPoints';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={
          <div className="App">
            <Home/>
          </div>}/>
        <Route path='/15-puntos' element={<FifteenPoints/>}/>
        <Route path='/30-puntos' element={<ThirtyPoints/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
