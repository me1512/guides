import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { FiBookOpen } from "react-icons/fi";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
  <Banner storageKey='dismissedBanner'>
    <Link href={"https://hnvtx.vercel.app"}>hnvtx 2.0 is released 🎉</Link>
  </Banner>
);
const navbar = (
  <Navbar
    logo={<b>HNVTX</b>}
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>
    <div className='max-w-6xl mx-auto text-center'>
      <div className='flex items-center justify-center space-x-3 mb-6'>
        <div className='w-8 h-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-gray-400 dark:via-gray-700 dark:to-gray-900 rounded-lg flex items-center justify-center shadow'>
          <FiBookOpen className='w-5 h-5 text-white dark:text-gray-900' />
        </div>
        <span className='text-2xl font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-gray-100 dark:via-gray-400 dark:to-gray-700 bg-clip-text text-transparent'>dochnvtx</span>
      </div>
    </div>
  </Footer>
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      dir='ltr'
      suppressHydrationWarning>
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased min-h-screen'>
        <div className='flex flex-col min-h-screen'>
          <ThemeProvider attribute="class">
          <Layout
            banner={banner}
            navbar={navbar}
            pageMap={(await getPageMap()) ?? { data: [] }}
            footer={footer}
            sidebar={{ autoCollapse: true }}
          >
            <div className='flex-1'>
              {children}
            </div>
          </Layout>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
