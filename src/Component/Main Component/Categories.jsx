import React, { useState } from "react";
import { Trash, X } from "lucide-react";
import Button from '../Common/Button';
import Heading from '../Common/Heading';
import Paragraph from '../Common/Paragraph';

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Technology" },
    { id: 2, name: "Travel" },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { id: Date.now(), name: newCategory }]);
      setNewCategory("");
      setShowCreateForm(false); 
    }
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="p-6 w-full max-w-full">
     
      {!showCreateForm && (
        <Button
          onClick={() => setShowCreateForm(true)}
          className="mb-6 px-4 py-2 bg-primary text-tertiary rounded-lg hover:bg-primary transition"
        >
          Create Category
        </Button>
      )}

      {showCreateForm && (
        <div className="fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-tertiary w-full max-w-lg p-6 rounded-lg shadow-lg relative">
          
            <Button
              onClick={() => setShowCreateForm(false)}
              className="absolute top-3 right-3 text-seconadry hover:text-secondary"
            >
              <X className="w-5 h-5" />
            </Button>

            <Heading type="h5" className=" font-semibold mb-4">Add New Category</Heading>

            <input
              type="text"
              placeholder="Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="block w-full mb-4 p-2 border rounded"
            />

            <div className="flex justify-end gap-3">
              <Button
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 bg-seconadry text-dark rounded-lg hover:bg-secondary"
              >
                Cancel
              </Button>
              <Button
                onClick={addCategory}
                className="px-4 py-2 bg-primary text-tertiary rounded-lg hover:bg-secondary"
              >
                Save Category
              </Button>
            </div>
          </div>
        </div>
      )}

  
      {!showCreateForm && (
        <>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <div
                key={cat.id}
                className="flex justify-between items-center p-4 mb-4 border rounded-lg bg-tertiary shadow-sm"
              >
                <Heading type="h6" className="font-bold">
                   <span className="font-normal">{cat.name}</span>
                </Heading>

                <Button
                  onClick={() => deleteCategory(cat.id)}
                  className="p-2 bg-tertiary hover:bg-secondaryGray rounded"
                  title="Delete"
                >
                  <Trash className="w-5 h-5 text-primary" />
                </Button>
              </div>
            ))
          ) : (
            <Paragraph className="text-secondary">No categories available.</Paragraph>
          )}
        </>
      )}
    </div>
  );
};

export default Categories;