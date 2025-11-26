// src/utils/quotes.ts
export const quotes = [
  'Small steps every day lead to big results.',
  'Focus beats talent when talent doesn’t focus.',
  'Consistency is a superpower.',
  'Learn it. Apply it. Own it.',
  'Your future self is watching—make them proud.'
];

export function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
