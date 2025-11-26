// src/components/LectureCard.tsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Lecture } from '../data/data';

type Props = {
  lecture: Lecture;
  onToggleComplete: (id: string) => void;
};

export default function LectureCard({ lecture, onToggleComplete }: Props) {
  const { batchId, subjectId, chapterId } = useParams();

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <img src={lecture.thumbnail} alt={lecture.title} className="w-20 h-20 object-cover rounded-md" />
      <div className="flex-1">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">{lecture.title}</h4>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggleComplete(lecture.id)}
          className={`px-3 py-2 rounded-md text-sm border transition
            ${lecture.completed ? 'bg-green-600 text-white border-green-700' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700'}`}
        >
          {lecture.completed ? 'Completed' : 'Mark to complete'}
        </button>
        <Link
          to={`/batch/${batchId}/subject/${subjectId}/chapter/${chapterId}/lecture/${lecture.id}`}
          className="px-3 py-2 rounded-md text-sm bg-brand-500 hover:bg-brand-600 text-white"
        >
          Open
        </Link>
      </div>
    </div>
  );
}
