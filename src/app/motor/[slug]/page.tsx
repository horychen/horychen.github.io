import fs from 'fs';
import path from 'path';

export function generateStaticParams() {
  const dir = path.join(process.cwd(), 'public', 'motor-html');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .filter(d => fs.existsSync(path.join(dir, d.name, 'index.html')))
    .map(d => ({ slug: d.name }));
}

export default async function MotorPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  return (
    <iframe
      src={`/motor-html/${slug}/index.html`}
      className="w-full border-0"
      style={{ height: 'calc(100vh - 64px)' }}
    />
  );
}
