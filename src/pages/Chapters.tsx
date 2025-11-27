// src/pages/Chapters.tsx
import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Divider from '../components/Divider';
import CardGrid from '../components/CardGrid';
import BackButton from '../components/BackButton';
import { class11Batch, class12Batch } from '../data';  // ✅ import from index.ts

export default function Chapters() {
  const { batchId, subjectId } = useParams();
  const [query, setQuery] = useState('');

  // ✅ combine both batches into one array
  const batches = [class11Batch, class12Batch];

  const batch = batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  const chapters = subject?.chapters ?? [];

  const filtered = useMemo(() => {
    return chapters.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [chapters, query]);

  const items = filtered.map(c => ({
    id: c.id,
    name: c.name,
    image: c.image ?? c.photo, // ✅ handle both `image` or `photo`
    to: `/batch/${batchId}/subject/${subjectId}/chapter/${c.id}`
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Header />
      <SearchBar placeholder="Search chapter..." query={query} setQuery={setQuery} />
      <Divider />
      <BackButton label="Back to subjects" />
      <CardGrid items={items} />
    </div>
  );
}
