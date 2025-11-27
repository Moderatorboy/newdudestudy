// src/components/ChapterTabs.tsx
import React, { useState } from 'react';

const tabs = ['Videos', 'Notes', 'DPP Notes', 'DPP Videos'];

export default function ChapterTabs() {
  const [activeTab, setActiveTab] = useState('Videos');

  return (
    <div className="mt-6">
      {/* Tab bar */}
      <div className="flex space-x-4 border-b border-gray-300 dark:border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {activeTab === 'VIDEOS' && <div>🎥 Show lecture videos here</div>}
        {activeTab === 'NOTES' && <div>📄 Show theory notes here</div>}
        {activeTab === 'DPP PDF' && <div>📘 Show DPP PDFs here</div>}
        {activeTab === 'DPP VIDEOS' && <div>🎬 Show DPP video lectures here</div>}
      </div>
    </div>
  );
}
