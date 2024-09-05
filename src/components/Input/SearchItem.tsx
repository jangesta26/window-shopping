import React from 'react'

const SearchItem = () => {
  return (
    <>
        <div className="relative flex-1">
            <label htmlFor="Search" className="sr-only">Search</label>
            <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border-gray-200 px-3 py-2.5 shadow-sm sm:text-sm outline-none"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button type="button" className="text-gray-600 hover:text-gray-700">
                <span className="sr-only">Search</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
                </svg>
            </button>
            </span>
        </div>
    </>
  )
}

export default SearchItem
