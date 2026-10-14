import Parser from 'rss-parser';

const parser = new Parser();

const FEEDS = [
  // aggiungi i tuoi feed preferiti
  'https://openai.com/blog/rss.xml',
  // 'https://www.anthropic.com/news/rss.xml' (se disponibile)
];

export async function fromRss() {
  const out: any[] = [];
  for (const url of FEEDS) {
    try {
      const feed = await parser.parseURL(url);
      for (const item of feed.items.slice(0, 20)) {
        out.push({
          id: `${url}::${item.link}`,
          source: 'RSS',
          title: item.title ?? '',
          url: item.link ?? '',
          date: item.isoDate ?? new Date().toISOString(),
          summary: item.contentSnippet ?? item.content ?? ''
        });
      }
    } catch (e) {
      console.error('RSS failed:', url, e);
    }
  }
  return out;
}
