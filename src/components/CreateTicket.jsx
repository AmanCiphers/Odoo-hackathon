// src/components/CreateTicket.jsx
import './create-ticket.css';

const CreateTicket = () => {
    return (
        <div className="create-ticket-container">
            <h2>Create Support Ticket</h2>
            <form className="ticket-form">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Enter ticket subject" />

                <label htmlFor="description">Description</label>
                <textarea id="description" placeholder="Describe the issue..."></textarea>

                <label htmlFor="priority">Priority</label>
                <select id="priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button type="submit">Submit Ticket</button>
            </form>
        </div>
    );
};

export default CreateTicket;
