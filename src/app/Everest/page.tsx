"use client";
import Image from "next/image";
import { useState } from "react";

export default function FreshVegetables() {
  const [name, setName] = useState(""); // Manage name input
  const [comment, setComment] = useState(""); // Manage comment input
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]); // Store submitted comments

  // Handle name input change
  const handleNameChange = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  // Handle comment input change
  const handleCommentChange = (e: { target: { value: string } }) => {
    setComment(e.target.value);
  };

  // Submit comment and name
  const handleCommentSubmit = () => {
    if (name.trim() !== "" && comment.trim() !== "") {
      setComments([...comments, { name, comment }]);
      setName(""); // Clear the name input
      setComment(""); // Clear the comment input
    }
  };

  // Remove a specific comment
  const handleCommentRemove = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">Everest Camp Trek</h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/image/hiking.jpg" // Ensure the image is in the public/images directory
            alt="Everest Camp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Embark on the adventure of a lifetime with the Everest Base Camp Trek, where you&apos;ll witness breathtaking views of the world&apos;s highest peak. Explore vibrant Sherpa villages, ancient monasteries, and the stunning beauty of the Himalayas on this unforgettable journey. Along the way, you&apos;ll be immersed in the rich culture and traditions of the Sherpa people, trek through lush forests and high-altitude landscapes, and experience the serenity and majesty of the mountains. Reaching Everest Base Camp itself is a once-in-a-lifetime achievement, offering panoramic vistas of snow-capped peaks that will leave you in awe.
          </p>
          <p className="text-sm text-gray-500 mt-4">Leave a Comment &mdash; December 24, 2024</p>

          {/* Name Input */}
          <div className="mt-6">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md mb-4"
            />
          </div>

          {/* Comment Textarea */}
          <div className="relative">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Leave a comment..."
              className="w-full h-16 p-4 border border-gray-300 rounded-md resize-none"
            ></textarea>
            {comment && (
              <button
                onClick={() => setComment("")}
                className="absolute top-2 right-2 text-xl text-red-500"
              >
                ×
              </button>
            )}
            <button
              onClick={handleCommentSubmit}
              className="mt-2 bg-blue-500 text-white py-2 px-6 rounded-md"
            >
              Submit Comment
            </button>
          </div>

          {/* Display Submitted Comments */}
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
                        <span className="font-bold text-gray-800">{commentData.name}</span>
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
