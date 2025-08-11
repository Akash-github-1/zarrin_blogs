// import React from 'react'
// const Profiledashborad = () => {
  

  
//   return (
//     <div>Profiledashborad
//       <div className='w-full h-5 bg-tertiary border-r-dark  border ' 
//       > 
//       <div>
//         </div></div>

//       <div> this would a sidebar for my dashborad page </div>
// <div>
//   this area would be consider as my main page 

// </div >
// <div>
//  this div will for the uploading the blog pages 
// </div>
//     </div>
//   )
// }

// export default Profiledashborad




// import React, { useState } from "react";
// import { FiMenu, FiSettings, FiUser, FiImage, FiHeart, FiMessageSquare } from "react-icons/fi";

// export default function ProfileDashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [blogs, setBlogs] = useState([
//     {
//       id: 1,
//       title: "My First Blog",
//       desc: "This is a summary of my first blog post.",
//       img: "https://source.unsplash.com/random/200x120?sig=1",
//       likes: 10,
//       comments: 4,
//     },
//     {
//       id: 2,
//       title: "React and Tailwind",
//       desc: "How to build a responsive UI with React and Tailwind CSS.",
//       img: "https://source.unsplash.com/random/200x120?sig=2",
//       likes: 15,
//       comments: 6,
//     },
//     {
//       id: 3,
//       title: "Tips for Blogging",
//       desc: "Some quick tips to improve your blogging skills.",
//       img: "https://source.unsplash.com/random/200x120?sig=3",
//       likes: 8,
//       comments: 3,
//     },
//   ]);

//   const [newBlog, setNewBlog] = useState({
//     title: "",
//     desc: "",
//     img: "",
//   });

//   const handleAddBlog = () => {
//     if (newBlog.title && newBlog.desc && newBlog.img) {
//       setBlogs((prev) => [
//         ...prev,
//         { id: Date.now(), ...newBlog, likes: 0, comments: 0 },
//       ]);
//       setNewBlog({ title: "", desc: "", img: "" });
//     } else {
//       alert("Please fill all fields");
//     }
//   };

