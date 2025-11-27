// src/pages/Chapters.tsx
import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';   // ✅ use Layout only
import SearchBar from '../components/SearchBar';
import Divider from '../components/Divider';
import BackButton from '../components/BackButton';
import CardGrid from '../components/CardGrid';
import { class11Batch, class12Batch } from '../data';

export default function Chapters() {
  const { batchId, subjectId } = useParams();
  const [query, setQuery] = useState('');

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
    image: c.image,
    to: `/batch/${batchId}/subject/${subjectId}/chapter/${c.id}`,
    subtitle: `${c.lectures?.length ?? 0} lectures`
  }));

  return (
    <Layout>
      <SearchBar placeholder="Search chapter..." query={query} setQuery={setQuery} />
      <Divider />
      <BackButton label="Back to subjects" />
      <CardGrid items={items} />
    </Layout>
  );
}
