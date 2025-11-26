// src/components/Header.tsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Header({ title }: { title?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between py-4">
      <div className="flex-1"></div>
      <div className="text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide
                     text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-cyan-400
                     animate-hue"
        >
          {title ?? 'DUDE STUDY'}
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Learn. Apply. Grow.
        </p>
      </div>
      <div className="flex-1 flex justify-end pr-2">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-sm
                     bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 'Normal mode' : 'Dark mode'}
        </button>
      </div>
    </header>
  );
}
