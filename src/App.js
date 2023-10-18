//1. Import Area

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blog from './Pages/Blog';


//2. Define Area
function App(props) {
   console.log(props.mycolor)
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home mycolor/>}></Route>
          <Route path="/home" element={ <Home/>}></Route>
          <Route path="/contact" element={ <Contact/>}/>
          <Route path="/about" element={ <About/>}/>
          <Route path="/blog" element={ <Blog/>}/>
         
        </Routes>
      </BrowserRouter>
   </>
  );
}


//3. Export Area
export default App;
