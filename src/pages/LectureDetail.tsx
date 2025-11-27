// src/pages/LectureDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';   // ✅ use Layout only
import BackButton from '../components/BackButton';
import { class11Batch, class12Batch } from '../data';

export default function LectureDetail() {
  const { batchId, subjectId, chapterId, lectureId } = useParams();

  const batches = [class11Batch, class12Batch];
  const batch = batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);
  const lecture = chapter?.lectures.find(l => l.id === lectureId);

  return (
    <Layout>
      <BackButton label="Back to lectures" />
      <div className="mt-6">
        <h1 className="text-2xl font-bold">{lecture?.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{lecture?.description}</p>
      </div>
    </Layout>
  );
}
