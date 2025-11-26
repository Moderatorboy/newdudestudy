// src/pages/Subjects.tsx
import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Divider from '../components/Divider';
import CardGrid from '../components/CardGrid';
import BackButton from '../components/BackButton';
import { batches } from '../data/data';

export default function Subjects() {
  const { batchId } = useParams();
  const [query, setQuery] = useState('');

  const batch = batches.find(b => b.id === batchId);
  const subjects = batch?.subjects ?? [];

  const filtered = useMemo(() => {
    return subjects.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));
  }, [subjects, query]);

  const items = filtered.map(s => ({
    id: s.id,
    name: s.name,
    image: s.image,
    to: `/batch/${batchId}/subject/${s.id}`
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Header />
      <SearchBar placeholder="Search subject..." query={query} setQuery={setQuery} />
      <div className="flex items-center justify-between">
        <Divider />
      </div>
      <BackButton label="Back to batches" />
      <CardGrid items={items} />
    </div>
  );
}
