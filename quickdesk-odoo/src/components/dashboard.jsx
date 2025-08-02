import './dashboard.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="main-content">

        {/* Content */}
        <section className="content">
          <h3>Dashboard Overview</h3>
          <div className="cards">
            {/* You can add dashboard cards here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
