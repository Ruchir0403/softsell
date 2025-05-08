import './styles/globals.css';
import { Metadata } from 'next';
import { metadata as siteMeta } from '../../metadata';
// Import ThemeProvider from next-themes
import { ThemeProvider } from 'next-themes';
import ThemeToggle from './components/ThemeToggle';

export const metadata: Metadata = siteMeta;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex">
        {/* Wrap application in ThemeProvider to enable dark mode */}
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <header className="p-4 flex justify-end">
            <ThemeToggle />
          </header>
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}