//   const handleDeleteBlog = (id) => {
//     setBlogs((prev) => prev.filter((b) => b.id !== id));
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar toggle button */}
//       <button
//         className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md md:hidden"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         aria-label="Toggle sidebar"
//       >
//         <FiMenu size={24} />
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex-shrink-0`}
//       >
//         <div className="p-6 border-b flex items-center space-x-3">
//           {/* Logo */}
//           <FiUser size={32} className="text-blue-600" />
//           <h2 className="text-xl font-bold">My Profile</h2>
//         </div>
//         <nav className="p-6 space-y-6">
//           <button className="flex items-center space-x-3 hover:text-blue-600">
//             <FiUser />
//             <span>Update Profile</span>
//           </button>
//           <button className="flex items-center space-x-3 hover:text-blue-600">
//             <FiSettings />
//             <span>Settings</span>
//           </button>
//           <button className="flex items-center space-x-3 hover:text-blue-600">
//             <FiImage />
//             <span>Media</span>
//           </button>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 flex flex-col p-6 md:ml-64">
//         <header className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
//           <div className="hidden md:flex items-center space-x-4">
//             <FiUser size={28} className="text-blue-600" />
//             <span className="font-medium">Welcome, Blogger!</span>
//           </div>
//         </header>

//         <div className="flex flex-col md:flex-row gap-6 flex-1">
//           {/* Blog add/delete form */}
//           <section className="flex-1 bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-semibold mb-4">Add New Blog</h2>
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="w-full border rounded px-3 py-2"
//                 value={newBlog.title}
//                 onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
//               />
//               <input
//                 type="text"
//                 placeholder="Image URL"
//                 className="w-full border rounded px-3 py-2"
//                 value={newBlog.img}
//                 onChange={(e) => setNewBlog({ ...newBlog, img: e.target.value })}
//               />
//               <textarea
//                 placeholder="Description"
//                 rows={3}
//                 className="w-full border rounded px-3 py-2 resize-none"
//                 value={newBlog.desc}
//                 onChange={(e) => setNewBlog({ ...newBlog, desc: e.target.value })}
//               />
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 onClick={handleAddBlog}
//               >
//                 Add Blog
//               </button>
//             </div>
//           </section>

//           {/* Scrollable cards container */}
//           <section className="w-full md:w-96 h-80 bg-white rounded-lg shadow p-4 overflow-y-auto">
//             <h2 className="text-xl font-semibold mb-4">Latest Blogs</h2>
//             <div className="space-y-4">
//               {blogs.map((blog) => (
//                 <div key={blog.id} className="flex border rounded shadow-sm overflow-hidden">
//                   <img
//                     src={blog.img}
//                     alt={blog.title}
//                     className="w-24 h-24 object-cover"
//                   />
//                   <div className="flex flex-col flex-1 p-3">
//                     <h3 className="font-semibold text-lg">{blog.title}</h3>
//                     <p className="text-gray-600 text-sm line-clamp-2">{blog.desc}</p>
//                     <div className="mt-auto flex items-center space-x-4 text-gray-500 text-sm">
//                       <div className="flex items-center space-x-1">
//                         <FiHeart />
//                         <span>{blog.likes}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <FiMessageSquare />
//                         <span>{blog.comments}</span>
//                       </div>
//                       <button
//                         onClick={() => handleDeleteBlog(blog.id)}
//                         className="ml-auto text-red-500 hover:underline text-xs"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }






import React, { useState } from "react";
import {
  FiMenu,
  FiSettings,
  FiUser,
  FiImage,
  FiHeart,
  FiMessageSquare,
  FiX,
  FiLogOut,
  FiLock,
  FiGlobe,
} from "react-icons/fi";

export default function ProfileDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profilePublic, setProfilePublic] = useState(true);

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My First Blog",
      desc: "This is a summary of my first blog post.",
      img: "https://source.unsplash.com/random/200x120?sig=1",
      likes: 10,
      comments: 4,
    },
    {
      id: 2,
      title: "React and Tailwind",
      desc: "How to build a responsive UI with React and Tailwind CSS.",
      img: "https://source.unsplash.com/random/200x120?sig=2",
      likes: 15,
      comments: 6,
    },
    {
      id: 3,
      title: "Tips for Blogging",
      desc: "Some quick tips to improve your blogging skills.",
      img: "https://source.unsplash.com/random/200x120?sig=3",
      likes: 8,
      comments: 3,
    },
  ]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    desc: "",
    img: "",
  });

  const handleAddBlog = () => {
    if (newBlog.title && newBlog.desc && newBlog.img) {
      setBlogs((prev) => [
        ...prev,
        { id: Date.now(), ...newBlog, likes: 0, comments: 0 },
      ]);
      setNewBlog({ title: "", desc: "", img: "" });
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDeleteBlog = (id) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar toggle button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md md:hidden"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          } md:translate-x-0 md:static md:flex-shrink-0`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <FiUser size={32} className="text-blue-600" />
            <h2 className="text-xl font-bold">My Profile</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-600 hover:text-gray-900"
            aria-label="Close sidebar"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* User Details */}
        <section className="p-6 border-b space-y-2">
          <h3 className="text-lg font-semibold">User Details</h3>
          <p><strong>Name:</strong> Avneesh Kumar</p>
          <p><strong>Email:</strong> avneesh@example.com</p>
          <p><strong>Member since:</strong> 2024</p>
        </section>

        {/* Navigation */}
        <nav className="p-6 space-y-6">
          <button className="flex items-center space-x-3 hover:text-blue-600 w-full text-left">
            <FiUser />
            <span>Update Profile</span>
          </button>
          <button className="flex items-center space-x-3 hover:text-blue-600 w-full text-left">
            <FiSettings />
            <span>Settings</span>
          </button>
          <button className="flex items-center space-x-3 hover:text-blue-600 w-full text-left">
            <FiImage />
            <span>Media</span>
          </button>
          <button className="flex items-center space-x-3 hover:text-red-600 w-full text-left">
            <FiLogOut />
            <span>Logout</span>
          </button>
        </nav>

        {/* Settings Section */}
        <section className="p-6 border-t space-y-4">
          <h3 className="text-lg font-semibold">Settings</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FiGlobe />
              <span>Profile Public</span>
            </div>
            <input
              type="checkbox"
              checked={profilePublic}
              onChange={() => setProfilePublic(!profilePublic)}
              className="toggle-checkbox"
              aria-label="Toggle profile public/private"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FiLock />
              <span>Enable Two-Factor Auth</span>
            </div>
            <input type="checkbox" className="toggle-checkbox" />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Save Settings
          </button>
        </section>
      </aside>

      {/* Overlay for sidebar on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col p-6 md:ml-72 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="hidden md:flex items-center space-x-4">
            <FiUser size={28} className="text-blue-600" />
            <span className="font-medium">Welcome, Avneesh!</span>
          </div>
        </header>

        {/* Latest blogs */}
        <section className="w-full md:w-full h-80 bg-white rounded-lg shadow p-4 overflow-y-auto mb-6">
          <h2 className="text-xl font-semibold mb-4">Latest Blogs</h2>
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex border rounded shadow-sm overflow-hidden"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex flex-col flex-1 p-3">
                  <h3 className="font-semibold text-lg">{blog.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{blog.desc}</p>
                  <div className="mt-auto flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center space-x-1">
                      <FiHeart />
                      <span>{blog.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMessageSquare />
                      <span>{blog.comments}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="ml-auto text-red-500 hover:underline text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add new blog form below latest blogs */}
        <section className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Add New Blog</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full border rounded px-3 py-2"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full border rounded px-3 py-2"
              value={newBlog.img}
              onChange={(e) => setNewBlog({ ...newBlog, img: e.target.value })}
            />
            <textarea
              placeholder="Description"
              rows={3}
              className="w-full border rounded px-3 py-2 resize-none"
              value={newBlog.desc}
              onChange={(e) => setNewBlog({ ...newBlog, desc: e.target.value })}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleAddBlog}
            >
              Add Blog
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
