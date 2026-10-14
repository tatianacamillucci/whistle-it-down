import { fromRss } from './rss';
import { fromHackerNews } from './hn';
import { fromArxiv } from './arxiv';
import { fromGithubReleases } from './github';

export async function collectAll() {
  const [rss, hn, arxiv, gh] = await Promise.all([
    fromRss(),
    fromHackerNews(),
    fromArxiv(),
    fromGithubReleases()
  ]);

  // merge + dedup base
  const all = [...rss, ...hn, ...arxiv, ...gh];
  const seen = new Set<string>();
  return all.filter(it => {
    const key = (it.url || it.title).toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).sort((a,b) => (b.date.localeCompare(a.date)));
}
