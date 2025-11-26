// src/data/data.ts
export type Batch = {
  id: string;
  name: string;
  image: string;
  subjects: Subject[];
};
export type Subject = {
  id: string;
  name: string;
  image: string;
  chapters: Chapter[];
};
export type Chapter = {
  id: string;
  name: string;
  image: string;
  lectures: Lecture[];
};
export type Lecture = {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  completed?: boolean;
};

export const batches: Batch[] = [
  {
    id: 'class11',
    name: 'AK Class 11',
    image: '/batch1.jpg',
    subjects: [
      {
        id: 'physics',
        name: 'Physics',
        image: 'https://images.unsplash.com/photo-1532692082131-2b31a8932116?q=80&w=1200&auto=format&fit=crop',
        chapters: [
          {
            id: 'kinematics',
            name: 'Kinematics',
            image: 'https://images.unsplash.com/photo-1523978591478-c7539490f1c5?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1',
                title: 'Introduction to Kinematics',
                thumbnail: 'https://images.unsplash.com/photo-1547350405-08e1e3cfe3d6?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              },
              {
                id: 'l2',
                title: 'Position, Displacement, and Velocity',
                thumbnail: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop',
        chapters: [
          {
            id: 'basic-concepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'class12',
    name: 'Class 12 – Advanced',
    image: 'https://images.unsplash.com/photo-1461360370896-922624a20de0?q=80&w=1200&auto=format&fit=crop',
    subjects: [
      {
        id: 'math',
        name: 'Mathematics',
        image: 'https://images.unsplash.com/photo-1483721310020-03333e577079?q=80&w=1200&auto=format&fit=crop',
        chapters: [
          {
            id: 'calculus',
            name: 'Differential Calculus',
            image: 'https://images.unsplash.com/photo-1509223197845-458d8731877f?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1',
                title: 'Limits and Continuity',
                thumbnail: 'https://images.unsplash.com/photo-1538409432071-1f0b4f2a3c0c?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      }
    ]
  }
];
