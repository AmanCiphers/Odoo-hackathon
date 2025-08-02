// src/components/ViewTickets.jsx
import './view-tickets.css';

const dummyTickets = [
    {
        id: 1,
        subject: "Login not working",
        status: "Open",
        priority: "High",
        date: "2025-08-01",
    },
    {
        id: 2,
        subject: "Bug in dashboard",
        status: "In Progress",
        priority: "Medium",
        date: "2025-08-02",
    },
    {
        id: 3,
        subject: "Feature request: Dark Mode",
        status: "Closed",
        priority: "Low",
        date: "2025-08-02",
    },
];

const ViewTickets = () => {
    return (
        <div className="view-tickets-container">
            <h2>Open Tickets</h2>
            <table className="tickets-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyTickets.map((ticket) => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.subject}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTickets;
