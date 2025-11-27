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
          id: 'kin2ematics01',
          name: 'Kinematics',
          image: 'https://images.unsplash.com/photo-1523978591478-c7539490f1c5?q=80&w=1200&auto=format&fit=crop',
          lectures: [
            {
              id: '2lb1',
              title: 'Introduction to Kinematics',
              thumbnail: 'https://images.unsplash.com/photo-1547350405-08e1e3cfe3d6?q=80&w=1200&auto=format&fit=crop',
              videoUrl: '/public/videos/sample-lecture.mp4'
            },
            {
              id: 'l2e2b',
              title: 'Position, Displacement, and Velocity',
              thumbnail: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
              videoUrl: '/public/videos/sample-lecture.mp4'
            }
          ]
        }
      ]
    },
    {
      id: 'Jpsir12',
      name: 'PHYSICS (JP SIR)',
      image: '/jpsir.jpg',
      chapters: [
        {
          id: 'bas3ic-cgoncepts',
          name: 'Basic Concepts of Chemistry',
          image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
          lectures: [
            {
              id: '3l1h',
              title: 'Mole Concept Essentials',
              thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
              videoUrl: '/public/videos/sample-lecture.mp4'
            }
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
          id: 'bas121ic-ctoncepts01',
          name: 'Basic Concepts of Mathematics',
          image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
          lectures: [
            {
              id: 'mlec12',
              title: 'Algebra Essentials',
              thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
              videoUrl: '/public/videos/sample-lecture.mp4'
            }
          ]
        }
      ]
    }
  ]
};
