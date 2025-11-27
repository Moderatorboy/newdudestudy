import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import ChapterTabs from '../components/ChapterTabs';
import { class11Batch, class12Batch } from '../data';

export default function ChapterDetail() {
  const { batchId, subjectId, chapterId } = useParams();

  const batches = [class11Batch, class12Batch];
  const batch = batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);

  return (
    <Layout>
      <BackButton label="Back to chapters" />
      <h1 className="text-2xl font-bold mt-4">{chapter?.name}</h1>
      {/* ✅ Pass data + IDs for localStorage */}
      <ChapterTabs
        lectures={chapter?.lectures ?? []}
        notes={chapter?.notes ?? []}
        dppNotes={chapter?.dppNotes ?? []}
        dppVideos={chapter?.dppVideos ?? []}
        sheets={chapter?.sheets ?? []}   // 👈 new sheets prop
        subjectImage={subject?.image}
        batchId={batchId}
        subjectId={subjectId}
        chapterId={chapterId}
      />
    </Layout>
  );
}
