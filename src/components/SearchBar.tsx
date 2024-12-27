import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({searchQuery, setSearchQuery}) => {
  return (
    <input
      type='text'
      placeholder='Rechercher...'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className='w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
  );
};

export default SearchBar;
