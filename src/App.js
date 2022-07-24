import './App.css';
import User from './components/User';
import Buttons from './components/Buttons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Buttons />}></Route>
        <Route exact path = "/:id" element = {<User />}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Buttons /> */}
    </div>
  );
}

export default App;
