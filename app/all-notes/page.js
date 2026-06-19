"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AllNotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('readingNotes') || '[]');
    setNotes(storedNotes);
  }, []);

  const handleDeleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const updatedNotes = notes.filter(note => note.id !== id);
      localStorage.setItem('readingNotes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    }
  };

  return (
    <main className="container">
      <h1 className="gradient-text">All Your Notes</h1>
      {notes.length === 0 ? (
        <div className="empty-state glass-card">
          <p>You haven't added any notes yet.</p>
          <Link href="/add-note" className="btn gradient-btn" style={{marginTop: '1.5rem'}}>Add Your First Note</Link>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <div key={note.id} className="note-card glass-card">
              <div>
                <h3>{note.title}</h3>
                <p>{note.content.substring(0, 150)}{note.content.length > 150 ? '...' : ''}</p>
                <span className="note-category">{note.category}</span>
              </div>
              <div className="note-card-actions">
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
