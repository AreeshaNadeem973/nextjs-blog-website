import React from "react";
import Image from "next/image"; // Import the Image component
import Hero from "./Hero";

const BlogPosts = () => {
  const blogs = [
    {
      title: "Outdoor Adventures Await You",
      description:
        "Adventure awaits in the great outdoors! From hiking rugged trails to kayaking crystal-clear lakes, explore thrilling outdoor activities that bring you closer to nature and push you to your limits.",
      image: "/image/icey.PNG",
      buttonText: "Read More",
      link: "/OutdoorAdventures", // Add link here
    },
    {
      title: "Ultimate Hiking Trails Across the World",
      description:
        "Discover the best hiking trails, from the challenging terrains of the Alps to the breathtaking views of the Grand Canyon. Get ready to explore nature’s wonders while challenging your endurance.",
      image: "/image/men.PNG",
      buttonText: "Read More",
      link: "/HikingTrails", // Add link here
    },
    {
      title: "Top Kayaking Spots You Need to Visit",
      description:
        "Whether you're a seasoned kayaker or a beginner, these stunning kayaking destinations will leave you in awe. Paddle through crystal-clear waters and enjoy the tranquility of nature.",
      image: "/image/water-sports-04.jpg",
      buttonText: "Read More",
      link: "/KayakingSpots", // Add link here
    },
    {
      title: "Camping in the Wilderness: A Beginner’s Guide",
      description:
        "Learn the essentials of camping in the wild. From picking the perfect campsite to essential gear, this guide will help you prepare for a memorable outdoor experience.",
      image: "/image/light.PNG",
      buttonText: "Read More",
      link: "/CampingGuide", // Add link here
    },
    {
      title: "Exploring National Parks in the US",
      description:
        "The US is home to some of the most spectacular national parks. Explore the majestic landscapes of Yellowstone, Yosemite, and the Great Smoky Mountains on your next adventure.",
      image: "/image/park.PNG",
      buttonText: "Read More",
      link: "/NationalParks", // Add link here
    },
    {
      title: "The Best Outdoor Adventure Gear",
      description:
        "Gear up for your next adventure with the best equipment. From backpacks to hiking boots, discover the top-rated outdoor gear that will enhance your experience in the wild.",
      image: "/image/woman.jpeg",
      buttonText: "Read More",
      link: "/OutdoorGear", // Add link here
    },
  ];

  return (
    <div>
    <Hero />
   
    <div className="py-10 px-5">
      {/* Hero component added here */}

      {/* New top heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Explore the Latest Outdoor Adventures
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Replacing <img> with <Image> */}
            <Image
              src={blog.image}
              alt={blog.title}
              width={500} // Add a width for optimization
              height={300} // Add a height for optimization
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600">{blog.description}</p>
              {/* Custom button for each blog */}
              <a href={blog.link}> {/* Wrap the button with a link */}
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                  {blog.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogPosts;
