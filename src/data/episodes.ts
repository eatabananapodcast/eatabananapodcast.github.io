export interface Episode {
  slug: string;
  title: string;
  date: string;
  audioUrl: string;
  description: string;
  youtubeUrl: string;
  duration?: string;
}

export const episodes: Episode[] = [
  {
    slug: 'episode-001',
    title: 'Episode 001',
    date: '2026-09-08',
    audioUrl: 'https://pub-48d355cef1ff4bfe820d4a335f35a98e.r2.dev/eat-a-banana/Eat%20a%20Banana%20Episode%20001.mp3',
    description: 'Welcome to our debut episode of our podcast, Eat a Banana! Take us or leave us, this how we come. No substitutions allowed.',
    youtubeUrl: 'https://youtu.be/QMvjZtDsWdw',
    duration: '01:11:26'
  }
];

export const sortedEpisodes = [...episodes].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
);
