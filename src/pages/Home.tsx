// src/pages/Home.tsx
import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Divider from '../components/Divider';
import CardGrid from '../components/CardGrid';
import { class11Batch, class12Batch } from '../data';  // ✅ import from index.ts

export default function Home() {
  const [query, setQuery] = useState('');

  // ✅ combine both batches into one array
  const batches = [class11Batch, class12Batch];

  const filtered = useMemo(() => {
    return batches.filter(b =>
      b.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const items = filtered.map(b => ({
    id: b.id,
    name: b.name,
    image: b.image,
    to: `/batch/${b.id}`
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Header />
      <SearchBar placeholder="Search batch..." query={query} setQuery={setQuery} />
      <Divider />
      <CardGrid items={items} />
    </div>
  );
}
