// src/components/TicketHistory.jsx
import './history.css';

const ticketHistory = [
    {
        id: 1,
        action: 'Created',
        ticket: 'Login issue',
        date: '2025-07-30',
        by: 'You'
    },
    {
        id: 2,
        action: 'Updated status to In Progress',
        ticket: 'Bug in dashboard',
        date: '2025-07-31',
        by: 'Admin'
    },
    {
        id: 3,
        action: 'Closed',
        ticket: 'Feature request: Dark Mode',
        date: '2025-08-01',
        by: 'You'
    }
];

const TicketHistory = () => {
    return (
        <div className="history-container">
            <h2>Ticket History</h2>
            <ul className="history-list">
                {ticketHistory.map((entry) => (
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
