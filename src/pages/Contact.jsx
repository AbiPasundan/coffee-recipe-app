import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-coffee-100 dark:bg-darkCoffee-800">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-darkCoffee-700">
        <h2 className="text-2xl font-bold text-center text-coffee-800 dark:text-coffee-50 mb-6">
          Contact Us
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-coffee-800 dark:text-coffee-50 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="input input-bordered w-full bg-coffee-50 dark:bg-darkCoffee-600 dark:text-coffee-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-coffee-800 dark:text-coffee-50 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="input input-bordered w-full bg-coffee-50 dark:bg-darkCoffee-600 dark:text-coffee-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-coffee-800 dark:text-coffee-50 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              rows="4"
              className="textarea textarea-bordered w-full bg-coffee-50 dark:bg-darkCoffee-600 dark:text-coffee-50"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full bg-coffee-800 dark:bg-coffee-50 dark:text-darkCoffee-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
