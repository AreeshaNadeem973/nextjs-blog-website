"use client";
import Image from "next/image";
import { useState } from "react";

export default function FreshVegetables() {
  // States to store user name, comment, and all comments
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);

  // Handle name input change
  const handleNameChange = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  // Handle comment input change
  const handleCommentChange = (e: { target: { value: string } }) => {
    setComment(e.target.value);
  };

  // Submit comment
  const handleCommentSubmit = () => {
    if (name.trim() !== "" && comment.trim() !== "") {
      setComments([...comments, { name, comment }]);
      setName(""); // Clear name field
      setComment(""); // Clear comment field
    }
  };

  // Remove a comment by its index
  const handleCommentRemove = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Top Kayaking Spots You Need to Visit
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/image/water-sports-04.jpg" // Ensure the image is in the public/images directory
            alt="Kayaking Spots"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Whether you&apos;re a seasoned kayaker or a beginner, these stunning
            kayaking destinations will leave you in awe. Paddle through
            crystal-clear waters and enjoy the tranquility of nature. From the
            serene beauty of Lake Louise in Canada to the dramatic cliffs of New
            Zealand&apos;s Fiordland National Park, there&apos;s something for everyone.
            Explore hidden coves in Hawaii, venture into the mysterious caves of
            Vietnam&apos;s Halong Bay, or glide through the stunning fjords of
            Norway. Each destination offers unique experiences, making it the
            perfect escape for anyone looking to combine adventure with the
            peace of nature.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Leave a Comment &mdash; December 24, 2024
          </p>

          {/* Name input */}
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
