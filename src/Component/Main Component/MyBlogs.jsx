import React, { useState } from "react";
import { Eye, Edit, Trash } from "lucide-react"; 
import Button from "../Common/Button";
import Paragraph from "../Common/Paragraph";
import Headings from "../Common/Heading"; 
import { Link } from "react-router-dom";

const MyBlogs = () => {
  

  const [blogs, setBlogs] = useState([
    { id: 1, title: "React Performance Optimization", category: "Technology" },
    { id: 2, title: "Exploring the Alps", category: "Travel" },
    { id: 3, title: "Healthy Breakfast Recipes", category: "Food" },
  ]);


  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="w-screen mx-auto">
     
      <div className="flex justify-end p-4">
        <Link to={'/dashboard/posts'}><Button variant="primary" text="Create Blogs" /></Link>
      </div>

      <div className="p-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex justify-between items-center p-6 mb-4 border rounded-lg bg-tertiary shadow-sm"
            >
              <div>
                <Headings type="h5" className="font-bold">
                  {blog.title}
                </Headings>
                <Paragraph className="text-secondary text-sm">
                  {blog.category}
                </Paragraph>
              </div>

              <div className="flex gap-3">
                <Button variant="Outline" 
                  className="p-2  hover:bg-secondaryGray rounded"
                  title="Preview"
                >
                  <Eye className="w-5 h-5 " />
                </Button>

                <Button
                  className="p-2     hover:bg-secondaryGray rounded"
                  title="Edit"
                >
                  <Edit className="w-5 h-5 " />
                </Button>

                <Button
                  onClick={() => deleteBlog(blog.id)}
                  className="p-2 hover:bg-secondaryGray"
                  title="Delete"
                >
                  <Trash className="w-5 h-5 " />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <Paragraph className="text-gray">
            No blogs available.
          </Paragraph>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;