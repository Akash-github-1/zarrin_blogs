import logo from './logo.svg';
import './App.css';
import Button from './Component/Common/Button.jsx';
import Paragraph from './Component/Common/Paragraph.jsx';
import Heading from './Component/Common/Heading.jsx';
import Image from './Component/Common/Image.jsx'; 
import Navbar from './Component/Main Component/Navbar.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './Component/Pages/Blog.jsx';
import About from './Component/Pages/About.jsx';
import Contact from './Component/Pages/Contact.jsx';
import Home from './Component/Pages/Home.jsx';





function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

      
    </>
  );
}

export default App;


