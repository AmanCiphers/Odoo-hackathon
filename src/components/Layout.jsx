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
                    <NavLink to="/create-ticket">Manage Users</NavLink>
                    <NavLink to="/view-tickets">Manage Staff</NavLink>
                    <NavLink to="/history">Ticket Categories</NavLink>
                    <NavLink to="/loginPage">Log Out</NavLink>
                </nav>
            </aside>

            <main className="main-content">
                <header className="topbar">
                    <h2>Welcome, Admin</h2>
                </header>
                <section className="content">
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default Layout;
