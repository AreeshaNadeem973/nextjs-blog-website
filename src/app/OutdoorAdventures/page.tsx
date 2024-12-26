"use client";
import Image from "next/image";
import { useState } from "react";

export default function FreshVegetables() {
  const [name, setName] = useState(""); // State to store the name
  const [comment, setComment] = useState(""); // State to store the comment
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]); // State to store comments with names

  const handleNameChange = (e: { target: { value: string } }) => {
    setName(e.target.value); // Update the name state
  };

  const handleCommentChange = (e: { target: { value: string } }) => {
    setComment(e.target.value); // Update the comment state
  };

  const handleCommentSubmit = () => {
    if (name.trim() !== "" && comment.trim() !== "") {
      // Only submit if name and comment are not empty
      setComments([...comments, { name, comment }]); // Add new comment with name
      setName(""); // Clear the name input
      setComment(""); // Clear the comment input
    }
  };

  const handleCommentRemove = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index); // Remove comment at the specified index
    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Outdoor Adventures Await You
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/image/icey.PNG" // Ensure the image is in the public/images directory
            alt="Outdoor Adventures"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Adventure awaits in the great outdoors! From hiking rugged mountain
            trails that test your endurance to kayaking across crystal-clear
            lakes surrounded by breathtaking landscapes, the possibilities for
            exploration are endless. Whether you are scaling the heights of
            towering peaks or traversing dense forests, outdoor activities offer
            the perfect escape from everyday life. These thrilling experiences
            not only bring you closer to nature but also push you to your
            physical and mental limits, helping you build resilience and
            discover new strengths within yourself. Immerse yourself in the
            fresh air, challenge your boundaries, and create memories that will
            last a lifetime.
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
