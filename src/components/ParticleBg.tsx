// src/components/ParticleBg.tsx
import React from 'react';

export default function ParticleBg() {
  // Simple CSS “particle” dots overlay
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-animated">
      <svg className="absolute inset-0 w-full h-full opacity-30 animate-float">
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r={Math.random() * 2 + 1}
            fill={i % 2 ? '#7c3aed' : '#22d3ee'}
          />
        ))}
      </svg>
    </div>
  );
}
