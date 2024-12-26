"use client";
import Image from "next/image";
import { useState } from "react";

export default function FreshVegetables() {
  // States to manage user name, comment, and list of comments
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

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (name.trim() !== "" && comment.trim() !== "") {
      setComments([...comments, { name, comment }]);
      setName(""); // Clear name field
      setComment(""); // Clear comment field
    }
  };

  // Remove a comment by index
  const handleCommentRemove = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Exploring National Parks in the US
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/image/park.PNG" // Ensure the image is in the public/images directory
            alt="National Parks"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            The United States is home to some of the most breathtaking national
            parks, each offering unique landscapes and outdoor experiences.
            Yellowstone National Park, the first in the world, is renowned for
            its geothermal wonders, including the iconic Old Faithful geyser, as
            well as diverse wildlife and rugged terrains. Yosemite National
            Park, famous for its towering granite cliffs, serene meadows, and
            stunning waterfalls, provides endless opportunities for hiking, rock
            climbing, and photography. Meanwhile, the Great Smoky Mountains,
            straddling the border of North Carolina and Tennessee, boast
            mist-covered peaks, lush forests, and rich biodiversity, making it a
            haven for nature lovers and adventurers alike. These parks offer
            unparalleled natural beauty, making them must-visit destinations for
            anyone seeking to explore America&apos;s wild heart.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Leave a Comment &mdash; December 24, 2024
          </p>

          {/* Name Input Field */}
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
