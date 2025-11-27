// src/pages/Lectures.tsx
import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Divider from '../components/Divider';
import BackButton from '../components/BackButton';
import { class11Batch, class12Batch } from '../data';  // ✅ fixed import
import LectureCard from '../components/LectureCard';

export default function Lectures() {
  const { batchId, subjectId, chapterId } = useParams();
  const [query, setQuery] = useState('');

  // ✅ combine both batches into one array
  const batches = [class11Batch, class12Batch];

  const batch = batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);
  const [lectures, setLectures] = useState(chapter?.lectures ?? []);

  const filtered = useMemo(() => {
    return lectures.filter(l =>
      l.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [lectures, query]);

  const toggleComplete = (id: string) => {
    setLectures(prev =>
      prev.map(l => l.id === id ? { ...l, completed: !l.completed } : l)
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Header />
      <SearchBar placeholder="Search lecture..." query={query} setQuery={setQuery} />
      <Divider />
      <BackButton label="Back to chapter" />
      <div className="mt-6 space-y-4">
        {filtered.map(l => (
          <LectureCard
            key={l.id}
            lecture={{ ...l, image: chapter?.image }}   // ✅ add chapter image to lecture
            onToggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}
