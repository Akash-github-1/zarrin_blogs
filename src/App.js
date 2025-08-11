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
import Signup from './Component/Common/Signup.jsx';
import SingleBlogPage from './Component/Main Component/SingleBlog.jsx'
import Login from './Component/Common/Loginpage.jsx';
import Dashboard from './Component/Main Component/Dashboard.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/*" element={<Error/>} />
        <Route path='/dashboard' />
      </Routes>
      <Usercomponent/>
      <Dashboard/>
      <Footer/>
    </BrowserRouter>
     </>
  );
}

export default App;


