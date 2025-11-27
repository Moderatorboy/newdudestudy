import React, { useState, useMemo } from 'react';
import LectureCard from './LectureCard';
import SearchBar from './SearchBar';

type Props = {
  lectures: any[];
  notes: any[];
  dppNotes: any[];
  dppVideos: any[];
  sheets?: any[];          // 👈 new prop for sheets
  subjectImage?: string;
  batchId?: string;
  subjectId?: string;
  chapterId?: string;
};

const tabs = ['Videos', 'Notes', 'DPP Notes', 'DPP Videos', 'Sheets']; // 👈 added Sheets

export default function ChapterTabs({ lectures, notes, dppNotes, dppVideos, sheets = [], subjectImage, batchId, subjectId, chapterId }: Props) {
  const [activeTab, setActiveTab] = useState('Videos');
  const [query, setQuery] = useState('');

  // ✅ LocalStorage integration
  const [lectureState, setLectureState] = useState(() => {
    const saved = localStorage.getItem(`lectures-${batchId}-${subjectId}-${chapterId}`);
    return saved ? JSON.parse(saved) : lectures ?? [];
  });

  // ✅ Filter lectures by search query
  const filtered = useMemo(() => {
    return lectureState.filter(l =>
      l.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [lectureState, query]);

  const toggleComplete = (id: string) => {
    setLectureState(prev => {
      const updated = prev.map(l =>
        l.id === id ? { ...l, completed: !l.completed } : l
      );
      localStorage.setItem(
        `lectures-${batchId}-${subjectId}-${chapterId}`,
        JSON.stringify(updated)
      );
      return updated;
    });
  };

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

      {/* ✅ Search bar only for Videos tab */}
      {activeTab === 'Videos' && (
        <div className="mt-4">
          <SearchBar placeholder="Search lecture..." query={query} setQuery={setQuery} />
        </div>
      )}

      {/* Tab content */}
      <div className="mt-4">
        {activeTab === 'Videos' && (
          <div className="space-y-4">
            {filtered.length ? (
              filtered.map(l => (
                <LectureCard
                  key={l.id}
                  lecture={{ ...l, image: l.image ?? subjectImage }}
                  onToggleComplete={toggleComplete}
                />
              ))
            ) : (
              <p>No lectures found.</p>
            )}
          </div>
        )}

        {activeTab === 'Notes' && (
          <div>{notes.length ? notes.map((n, i) => <p key={i}>{n}</p>) : <p>No notes available.</p>}</div>
        )}

        {activeTab === 'DPP Notes' && (
          <div>{dppNotes.length ? dppNotes.map((d, i) => <p key={i}>{d}</p>) : <p>No DPP PDFs available.</p>}</div>
        )}

        {activeTab === 'DPP Videos' && (
          <div>{dppVideos.length ? dppVideos.map((v, i) => <p key={i}>{v}</p>) : <p>No DPP videos available.</p>}</div>
        )}

        {/* ✅ New Sheets tab */}
        {activeTab === 'Sheets' && (
          <div>{sheets.length ? sheets.map((s, i) => <p key={i}>{s}</p>) : <p>No sheets available.</p>}</div>
        )}
      </div>
    </div>
  );
}
