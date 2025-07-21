// components/common/PostModal.tsx
import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId : 1,
    id : 0,
    title: "",
    body: ""

  });

  // Handles changes in form input fields (title, body, userId)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: name === "userId" ? parseInt(value, 10) : value // Convert userId to number
    }));
  };

  // Handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default browser form submission
    onSubmit(post); // Call the onSubmit prop with the current post data
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"> {/* Added z-50 for layering */}
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md mx-4 sm:mx-0"> {/* Added mx-4 sm:mx-0 for better mobile responsiveness */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Post</h2> {/* Increased bottom margin */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 font-medium mb-2">User ID</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required // Make user ID a required field
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
              required // Make title a required field
            />
          </div>
          <div className="mb-6"> {/* Increased bottom margin for textarea */}
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              rows={5} // Increased rows for better input area
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
              required // Make body a required field
            />
          </div>
          <div className="flex justify-end space-x-4"> {/* Changed to justify-end and added space-x */}
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;