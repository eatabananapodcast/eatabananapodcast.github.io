import { sortedEpisodes } from '../data/episodes';

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export function GET(context) {
  const site = context.site?.toString().replace(/\/$/, '') ?? 'https://eatabananapodcast.com';
  const items = sortedEpisodes.map((episode) => `
    <item>
      <title>${escapeXml(episode.title)}</title>
      <link>${site}/episodes/${episode.slug}/</link>
      <guid isPermaLink="true">${site}/episodes/${episode.slug}/</guid>
      <pubDate>${new Date(`${episode.date}T12:00:00`).toUTCString()}</pubDate>
      <description>${escapeXml(episode.description)}</description>
      <enclosure url="${escapeXml(episode.audioUrl)}" type="audio/mpeg" />
      <itunes:author>Eat a Banana</itunes:author>
      <itunes:summary>${escapeXml(episode.description)}</itunes:summary>
      ${episode.duration ? `<itunes:duration>${escapeXml(episode.duration)}</itunes:duration>` : ''}
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
    <channel>
      <title>Eat a Banana</title>
      <link>${site}</link>
      <description>Conversations about the things that make a life interesting.</description>
      <language>en-us</language>
      <itunes:author>Eat a Banana</itunes:author>
      <itunes:summary>Conversations about the things that make a life interesting.</itunes:summary>
      <itunes:explicit>false</itunes:explicit>
      <itunes:owner><itunes:name>Eat a Banana</itunes:name><itunes:email>hello@eatabananapodcast.com</itunes:email></itunes:owner>
      <itunes:category text="Society &amp; Culture" />${items}
    </channel>
  </rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
