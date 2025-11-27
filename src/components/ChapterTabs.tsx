import React, { useState } from 'react';
import LectureCard from './LectureCard';

type Props = {
  lectures: any[];
  notes: any[];
  dppNotes: any[];
  dppVideos: any[];
};

const tabs = ['Videos', 'Notes', 'DPP Notes', 'DPP Videos'];

export default function ChapterTabs({ lectures, notes, dppNotes, dppVideos }: Props) {
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
        {activeTab === 'Videos' && (
          <div className="space-y-4">
            {lectures.length ? (
              lectures.map(l => <LectureCard key={l.id} lecture={l} />)
            ) : (
              <p>No videos available.</p>
            )}
          </div>
        )}

        {activeTab === 'Notes' && (
          <div>
            {notes.length ? notes.map((n, i) => <p key={i}>{n}</p>) : <p>No notes available.</p>}
          </div>
        )}

        {activeTab === 'DPP Notes' && (
          <div>
            {dppNotes.length ? dppNotes.map((d, i) => <p key={i}>{d}</p>) : <p>No DPP PDFs available.</p>}
          </div>
        )}

        {activeTab === 'DPP Videos' && (
          <div>
            {dppVideos.length ? dppVideos.map((v, i) => <p key={i}>{v}</p>) : <p>No DPP videos available.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
