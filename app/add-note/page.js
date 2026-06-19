"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function AddNotePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage('Title and content cannot be empty.');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      content,
      category: category || 'Uncategorized',
      date: new Date().toISOString()
    };

    const existingNotes = JSON.parse(localStorage.getItem('readingNotes') || '[]');
    localStorage.setItem('readingNotes', JSON.stringify([...existingNotes, newNote]));

    setTitle('');
    setContent('');
    setCategory('');
    setMessage('Note added successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <main className="container">
      <h1 className="gradient-text">Add a New Note</h1>
      <form onSubmit={handleSubmit} className="glass-card">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., The Subtle Art of Not Giving a F*ck - Chapter 3"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content / Summary / Key Insight</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write down your thoughts, quotes, or summary here..."
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category (Optional)</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Self-help, Philosophy, Article, Tech"
          />
        </div>
        <button type="submit" className="btn gradient-btn">Add Note</button>
        {message && <p className="message" style={{marginTop: '1.5rem', textAlign: 'center', color: message.includes('successfully') ? '#4CAF50' : '#f44336'}}>{message}</p>}
      </form>
      <div style={{textAlign: 'center', marginTop: '2rem'}}>
        <Link href="/all-notes" className="btn glass-btn">View All Notes</Link>
      </div>
    </main>
  );
}
