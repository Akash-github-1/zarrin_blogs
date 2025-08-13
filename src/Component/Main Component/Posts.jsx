
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Headings from "../Common/Heading";
import Paragraph from "../Common/Paragraph";
import Button from "../Common/Button";
import Image from "../Common/Image";
import { X } from "lucide-react"; 

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState(["Tech", "Lifestyle", "Travel"]);
  const [images, setImages] = useState([]);
  const [shortDesc, setShortDesc] = useState("");
  const [content, setContent] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...filePreviews]);
  };

  const handleDeleteImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePreview = () => {
    setPreviewMode(!previewMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      category,
      images,
      shortDesc,
      content,
    };
    console.log("Form submitted:", formData);
    alert("Blog submitted successfully!");
  };

  return (
    <div className="p-6 bg-tertiary rounded-lg shadow-md max-w-6xl w-full mx-auto mt-6">
      {!previewMode ? (
        <form onSubmit={handleSubmit}>
          <Headings type="h5" className="font-bold mb-4">
            Add New Blog
          </Headings>

          <label className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-secondaryGray rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

          <label className="block mb-2 font-semibold">Category</label>
          <div className="flex gap-2 mb-4 flex-wrap w-full">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 border border-secondaryGray rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Add new category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="flex-1 border border-secondaryGray rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              variant="primary"
              onClick={handleAddCategory}
              type="button"
              className="hover:bg-secondaryGray px-4 rounded-lg"
            >
              Add
            </Button>
          </div>

          <label className="block mb-2 font-semibold">Upload Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="mb-4 w-full"
          />
          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative border rounded-lg overflow-hidden"
                >
                  <Image
                    src={img.preview}
                    alt={`Preview ${index}`}
                    className="w-full h-40 object-cover"
                  />
                  <Button
                    variant="dark"
                    onClick={() => handleDeleteImage(index)}
                    type="button"
                    className="absolute top-1 right-1 text-xs px-2 py-1 rounded flex items-center justify-center"
                  >
                    <X size={14} /> 
                  </Button>
                </div>
              ))}
            </div>
          )}

          <label className="block mb-2 font-semibold">Short Description</label>
          <textarea
            placeholder="Write a short description..."
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            className="w-full border border-secondaryGray rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            rows="3"
            required
          ></textarea>

          <label className="block mb-2 font-semibold">Blog Content</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            className="mb-6 w-full"
          />

          <div className="flex justify-between">
            <Button
              variant="primary"
              type="submit"
              className="font-semibold py-2 px-4 rounded-lg"
            >
              Submit
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handlePreview}
              className="font-semibold py-2 px-4 rounded-lg"
            >
              Preview
            </Button>
          </div>
        </form>
      ) : (
        <div>
          <Headings type="h5" className="font-bold mb-2">
            {title}
          </Headings>
          <Paragraph variant="big" className="text-dark mb-4">
            {category}
          </Paragraph>

          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {images.map((img, index) => (
                 <Image 
                    src={Image.preview}
                    alt={`Preview ${index}`}
                    className="w-full h-40 object-cover"
                  />
              ))}
            </div>
          )}

          <Paragraph className="mb-4">{shortDesc}</Paragraph>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>

          <Button
            variant="dark"
            onClick={handlePreview}
            className="mt-4 font-semibold py-2 px-4 rounded-lg"
          >
            Back to Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogForm;
