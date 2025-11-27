import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

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

// Linear Gradient Progress Bar
function GradientProgressBar({ total, completed }: { total: number; completed: number }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="w-full mb-6">
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded h-4 overflow-hidden">
        <div
          className="h-4 rounded transition-all duration-700"
          style={{
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, #3b82f6, #22c55e, #facc15)',
          }}
        />
      </div>
      <p className="text-sm mt-1 text-gray-600 dark:text-gray-300 font-semibold">
        {percentage}% Completed
      </p>
    </div>
  );
}

// Circular Progress Ring
function CircularProgress({ total, completed }: { total: number; completed: number }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center mb-6">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.7s ease' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="font-bold text-lg fill-gray-700 dark:fill-gray-200"
        >
          {percentage}%
        </text>
      </svg>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Chapter Progress</p>
    </div>
  );
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
  chapterId
}: ChapterTabsProps) {
  const [activeTab, setActiveTab] = useState<'lectures' | 'notes' | 'dppNotes' | 'dppVideos' | 'sheets'>('lectures');
  const [searchTerm, setSearchTerm] = useState('');
  const [completed, setCompleted] = useState<string[]>([]);
  const [overlayMessage, setOverlayMessage] = useState<string | null>(null);
  const [progressMode, setProgressMode] = useState<'linear' | 'circular'>('linear');

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

    if (!completed.includes(id)) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      setOverlayMessage('✔ Well Done!');
      setTimeout(() => setOverlayMessage(null), 2000);
    }
  };

  const filteredLectures = lectures.filter(l =>
    l.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabLabels: Record<string, string> = {
    lectures: '🎥 Lectures',
    notes: '📒 Notes',
    dppNotes: '📝 DPP Notes',
    dppVideos: '📺 DPP Videos',
    sheets: '📑 Sheets'
  };

  return (
    <div className="mt-6 relative">
      {overlayMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg animate-fadeOut z-50">
          {overlayMessage}
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {Object.keys(tabLabels).map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 transition transform ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 font-bold text-blue-600 scale-105'
                : 'text-gray-500 hover:scale-110'
            }`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      {activeTab === 'lectures' && (
        <input
          type="text"
          placeholder="Search lecture..."
          className="w-full px-4 py-2 border rounded mb-6 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}

      {/* Progress Toggle */}
      {activeTab === 'lectures' && (
        <div className="flex items-center space-x-4 mb-4">
          <button
            className={`px-3 py-1 rounded ${progressMode === 'linear' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setProgressMode('linear')}
          >
            📊 Linear
          </button>
          <button
            className={`px-3 py-1 rounded ${progressMode === 'circular' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setProgressMode('circular')}
          >
            🔵 Circular
          </button>
        </div>
      )}

      {/* Show correct progress UI */}
      {activeTab === 'lectures' &&
        (progressMode === 'linear'
          ? <GradientProgressBar total={lectures.length} completed={completed.length} />
          : <CircularProgress total={lectures.length} completed={completed.length} />
        )
      }

      {/* TAB CONTENT */}
      <div className="space-y-4">
        {/* LECTURES */}
        {activeTab === 'lectures' && filteredLectures.map(l => (
          <div
            key={l.id}
            className="flex items-center justify-between p-4 rounded-lg shadow hover:shadow-md border cursor-pointer transition bg-white dark:bg-gray-900"
            onClick={() => window.open(l.video, '_blank')}
          >
            {subjectImage && (
              <img src={subjectImage} className="w-16 h-16 object-contain mr-4 rounded" />
            )}
            <div className="flex-1">
              <h3 className="font-semibold">{l.title}</h3>
              <p className="text-sm text-gray-500">Click to open</p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleComplete(l.id);
              }}
              className={`ml-4 text-sm px-3 py-1 rounded ${
                completed.includes(l.id) ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}
            >
              {completed.includes(l.id) ? 'Completed' : 'Mark Done'}
            </button>
          </div>
        ))}

        {/* NOTES / DPP / SHEETS */}
        {activeTab !== 'lectures' && (
          <p className="text-gray-600 dark:text-gray-300">Coming soon...</p>
        )}
      </div>
    </div>
  );
}
