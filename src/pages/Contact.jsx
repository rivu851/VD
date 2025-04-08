import React from "react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-900">Contact Us</h2>
      <p className="text-center text-gray-600 mt-2">
        Have any queries or suggestions? We'd love to hear from you.
      </p>
      <form className="mt-6 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter name "
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            placeholder="enter your mail"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            placeholder="Write your message here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            rows="5"
          ></textarea>
        </div>
        <button
  onClick={(e) => e.preventDefault()}
  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition hover:bg-blue-700 shadow-md"
>
  Send Message
</button>

      </form>
    
      </div>
  );
};

export default Contact;
