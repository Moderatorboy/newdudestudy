// src/pages/LectureDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Divider from '../components/Divider';
import BackButton from '../components/BackButton';
import { class11Batch, class12Batch } from '../data';  // ✅ fixed import

export default function LectureDetail() {
  const { batchId, subjectId, chapterId, lectureId } = useParams();

  const batches = [class11Batch, class12Batch];
  const batch = batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);
  const lecture = chapter?.lectures.find(l => l.id === lectureId);

  if (!lecture) {
    return <div className="p-6">Lecture not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Header />
      <Divider />
      <BackButton label="Back to lectures" />
      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-4">{lecture.title}</h1>
        {lecture.video && (
          <iframe
            src={lecture.video}
            title={lecture.title}
            className="w-full h-96 rounded"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
