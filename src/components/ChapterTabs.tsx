import React, { useState, useEffect } from 'react';

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
  batchId,
  subjectId,
  chapterId,
}: ChapterTabsProps) {
  const [activeTab, setActiveTab] = useState<'lectures' | 'notes' | 'dppNotes' | 'dppVideos' | 'sheets'>('lectures');
  const [searchTerm, setSearchTerm] = useState('');
  const [completed, setCompleted] = useState<string[]>([]);

  const storageKey = `completed_${batchId}_${subjectId}_${chapterId}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setCompleted(JSON.parse(saved));
  }, [storageKey]);

  const toggleComplete = (id: string) => {
    const updated = completed.includes(id)
      ? completed.filter(i => i !== id)
      : [...completed, id];
    setCompleted(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

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

      {/* Search bar */}
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
          <div className="space-y-4">
            {filteredLectures.map(l => (
              <div
                key={l.id}
                className="flex items-center justify-between p-4 rounded-lg shadow hover:shadow-md border cursor-pointer transition bg-white dark:bg-gray-900"
                onClick={() => window.open(l.video, '_blank')}
              >
                {/* Left: Chapter image */}
                {subjectImage && (
                  <img
                    src={subjectImage}
                    alt="Chapter"
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                )}

                {/* Center: Lecture title */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{l.title}</h3>
                  <p className="text-sm text-gray-500">Click to open</p>
                </div>

                {/* Right: Mark to complete */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleComplete(l.id);
                  }}
                  className={`ml-4 text-sm px-3 py-1 rounded ${
                    completed.includes(l.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {completed.includes(l.id) ? 'Completed' : 'Mark to complete'}
                </button>
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
