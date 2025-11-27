// src/pages/Home.tsx
import React, { useMemo, useState } from 'react';
import Layout from '../components/Layout';   // ✅ use Layout only
import SearchBar from '../components/SearchBar';
import Divider from '../components/Divider';
import CardGrid from '../components/CardGrid';
import { class11Batch, class12Batch } from '../data';

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
    <Layout>
      <SearchBar placeholder="Search batch..." query={query} setQuery={setQuery} />
      <Divider />
      <CardGrid items={items} />
    </Layout>
  );
}
