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
        id: 'NSSIR11',
        name: 'PHYSICS (NS SIR)',
        image: '/NSSIR.jpg',
        chapters: [
          {
            id: 'kinematics01',
            name: 'Kinematics',
            image: 'https://images.unsplash.com/photo-1523978591478-c7539490f1c5?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'lb1',
                title: 'Introduction to Kinematics',
                thumbnail: 'https://images.unsplash.com/photo-1547350405-08e1e3cfe3d6?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              },
              {
                id: 'l2b',
                title: 'Position, Displacement, and Velocity',
                thumbnail: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'Jpsir11',
        name: 'PHYSICS (JP SIR)',
        image: '/jpsir.jpg',
        chapters: [
          {
            id: 'basic-cgoncepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1h',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'VGSIR11',
        name: 'MATHS (VG SIR)',
        image: '/vgsir.jpg',
        chapters: [
          {
            id: 'basic-ctoncepts01',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l102h',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'GBSIR11',
        name: 'MATHS (GB SIR)',
        image: '/gbsir.jpg',
        chapters: [
          {
            id: 'basic-contrcepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1wr',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'AKKSIR11',
        name: 'PHYSICAL (AKK SIR)',
        image: '/akksir.jpg',
        chapters: [
          {
            id: 'basic-cosdncepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1jk',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'SKMSIR11',
        name: 'SKM (SKM SIR)',
        image: '/skmsir.jpg',
        chapters: [
          {
            id: 'basic-cosffncepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1ok',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'VJJSIR11',
        name: 'INORGANIC (VJ SIR)',
        image: '/vjsir.jpg',
        chapters: [
          {
            id: 'basic-cokuhncepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1kjl',
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
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1wa02h',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'GBSIR12',
        name: 'MATHS (GB SIR)',
        image: '/gbsir.jpg',
        chapters: [
          {
            id: 'bassic-contrcepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'fsl1wr',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'AKKSIR12',
        name: 'PHYSICAL (AKK SIR)',
        image: '/akksir.jpg',
        chapters: [
          {
            id: 'basic-sdcosdncepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1jkdsx',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'SKMSIR12',
        name: 'SKM (SKM SIR)',
        image: '/skmsir.jpg',
        chapters: [
          {
            id: 'basisacc-cosffncepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1oask',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      },
      {
        id: 'VJJSIR12',
        name: 'INORGANIC (VJ SIR)',
        image: '/vjsir.jpg',
        chapters: [
          {
            id: 'basiacsc-cokuhncepts',
            name: 'Basic Concepts of Chemistry',
            image: 'https://images.unsplash.com/photo-1503342215300-b0a15cf3dfce?q=80&w=1200&auto=format&fit=crop',
            lectures: [
              {
                id: 'l1kdsxjl',
                title: 'Mole Concept Essentials',
                thumbnail: 'https://images.unsplash.com/photo-1509256406117-0a5fce4b1f56?q=80&w=1200&auto=format&fit=crop',
                videoUrl: '/public/videos/sample-lecture.mp4'
              }
            ]
          }
        ]
      }
    ]
  }
];
