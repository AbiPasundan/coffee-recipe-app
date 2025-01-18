import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-coffee-100 dark:bg-darkCoffee-800 text-coffee-800 dark:text-coffee-50 py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold">Recipe Coffee App</h2>
        <p className="text-sm mt-2">The best place to discover coffee recipes and share your passion for coffee.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle bg-coffee-200 dark:bg-darkCoffee-700 hover:bg-coffee-300"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.988H7.898v-2.89h2.539v-2.2c0-2.507 1.492-3.89 3.778-3.89 1.096 0 2.238.194 2.238.194v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.872h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle bg-coffee-200 dark:bg-darkCoffee-700 hover:bg-coffee-300"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm4.25 5.5a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm6 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-6 2.5a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle bg-coffee-200 dark:bg-darkCoffee-700 hover:bg-coffee-300"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.152-1.11-1.46-1.11-1.46-.908-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.092-.647.349-1.09.635-1.34-2.22-.253-4.555-1.112-4.555-4.943 0-1.091.39-1.985 1.03-2.684-.103-.254-.447-1.275.098-2.656 0 0 .84-.27 2.75 1.025A9.548 9.548 0 0112 6.845c.85.004 1.706.114 2.504.335 1.91-1.295 2.75-1.025 2.75-1.025.546 1.381.202 2.402.1 2.656.64.7 1.03 1.593 1.03 2.684 0 3.841-2.338 4.687-4.566 4.935.358.309.678.922.678 1.857 0 1.342-.012 2.425-.012 2.752 0 .269.18.58.688.482C19.137 20.162 22 16.414 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>
        <p className="text-sm mt-4">&copy; 2025 Recipe Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
}
