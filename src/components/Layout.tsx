// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Top header */}
      <Header />

      {/* ✅ Main content with bottom spacing */}
      <main className="flex-1 max-w-6xl mx-auto px-4 pt-6 pb-16">
        {children}
      </main>

      {/* ✅ Footer at bottom */}
      <Footer />
    </div>
  );
}
