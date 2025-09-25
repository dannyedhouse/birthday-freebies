'use client'

import {useState} from 'react'
import {FaSearch, FaTimes} from 'react-icons/fa'

interface SearchFieldProps {
  onSearchChange: (searchTerm: string) => void
  placeholder?: string
}

export const SearchField = ({
  onSearchChange,
  placeholder = 'Search offers...',
}: SearchFieldProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    onSearchChange(value)
  }

  const clearSearch = () => {
    setSearchTerm('')
    onSearchChange('')
  }

  return (
    <div className="relative w-full sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder={placeholder}
        className="
          block w-full pl-10 pr-10 py-2 
          border border-gray-300 rounded-lg 
          bg-white text-gray-900 placeholder-gray-500 text-xs sm:text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-200 shadow-md
        "
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
