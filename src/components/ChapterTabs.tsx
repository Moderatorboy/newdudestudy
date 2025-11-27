import React, { useState } from 'react';
import LectureCard from './LectureCard';
import SearchBar from './SearchBar';   // 👈 import search bar

type Props = {
  lectures: any[];
  notes: any[];
  dppNotes: any[];
  dppVideos: any[];
  subjectImage?: string;
  batchId?: string;
  subjectId?: string;
  chapterId?: string;
};

const tabs = ['Videos', 'Notes', 'DPP Notes', 'DPP Videos'];

export default function ChapterTabs({ lectures, notes, dppNotes, dppVideos, subjectImage, batchId, subjectId, chapterId }: Props) {
  const [activeTab, setActiveTab] = useState('Videos');

  // ✅ LocalStorage integration
  const [lectureState, setLectureState] = useState(() => {
    const saved = localStorage.getItem(`lectures-${batchId}-${subjectId}-${chapterId}`);
    return saved ? JSON.parse(saved) : lectures ?? [];
  });

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

      {/* Tab content */}
      <div className="mt-4">
        {activeTab === 'Videos' && (
          <div className="space-y-4">
            {lectureState.length ? (
              lectureState.map(l => (
                <LectureCard
                  key={l.id}
                  lecture={{ ...l, image: l.image ?? subjectImage }}
                  onToggleComplete={toggleComplete}
                />
              ))
            ) : (
              <p>No videos available.</p>
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
      </div>
    </div>
  );
}
