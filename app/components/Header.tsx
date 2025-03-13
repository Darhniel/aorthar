import React from 'react';
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full border-b bg-white px-4 py-5 flex items-center justify-between">
      {/* Left section */}
      <div className="flex items-center space-x-2">
        {/* Small green icon (placeholder) */}
        <Image 
          src={'/images/icon.svg'}
          width={28}
          height={28}
          alt=''
        />

        {/* Section labels, e.g. "Databases" -> "Overview" */}
        <span className="text-[#00000066] font-medium">Dashboards</span>
        <span className="text-gray-400">/</span>
        <span className="text-[#1c1c1c]">Overview</span>
      </div>

      {/* Right section: search + icons */}
      <div className="flex items-center space-x-4">
        {/* Search input */}
        <div className="relative">
          <svg
            className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-2 py-1 rounded-md border border-gray-300 
                       focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        {/* Example icons (Star, Question Mark, User, etc.) */}
        <button type="button">
          <svg
            className="w-5 h-5 text-gray-600 hover:text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {/* Star icon */}
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.358 4.157h4.396c.969 0 1.371 1.24.588 1.81l-3.561 2.587 1.358 4.157c.3.92-.755 1.688-1.54 1.156L10 13.011l-3.552 2.783c-.784.532-1.84-.235-1.54-1.156l1.358-4.157-3.56-2.587c-.784-.57-.38-1.81.588-1.81h4.396L9.049 2.927z" />
          </svg>
        </button>

        <button type="button">
          <svg
            className="w-5 h-5 text-gray-600 hover:text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {/* Question mark icon */}
            <path d="M9.09 9a3 3 0 1 1 5.82 1c-.44 1.06-1.54 1.44-2.12 2-.48.47-.75 1.13-.75 1.8M12 17h.01" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </button>

        <button type="button">
          <svg
            className="w-5 h-5 text-gray-600 hover:text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {/* User icon */}
            <path d="M10 2a6 6 0 0 1 4.472 10.194 8.04 8.04 0 0 1 3.028 3.743.75.75 0 0 1-1.38.617 6.54 6.54 0 0 0-2.494-2.764 6.026 6.026 0 0 1-3.626 1.21 6.028 6.028 0 0 1-3.626-1.21 6.54 6.54 0 0 0-2.494 2.764.75.75 0 0 1-1.38-.617 8.04 8.04 0 0 1 3.028-3.743A6 6 0 0 1 10 2z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
