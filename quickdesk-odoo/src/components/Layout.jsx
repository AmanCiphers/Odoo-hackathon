// src/components/Layout.jsx
import { Outlet, NavLink } from 'react-router-dom';
import './dashboard.css'; // Make sure this file exists

const Layout = () => {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2 className="logo">Dashboard</h2>
                <nav className="nav-links">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/create-ticket">Create Ticket</NavLink>
                    <NavLink to="/view-tickets">View Tickets</NavLink>
                    <NavLink to="/history">History</NavLink>
                    <NavLink to="/loginPage">Login</NavLink>
                </nav>
            </aside>

            <main className="main-content">
                <header className="topbar">
                    <h2>Welcome, user</h2>
                </header>
                <section className="content">
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default Layout;
