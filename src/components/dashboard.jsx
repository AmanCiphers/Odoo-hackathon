import './dashboard.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
    

      {/* Main Content */}
      <main className="main-content">

        {/* Content */}
        <section className="content">
          <h3>Dashboard Overview</h3>
          <div className="cards">
            <div className="profile-section">
              <h4>👤 Profile Details</h4>
              <ul className="profile-details">
                <li><strong>Name:</strong> Kabir Singh</li>
                <li><strong>Email:</strong> kabir@example.com</li>
                <li><strong>Logged in as:</strong> User</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
