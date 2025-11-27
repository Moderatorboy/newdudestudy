// src/components/CardGrid.tsx
import React from 'react';
import { Link } from 'react-router-dom';

type Item = { id: string; name: string; image: string; to: string };

export default function CardGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {items.map((item) => (
        <Link
          key={item.id}
          to={item.to}
          className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow hover:shadow-lg transition"
        >
          <div className="h-40 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
