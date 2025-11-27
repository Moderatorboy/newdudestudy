// src/pages/LectureDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Divider from '../components/Divider';
import BackButton from '../components/BackButton';
import { class11Batch, class12Batch } from '../data';   // ✅ fixed import
import { randomQuote } from '../utils/quotes';

export default function LectureDetail() {
  const { batchId, subjectId, chapterId, lectureId } = useParams();

  // ✅ combine both batches into one array
  const batches = [class11Batch, class12Batch];

  const batch = batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);
  const lecture = chapter?.lectures.find(l => l.id === lectureId);

  const [quote, setQuote] = useState(randomQuote());

  useEffect(() => {
    setQuote(randomQuote());
  }, [lectureId]);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Header />
      <Divider />
      <BackButton label="Back to lectures" />
      {lecture ? (
        <div className="mt-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow">
            <video
              src={lecture.video ?? lecture.videoUrl}   // ✅ handle both keys
              controls
              autoPlay
              className="w-full max-h-[60vh] bg-black"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{lecture.title}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 italic">“{quote}”</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="mt-6">Lecture not found.</p>
      )}
    </div>
  );
}
