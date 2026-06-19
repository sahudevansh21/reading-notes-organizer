"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SearchNotesPage() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('readingNotes') || '[]');
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredNotes(notes);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const results = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          note.content.toLowerCase().includes(lowerCaseSearchTerm) ||
          note.category.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredNotes(results);
    }
  }, [searchTerm, notes]);

  const handleDeleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const updatedNotes = notes.filter(note => note.id !== id);
      localStorage.setItem('readingNotes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes); // Update the main notes list
      // filteredNotes will be updated by the useEffect hook
    }
  };

  return (
    <main className="container">
      <h1 className="gradient-text">Search Your Notes</h1>
      <div className="form-group search-input-group glass-card" style={{padding: '1rem', marginBottom: '3rem'}}>
        <label htmlFor="search" style={{display: 'none'}}>Search Notes</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title, content, or category..."
        />
      </div>

      {filteredNotes.length === 0 && searchTerm !== '' ? (
        <div className="empty-state glass-card">
          <p>No notes found matching "{searchTerm}".</p>
          <Link href="/add-note" className="btn gradient-btn" style={{marginTop: '1.5rem'}}>Add a New Note</Link>
        </div>
      ) : filteredNotes.length === 0 && searchTerm === '' ? (
        <div className="empty-state glass-card">
          <p>You haven't added any notes yet.</p>
          <Link href="/add-note" className="btn gradient-btn" style={{marginTop: '1.5rem'}}>Add Your First Note</Link>
        </div>
      ) : (
        <div className="notes-grid">
          {filteredNotes.map((note) => (
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
