// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParticleBg from './components/ParticleBg';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import Chapters from './pages/Chapters';
import ChapterDetail from './pages/ChapterDetail';   // ✅ correct import
import Lectures from './pages/Lectures';
import LectureDetail from './pages/LectureDetail';

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 relative">
      {/* ✅ Particle background behind everything */}
      <ParticleBg className="absolute inset-0 -z-10" />

      {/* ✅ Routes only, Layout handled inside each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batch/:batchId" element={<Subjects />} />
        <Route path="/batch/:batchId/subject/:subjectId" element={<Chapters />} />
        {/* 👇 Use ChapterDetail here */}
        <Route path="/batch/:batchId/subject/:subjectId/chapter/:chapterId" element={<ChapterDetail />} />
        <Route path="/batch/:batchId/subject/:subjectId/chapter/:chapterId/lecture/:lectureId" element={<LectureDetail />} />
      </Routes>
    </div>
  );
}
