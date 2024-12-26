"use client";
import Image from "next/image";
import { useState } from "react";

export default function FreshVegetables() {
  const [name, setName] = useState(""); // State to store the user's name
  const [comment, setComment] = useState(""); // State to store the comment
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]); // State to store the list of comments

  const handleNameChange = (e: { target: { value: string } }) => {
    setName(e.target.value); // Update the name state
  };

  const handleCommentChange = (e: { target: { value: string } }) => {
    setComment(e.target.value); // Update the comment state
  };

  const handleCommentSubmit = () => {
    if (name.trim() !== "" && comment.trim() !== "") {
      // Add a new comment only if name and comment are not empty
      setComments([...comments, { name, comment }]); // Add new comment with name
      setName(""); // Clear the name input
      setComment(""); // Clear the comment input
    }
  };

  const handleCommentRemove = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index); // Remove the comment at the specified index
    setComments(updatedComments); // Update the comment list
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Ultimate Hiking Trails Across the World
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/image/men.PNG" // Ensure the image is in the public/images directory
            alt="Hiking Trails"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Discover the best hiking trails across the globe, from the
            challenging terrains of the Alps to the breathtaking views of the
            Grand Canyon. Whether you&apos;re scaling the rugged peaks of the Swiss
            Alps or trekking through the majestic landscapes of Patagonia, each
            trail offers something extraordinary. Experience the dramatic cliffs
            of the Grand Canyon, the serene beauty of New Zealand&rsquo;s Milford
            Track, or the diverse ecosystems of the Inca Trail to Machu Picchu.
            These trails provide the perfect balance of adventure, natural
            beauty, and endurance, taking you through dense forests, across vast
            mountain ranges, and along winding rivers. Get ready to challenge
            your physical limits while immersing yourself in nature&rsquo;s wonders!
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Leave a Comment &mdash; December 24, 2024
          </p>

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
