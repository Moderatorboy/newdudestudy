import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { class11Batch } from '../data/class11';
import { class12Batch } from '../data/class12';
import LectureCard from './LectureCard';

export default function Lectures() {
  const { batchId, subjectId, chapterId } = useParams();
  const batch = batchId === 'class11' ? class11Batch : class12Batch;
  const subject = batch.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);

  // ✅ Load saved lectures from LocalStorage
  const [lectures, setLectures] = useState(() => {
    const saved = localStorage.getItem(`lectures-${batchId}-${subjectId}-${chapterId}`);
    return saved ? JSON.parse(saved) : chapter?.lectures ?? [];
  });

  // ✅ Toggle completion and save to LocalStorage
  const toggleComplete = (id: string) => {
    setLectures(prev => {
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
    <div className="space-y-4">
      {lectures.map(l => (
        <LectureCard
          key={l.id}
          lecture={{ ...l, image: chapter?.image }}
          onToggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
