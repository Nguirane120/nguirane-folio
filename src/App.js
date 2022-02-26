import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './components/Acuueil';
import WerDetail from './components/portfolio/WerDetail';
import Work from './components/portfolio';
import Shop from './components/portfolio/Shop';
import Learn from './components/Learn';
import Footer from './components/Footer';

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
        <Route path='/work' element={<Work/>}/>
        <Route path="/wer-project" element={<WerDetail/>}/>
        <Route path="/shop-project" element={<Shop/>}/>
        <Route path="/e-learning-project" element={<Learn/>}/>
      </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;
