const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const motorHtmlDir = path.join(rootDir, 'public', 'motor-html');
const outDir = path.join(rootDir, 'out');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function decodeTitle(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function readMotorPages() {
  if (!fs.existsSync(motorHtmlDir)) return [];

  return fs
    .readdirSync(motorHtmlDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => fs.existsSync(path.join(motorHtmlDir, entry.name, 'index.html')))
    .map((entry) => {
      const html = fs.readFileSync(path.join(motorHtmlDir, entry.name, 'index.html'), 'utf8');
      const title = decodeTitle(html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() || entry.name);

      return {
        slug: entry.name,
        title: title.replace(/\s+/g, ' '),
        href: `/motor-html/${encodeURIComponent(entry.name)}/`,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title, 'en'));
}

function pageShell({ title, body, extraHead = '' }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} - m&m lab</title>
  ${extraHead}
  <style>
    :root {
      color-scheme: light dark;
      --bg: #fafafa;
      --text: #171717;
      --muted: #5f6368;
      --border: #d8dee4;
      --card: #ffffff;
      --accent: #0969da;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #111111;
        --text: #f4f4f5;
        --muted: #a1a1aa;
        --border: #30363d;
        --card: #18181b;
        --accent: #58a6ff;
      }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.5;
    }
    header {
      position: sticky;
      top: 0;
      z-index: 1;
      border-bottom: 1px solid var(--border);
      background: color-mix(in srgb, var(--bg) 88%, transparent);
      backdrop-filter: blur(12px);
    }
    nav, main, footer {
      width: min(100%, 1080px);
      margin: 0 auto;
      padding-left: max(20px, env(safe-area-inset-left));
      padding-right: max(20px, env(safe-area-inset-right));
    }
    nav {
      min-height: 64px;
      display: flex;
      align-items: center;
      gap: 20px;
      overflow-x: auto;
      white-space: nowrap;
    }
    nav a {
      color: var(--muted);
      text-decoration: none;
      font-size: 14px;
    }
    nav a:first-child {
      color: var(--text);
      font-weight: 700;
      margin-right: auto;
      font-size: 16px;
    }
    main {
      padding-top: 44px;
      padding-bottom: 56px;
    }
    h1 {
      margin: 0;
      font-size: clamp(32px, 7vw, 48px);
      line-height: 1.08;
      letter-spacing: 0;
      text-align: center;
    }
    .lead {
      max-width: 680px;
      margin: 16px auto 32px;
      color: var(--muted);
      text-align: center;
      font-size: 17px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
      gap: 14px;
    }
    .card {
      display: flex;
      min-height: 84px;
      align-items: center;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--card);
      color: var(--text);
      padding: 18px;
      text-decoration: none;
      overflow-wrap: anywhere;
    }
    .card:focus-visible, .card:hover {
      border-color: var(--accent);
      outline: none;
    }
    .redirect {
      max-width: 680px;
      margin: 0 auto;
      text-align: center;
    }
    .redirect a { color: var(--accent); }
    footer {
      border-top: 1px solid var(--border);
      padding-top: 24px;
      padding-bottom: calc(24px + env(safe-area-inset-bottom));
      color: var(--muted);
      font-size: 14px;
    }
  </style>
</head>
<body>
  <header>
    <nav aria-label="Site navigation">
      <a href="/">m&m lab</a>
      <a href="/courses/">Courses</a>
      <a href="/docs/">Docs</a>
      <a href="/alumni/">Alumni</a>
      <a href="/#pi">PI</a>
      <a href="/#gallery">Gallery</a>
      <a href="/#contact">Contact</a>
    </nav>
  </header>
  ${body}
  <footer>2026 © m&m lab.</footer>
</body>
</html>
`;
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

function writeMotorIndex(pages) {
  const cards = pages
    .map((page) => `<a class="card" href="${page.href}">${escapeHtml(page.title)}</a>`)
    .join('\n      ');

  const html = pageShell({
    title: 'Motor Demos',
    body: `<main>
    <h1>Motor Demos</h1>
    <p class="lead">Interactive visualizations for motor and motion control research.</p>
    <div class="grid">
      ${cards}
    </div>
  </main>`,
  });

  writeFile(path.join(outDir, 'motor', 'index.html'), html);
  writeFile(path.join(outDir, 'motor.html'), html);
}

function writeRedirectPages(pages) {
  pages.forEach((page) => {
    const html = pageShell({
      title: page.title,
      extraHead: `<meta http-equiv="refresh" content="0; url=${page.href}">
  <link rel="canonical" href="${page.href}">`,
      body: `<main>
    <div class="redirect">
      <h1>${escapeHtml(page.title)}</h1>
      <p class="lead">Opening the standalone motor demo.</p>
      <p><a href="${page.href}">Open demo</a></p>
    </div>
  </main>`,
    });

    writeFile(path.join(outDir, 'motor', page.slug, 'index.html'), html);
    writeFile(path.join(outDir, 'motor', `${page.slug}.html`), html);
  });
}

const pages = readMotorPages();
writeMotorIndex(pages);
writeRedirectPages(pages);
console.log(`Wrote static motor index and ${pages.length} redirect pages.`);
