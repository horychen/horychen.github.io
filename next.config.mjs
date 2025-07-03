import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs'
})

const isProd = process.env.NODE_ENV === 'production';

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/chenjh' : '',
  assetPrefix: isProd ? '/chenjh' : '',
  images: {
    unoptimized: true
  }
})