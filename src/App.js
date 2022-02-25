import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './components/Acuueil';

function App() {
  return (
    <>
    <div className="app"  style={{ backgroundColor: "#E8E4C9"}}>
    <Navbar/>
    {/* <Header/>  */}
      <Routes>
        <Route index path='/' element={<Accueil/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    
    </div>
    </>
  );
}

export default App;
