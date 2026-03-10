import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function getMotorPages() {
  const dir = path.join(process.cwd(), 'public', 'motor-html');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => fs.existsSync(path.join(dir, d.name, 'index.html')))
    .map((d) => {
      const html = fs.readFileSync(path.join(dir, d.name, 'index.html'), 'utf-8');
      const titleMatch = html.match(/<title>(.*?)<\/title>/i);
      return {
        slug: d.name,
        title: titleMatch?.[1] ?? d.name,
      };
    });
}

export default function MotorIndex() {
  const pages = getMotorPages();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4">Motor Demos</h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
        Interactive visualizations for motor and motion control research.
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/motor/${page.slug}/`}
            className="group block rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition-all hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {page.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
