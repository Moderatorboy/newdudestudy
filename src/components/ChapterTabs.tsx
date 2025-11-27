import React, { useState } from 'react';

type ChapterTabsProps = {
  lectures: any[];
  notes: any[];
  dppNotes: any[];
  dppVideos: any[];
  sheets: any[];
  subjectImage?: string;
  batchId?: string;
  subjectId?: string;
  chapterId?: string;
};

export default function ChapterTabs({
  lectures,
  notes,
  dppNotes,
  dppVideos,
  sheets
}: ChapterTabsProps) {
  const [activeTab, setActiveTab] = useState('lectures');

  const tabs = [
    { id: 'lectures', label: 'Lectures' },
    { id: 'notes', label: 'Notes' },
    { id: 'dppNotes', label: 'DPP Notes' },
    { id: 'dppVideos', label: 'DPP Videos' },
    { id: 'sheets', label: 'Sheets' }
  ];

  return (
    <div className="mt-6">
      {/* Tab Buttons */}
      <div className="flex gap-3 border-b pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Rendering */}
      <div className="mt-4">
        {activeTab === 'lectures' && (
          <ul>{lectures.map((lec, index) => <li key={index}>{lec.title}</li>)}</ul>
        )}
        {activeTab === 'notes' && (
          <ul>{notes.map((note, index) => <li key={index}>{note.title}</li>)}</ul>
        )}
        {activeTab === 'dppNotes' && (
          <ul>{dppNotes.map((note, index) => <li key={index}>{note.title}</li>)}</ul>
        )}
        {activeTab === 'dppVideos' && (
          <ul>{dppVideos.map((vid, index) => <li key={index}>{vid.title}</li>)}</ul>
        )}
        {activeTab === 'sheets' && (
          <ul>{sheets.map((sheet, index) => <li key={index}>{sheet.title}</li>)}</ul>
        )}
      </div>
    </div>
  );
}
