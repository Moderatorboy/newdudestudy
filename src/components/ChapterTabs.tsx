import React, { useState } from 'react';

interface Lecture {
  id: string;
  title: string;
  video: string;
}

interface ChapterTabsProps {
  lectures: Lecture[];
  notes: any[];
  dppNotes: any[];
  dppVideos: any[];
  sheets: any[];
  subjectImage?: string;
  batchId?: string;
  subjectId?: string;
  chapterId?: string;
}

export default function ChapterTabs({
  lectures,
  notes,
  dppNotes,
  dppVideos,
  sheets,
  subjectImage,
}: ChapterTabsProps) {
  const [activeTab, setActiveTab] = useState<'lectures' | 'notes' | 'dppNotes' | 'dppVideos' | 'sheets'>('lectures');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLectures = lectures.filter(l =>
    l.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {['lectures', 'notes', 'dppNotes', 'dppVideos', 'sheets'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 transition ${
              activeTab === tab ? 'border-b-2 border-blue-500 font-bold text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search bar for lectures */}
      {activeTab === 'lectures' && (
        <input
          type="text"
          placeholder="Search lecture..."
          className="w-full px-4 py-2 border rounded mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}

      {/* Tab Content */}
      <div className="mt-2">
        {activeTab === 'lectures' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLectures.map(l => (
              <div
                key={l.id}
                className="relative p-4 rounded-lg shadow hover:shadow-lg border cursor-pointer group transition"
                onClick={() => window.open(l.video, '_blank')}
              >
                {/* Chapter image as background */}
                {subjectImage && (
                  <img
                    src={subjectImage}
                    alt="Chapter"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition"
                  />
                )}
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-2">{l.title}</h3>
                  <p className="text-sm text-gray-500">Click anywhere to open</p>
                  <button className="mt-2 text-blue-600 underline">Mark to complete</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'notes' && <p className="text-gray-600">Notes content here...</p>}
        {activeTab === 'dppNotes' && <p className="text-gray-600">DPP Notes content here...</p>}
        {activeTab === 'dppVideos' && <p className="text-gray-600">DPP Videos content here...</p>}
        {activeTab === 'sheets' && <p className="text-gray-600">Sheets content here...</p>}
      </div>
    </div>
  );
}
