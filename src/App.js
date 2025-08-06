import './App.css';
import Navbar from './Component/Main Component/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './Component/Pages/Blog.jsx';
import About from './Component/Pages/About.jsx';
import Contact from './Component/Pages/Contact.jsx';
import Home from './Component/Pages/Home.jsx';
import Footer from './Component/Main Component/Footer.jsx';
import Usercomponent from './Component/Common/Usercontact.jsx'
import Error from './Component/Main Component/Error.jsx';

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
        <Route path="/*" element={<Error/>} />
      </Routes>
      <Usercomponent/>
      <Footer/>
    </BrowserRouter>

      
    </>
  );
}

export default App;


