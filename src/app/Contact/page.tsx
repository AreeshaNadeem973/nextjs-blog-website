"use client"
import React, { useState } from "react";
import Hero from "./Hero";
import { FaYoutube, FaTwitter } from "react-icons/fa"; // Corrected import from 'react-icons/fa'
import { TiSocialFacebook } from "react-icons/ti"; // Corrected import from 'react-icons/ti'

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    setIsSubmitted(true); 
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-10 md:p-20">
        {/* Form Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            We&apos;re Ready, Let&apos;s Talk.
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring focus:ring-green-500 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-green-600 transition mt-20"
            >
              Send Message
            </button>
          </form>
          {/* Success Message */}
          {isSubmitted && (
            <p className="text-pink-600 mt-4 font-semibold">
              Form submitted successfully!
            </p>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16 space-y-6 text-gray-800">
          {/* Address */}
          <div>
            <h3 className="font-bold">Contact Info</h3>
            <p>123 Fifth Avenue, NY 10160, New York, USA</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-bold">Email Us</h3>
            <p>contact@example.com</p>
          </div>

          {/* Call Us */}
          <div>
            <h3 className="font-bold">Call Us</h3>
            <p>800-123-456</p>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              {/* Facebook Icon */}
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition"
              >
                <div className="text-white text-3xl">
                  <TiSocialFacebook />
                </div>
              </a>

              {/* Twitter Icon */}
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition"
              >
                <div className="text-white text-3xl">
                  <FaTwitter />
                </div>
              </a>

              {/* YouTube Icon */}
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition"
              >
                <div className="text-white text-3xl">
                  <FaYoutube />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
