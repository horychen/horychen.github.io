import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const META: Record<string, { title: string; description: string }> = {
  'hand-skeleton-options': {
    title: 'WG110 Hand Skeleton',
    description: 'Kinematic visualization of the WG110 hand skeleton model.',
  },
  'robot-hand-kinematic': {
    title: 'Wuji Dexterous Hand',
    description: 'Robot kinematic diagram for the Wuji dexterous hand.',
  },
  'robot_glove_3d': {
    title: 'WUJI Glove 110 — 3D',
    description: '3D 数采手套运动学模型 (REP-155).',
  },
};

function getMotorPages() {
  const dir = path.join(process.cwd(), 'public', 'motor-html');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => fs.existsSync(path.join(dir, d.name, 'index.html')))
    .map((d) => ({
      slug: d.name,
      ...(META[d.name] ?? { title: d.name, description: '' }),
    }));
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
            <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {page.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {page.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
