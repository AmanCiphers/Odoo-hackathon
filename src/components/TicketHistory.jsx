// src/components/TicketHistory.jsx
import { useState } from 'react';
import './history.css';

const initialHistory = [
    { id: 1, action: 'Created', ticket: 'Login issue', date: '2025-07-30', by: 'You' },
    { id: 2, action: 'Updated status to In Progress', ticket: 'Bug in dashboard', date: '2025-07-31', by: 'Admin' },
    { id: 3, action: 'Closed', ticket: 'Feature request: Dark Mode', date: '2025-08-01', by: 'You' },
];

const TicketHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');
    const [filterBy, setFilterBy] = useState('all');

    // Filter + Search + Sort Logic
    const filteredHistory = initialHistory
        .filter(entry => {
            const matchesSearch = entry.ticket.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter =
                filterBy === 'all' ||
                entry.action.toLowerCase().includes(filterBy) ||
                entry.by.toLowerCase().includes(filterBy);
            return matchesSearch && matchesFilter;
        })
        .sort((a, b) => {
            if (sortOrder === 'newest') {
                return new Date(b.date) - new Date(a.date);
            } else {
                return new Date(a.date) - new Date(b.date);
            }
        });

    return (
        <div className="history-container">
            <h2>Ticket History</h2>

            {/* Search, Sort, Filter */}
            <div className="history-controls">
                <input
                    type="text"
                    placeholder="Search by ticket name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="newest">Sort: Newest First</option>
                    <option value="oldest">Sort: Oldest First</option>
                </select>

                <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                    <option value="all">Filter: All</option>
                    <option value="created">Created</option>
                    <option value="updated">Updated</option>
                    <option value="closed">Closed</option>
                </select>
            </div>

            {/* History Entries */}
            <ul className="history-list">
                {filteredHistory.map((entry) => (
                    <li key={entry.id} className="history-entry">
                        <div className="history-date">{entry.date}</div>
                        <div className="history-details">
                            <strong>{entry.action}</strong> — <em>{entry.ticket}</em> by {entry.by}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketHistory;
