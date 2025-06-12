import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const dir = path.join(process.cwd(), 'public/media/albums/gallery');
  const files = fs.readdirSync(dir).filter(file =>
    /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file)
  );
  return NextResponse.json(files);
} 