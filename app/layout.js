import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Personal Reading Notes Organizer',
  description: 'Organize your reading notes, highlights, and summaries locally without external accounts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar glass-card">
          <Link href="/" className="navbar-brand gradient-text">Reading Notes</Link>
          <div className="navbar-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/add-note" className="nav-link">Add Note</Link>
            <Link href="/all-notes" className="nav-link">All Notes</Link>
            <Link href="/search-notes" className="nav-link">Search Notes</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
