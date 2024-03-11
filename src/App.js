import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Mainpage from './Pages/Mainpage';
import Watch from './Pages/Watch';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/main' element={<Mainpage></Mainpage>}></Route>
        <Route path='/watch' element={<Watch></Watch>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
