import Link from 'next/link';

export const metadata = {
  title: 'Personal Reading Notes Organizer - Home',
  description: 'Organize your reading notes, highlights, and summaries locally.',
};

export default function HomePage() {
  return (
    <main className="container home-page">
      <section className="hero-section glass-card">
        <h1 className="gradient-text">Personal Reading Notes Organizer</h1>
        <p className="hero-intro">
          Never lose track of your reading insights again. This app helps you categorize, and organize your notes from books, articles, and online content.
        </p>
        <div className="hero-cta-grid">
          <div className="cta-item glass-card">
            <h2 className="gradient-text-small">The Problem</h2>
            <p>Readers often struggle to keep track of key insights, quotes, and summaries from their various readings across books, articles, and online content. This leads to lost information and difficulty recalling specific details when needed for reflection or reference later.</p>
          </div>
          <div className="cta-item glass-card">
            <h2 className="gradient-text-small">The Solution</h2>
            <p>This website provides a dedicated space for users to input, categorize, and organize their reading notes, highlights, and summaries. All data is stored locally in the user's browser, enabling easy search and retrieval without requiring external accounts or internet connectivity.</p>
          </div>
        </div>
        <div className="hero-buttons">
          <Link href="/add-note" className="btn gradient-btn">Add Your First Note</Link>
          <Link href="/all-notes" className="btn glass-btn">View All Notes</Link>
        </div>
      </section>
    </main>
  );
}
