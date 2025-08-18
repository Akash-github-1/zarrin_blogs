

import './App.css';
import Navbar from './Component/Main Component/Navbar.jsx';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Footer from './Component/Main Component/Footer.jsx';
import Usercomponent from './Component/Common/Usercontact.jsx'
import Error from './Component/Main Component/Error.jsx';
import Signup from './Component/Common/Signup.jsx';
import SingleBlogPage from './Component/Main Component/SingleBlog.jsx'
import Login from './Component/Common/Loginpage.jsx';
import Dashboard from './Component/Main Component/Dashboard.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import AuthenticatedLayout from './Component/AuthenticatedLayout.jsx';
import Posts from './Component/Main Component/Posts.jsx';
import MyBlogs from './Component/Main Component/MyBlogs.jsx';
import Categories from './Component/Main Component/Categories.jsx';


function AppWrapper() {
  const location = useLocation();
  const hideFooterAndUser = location.pathname.startsWith("/dashboard");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/*" element={<Error />} />
        <Route path='/dashboard' element={<AuthenticatedLayout />}>
          <Route path='/dashboard/analytics' element={<Dashboard />} />
          <Route path='/dashboard/posts' element={<Posts />} />
          <Route path='/dashboard/myblogs' element={<MyBlogs />} />
          <Route path='/dashboard/categories' element={<Categories />} />
        </Route>
      </Routes>

      {!hideFooterAndUser && <Usercomponent />}
      {!hideFooterAndUser && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
