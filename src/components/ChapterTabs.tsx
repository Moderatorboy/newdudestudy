import React, { useState } from 'react';

export default function ChapterTabs({ lectures, notes, dppNotes, dppVideos, sheets }) {
  const [activeTab, setActiveTab] = useState('lectures');

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        {['lectures', 'notes', 'dppNotes', 'dppVideos', 'sheets'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500 font-bold' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'lectures' && lectures.map(l => (
          <div key={l.id}>
            <h3>{l.title}</h3>
            <iframe src={l.video} className="w-full h-64" allowFullScreen></iframe>
          </div>
        ))}
        {activeTab === 'notes' && <p>Notes content here...</p>}
        {activeTab === 'dppNotes' && <p>DPP Notes content here...</p>}
        {activeTab === 'dppVideos' && <p>DPP Videos content here...</p>}
        {activeTab === 'sheets' && <p>Sheets content here...</p>}
      </div>
    </div>
  );
}
