"use client";
import Image from "next/image";
import { useState } from "react";

export default function FreshVegetables() {
  const [comment, setComment] = useState(""); // Store the current comment input
  const [name, setName] = useState(""); // Store the user's name
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  ); // Store submitted comments

  // Handle name input change
  const handleNameChange = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  // Handle comment input change
  const handleCommentChange = (e: { target: { value: string } }) => {
    setComment(e.target.value);
  };

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (comment.trim() && name.trim()) {
      // Add the comment to the comments list with the name
      setComments([...comments, { name, comment }]);
      setComment(""); // Clear the comment input field after submission
      setName(""); // Clear the name input field after submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Everest Camp Trek
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/image/walking.jpg" // Ensure the image is in the public/images directory
            alt="Walking Holidays"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Join us for a unique and unforgettable experience as you explore
            scenic landscapes on foot. This walking holiday offers a chance to
            immerse yourself in nature, trekking through quiet villages and lush
            forests, while witnessing breathtaking views of mountains, valleys,
            and rivers. Whether you&rsquo;re walking along peaceful trails or
            venturing into remote areas, each step brings you closer to the
            beauty of the natural world, making it the perfect escape for
            adventure lovers and those seeking serenity.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Leave a Comment &mdash; December 24, 2024
          </p>

          {/* Name Input Section */}
          <div className="mt-4">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md"
            />
          </div>

          {/* Comment Section */}
          <div className="mt-6 relative">
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
          {comments.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">Comments:</h3>
              <ul className="space-y-4">
                {comments.map((commentData, index) => (
                  <li key={index} className="bg-gray-100 p-4 rounded-md">
                    <p className="font-bold text-gray-800">
                      {commentData.name}
                    </p>
                    <p className="text-gray-600">{commentData.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
