// src/components/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton({ label }: { label: string }) {
  const nav = useNavigate();
  return (
    <button
      onClick={() => nav(-1)}
      className="mt-4 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
    >
      {label}
    </button>
  );
}
