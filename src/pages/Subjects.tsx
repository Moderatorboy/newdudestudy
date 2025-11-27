// src/pages/Subjects.tsx
import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Divider from '../components/Divider';
import CardGrid from '../components/CardGrid';
import BackButton from '../components/BackButton';
import { class11Batch, class12Batch } from '../data';

export default function Subjects() {
  const { batchId } = useParams();
  const [query, setQuery] = useState('');

  // ✅ combine both batches into one array
  const batches = [class11Batch, class12Batch];
  const batch = batches.find(b => b.id === batchId);
  const subjects = batch?.subjects ?? [];

  const filtered = useMemo(() => {
    return subjects.filter(s =>
      s.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [subjects, query]);

  const items = filtered.map(s => ({
    id: s.id,
    name: s.name,
    image: s.image ?? s.photo, // ✅ handle both `image` or `photo`
    to: `/batch/${batchId}/subject/${s.id}`,
    subtitle: `${s.chapters?.length ?? 0} chapters`   // ✅ show chapter count
  }));

  return (
    <Layout>
      <SearchBar placeholder="Search subject..." query={query} setQuery={setQuery} />
      <div className="flex items-center justify-between">
        <Divider />
      </div>
      <BackButton label="Back to batches" />
      <CardGrid items={items} />
    </Layout>
  );
}
