/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import "./globals.css";
import 'katex/dist/katex.min.css';
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import 'nextra-theme-docs/style.css'


export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: '%s - m&m lab'
  },
  description: 'm&m lab: motor and motion control lab',
  applicationName: 'm&m lab',
  generator: 'Next.js',
  appleWebApp: {
    title: 'm&m lab'
  },
  other: {
    'msapplication-TileImage': '/icon.png',
    'msapplication-TileColor': '#fff'
  },
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>m&m lab</b>
        </div>
      }
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer>{new Date().getFullYear()} © m&m lab.</Footer>}
          editLink={<></>}
          feedback={{ content: <></>, link: '', labels: '' }}
          docsRepositoryBase="https://github.com/motor-and-motion-control-lab/mmlabsite"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
