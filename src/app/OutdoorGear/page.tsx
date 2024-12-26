"use client";
import Image from "next/image";
import { useState } from "react";

export default function FreshVegetables() {
  const [name, setName] = useState(""); // State for the user's name
  const [comment, setComment] = useState(""); // State for the comment
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]); // State to store multiple comments with names

  const handleNameChange = (e: { target: { value: string } }) => {
    setName(e.target.value); // Update the name state when the user types in the name input
  };

  const handleCommentChange = (e: { target: { value: string } }) => {
    setComment(e.target.value); // Update the comment state when the user types in the comment textarea
  };

  const handleCommentSubmit = () => {
    if (name.trim() !== "" && comment.trim() !== "") {
      // If both name and comment are not empty, submit the comment
      setComments([...comments, { name, comment }]); // Add new comment along with the user's name
      setName(""); // Clear the name input field
      setComment(""); // Clear the comment input field
    }
  };

  const handleCommentRemove = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index); // Remove the comment at the specified index
    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            The Best Outdoor Adventure Gear
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/image/woman.jpeg" // Ensure the image is in the public/images directory
            alt="National Parks"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Gear up for your next adventure with the best equipment. From
            backpacks to hiking boots, discover the top-rated outdoor gear that
            will enhance your experience in the wild. Whether you are a seasoned
            explorer or a first-time adventurer, having the right gear is
            crucial for comfort, safety, and enjoyment. A durable, spacious
            backpack will help you carry all your essentials with ease, while
            high-performance hiking boots provide the stability and grip needed
            for diverse terrains. Additionally, lightweight tents, versatile
            clothing, and portable cooking equipment are key to ensuring your
            adventure is both smooth and memorable. With the right gear, you will
            be prepared to tackle any challenge the outdoors throws your way.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Leave a Comment &mdash; December 24, 2024
          </p>
          <div className="mt-6">
            {/* Name Input */}
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md mb-4"
            />
            {/* Comment Textarea */}
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Leave a comment..."
              className="w-full h-16 p-4 border border-gray-300 rounded-md resize-none"
            ></textarea>
            <button
              onClick={handleCommentSubmit}
              className="mt-2 bg-blue-500 text-white py-2 px-6 rounded-md"
            >
              Submit Comment
            </button>
          </div>

          {/* Display Comments */}
          <div className="mt-6">
            {comments.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-800">Comments:</h3>
                <ul className="mt-4 space-y-4">
                  {comments.map((commentData, index) => (
                    <li
                      key={index}
                      className="bg-gray-200 p-4 rounded-md flex justify-between items-center"
                    >
                      <div>
                        <span className="font-bold text-gray-800">
                          {commentData.name}
                        </span>
                        <p className="text-gray-600">{commentData.comment}</p>
                      </div>
                      <button
                        onClick={() => handleCommentRemove(index)}
                        className="text-red-500 font-bold"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
