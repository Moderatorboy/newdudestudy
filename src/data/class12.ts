// src/data/class12.ts
import { Batch } from './types';

export const class12Batch: Batch = {
  id: 'class12',
  name: 'AK Class 12',
  image: '/batch2.jpg',
  subjects: [
    {
      id: 'NSSIR12',
      name: 'PHYSICS (NS SIR)',
      image: '/NSSIR.jpg',
      chapters: [
        {
          id: 'kinematics12',
          name: 'Kinematics',
          image: '/KINEMATICS.png',   // ✅ uniform field name
          lectures: [
            { id: 'l12_1', title: 'Introduction to Kinematics', video: '/public/videos/sample-lecture.mp4' },
            { id: 'l12_2', title: 'Position, Displacement, and Velocity', video: '/public/videos/sample-lecture.mp4' }
          ]
        }
      ]
    },
    {
      id: 'JPSIR12',
      name: 'PHYSICS (JP SIR)',
      image: '/jpsir.jpg',
      chapters: [
        {
          id: 'basic-concepts12',
          name: 'Basic Concepts of Chemistry',
          image: '/CHEMISTRY.png',   // ✅ uniform field name
          lectures: [
            { id: 'l12_3', title: 'Mole Concept Essentials', video: '/public/videos/sample-lecture.mp4' }
          ]
        }
      ]
    },
    {
      id: 'VGSIR12',
      name: 'MATHS (VG SIR)',
      image: '/vgsir.jpg',
      chapters: [
        {
          id: 'basic-maths12',
          name: 'Basic Concepts of Mathematics',
          image: '/MATHS.png',   // ✅ uniform field name
          lectures: [
            { id: 'l12_4', title: 'Algebra Essentials', video: '/public/videos/sample-lecture.mp4' }
          ]
        }
      ]
    }
  ]
};
