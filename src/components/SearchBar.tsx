// src/components/SearchBar.tsx
import React from 'react';

type Props = {
  placeholder: string;
  query: string;
  setQuery: (v: string) => void;
};

export default function SearchBar({ placeholder, query, setQuery }: Props) {
  return (
    <div className="w-full max-w-xl mx-auto mt-4">
      <div className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-sm">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        />
        <span className="text-gray-400">🔍</span>
      </div>
    </div>
  );
}
