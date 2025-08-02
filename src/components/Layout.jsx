// src/components/Layout.jsx
import { Outlet, NavLink } from 'react-router-dom';
import './layout.css'; // Make sure this file exists

const Layout = () => {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2 className="logo">Dashboard</h2>
                <nav className="nav-links">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/create-ticket">Report an Issue</NavLink>
                    <NavLink to="/view-tickets">Tickets Status</NavLink>
                    <NavLink to="/history">Ticket History</NavLink>
                    <NavLink to="/loginPage">Login</NavLink>
                </nav>
            </aside>

            <main className="main-content">
                <header className="topbar">
                    <h2>Welcome, Kabir</h2>
                </header>
                <section className="content">
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default Layout;
