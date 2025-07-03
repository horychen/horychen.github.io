import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import getConfig from 'next/config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 自动为静态资源路径加上 basePath 前缀，适配 next.config.mjs 的 basePath 设置。
 * @param path 静态资源的相对路径，如 /media/xxx.jpg
 * @returns 加上 basePath 的完整路径
 */
export function withBasePath(path: string): string {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? 'https://faculty.sist.shanghaitech.edu.cn/chenjh' : '';
    return `${basePath}${path}`;
}
