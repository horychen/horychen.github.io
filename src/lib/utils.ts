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
  // 兼容 next.config.mjs 的 basePath
  if (typeof window !== 'undefined') {
    // 浏览器端可以直接用 window.__NEXT_DATA__
    // const basePath = (window as any).__NEXT_DATA__?.props?.pageProps?.__N_SSG ? '' : (window as any).__NEXT_DATA__?.props?.pageProps?.basePath || '';
    // return `${basePath}${path}`;
    const basePath = 'https://faculty.sist.shanghaitech.edu.cn/chenjh';
    return `${basePath}${path}`;
  } else {
    // 服务端用 next/config
    // const { basePath = '' } = getConfig() || {};
    const basePath = 'https://faculty.sist.shanghaitech.edu.cn/chenjh';
    return `${basePath}${path}`;
  }
}
