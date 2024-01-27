import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Destinations from './Pages/Destinations';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Ooty from './Pages/Packages/Ooty/Ootypackage';
import Kodaikanal from './Pages/Packages/Kodaikanal/Kodaikanal';
import Valparai from './Pages/Packages/Valparai/Valparai';
import Coorg from './Pages/Packages/Coorg/Coorg';
import Kanyakumari from './Pages/Packages/Kanyakumari/Kanyakumari';
import Spritual from './Pages/Packages/Spritual/Spritual';
import Kerala from './Pages/Packages/Kerala/Kerala';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tour-packages" element={<Destinations/>}>
          
          </Route>  
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/ooty" element={<Ooty/>} />
          <Route path="/kodaikanal" element={<Kodaikanal/>} />
          <Route path="/valparai" element={<Valparai/>} />
          <Route path="/coorg" element={<Coorg/>} />
          <Route path="/kanyakumari" element={<Kanyakumari/>} />
          <Route path="/spritual" element={<Spritual/>} />
          <Route path="/kerala" element={<Kerala/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
