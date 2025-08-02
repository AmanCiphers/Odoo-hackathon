// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/dashboard';
import CreateTicket from './components/CreateTicket';
import ViewTickets from './components/ViewTickets';
import TicketHistory from './components/TicketHistory';
import LoginPage from './components/loginPage';
import SignupPage from './components/SignupPage';
import Admin from './components/admin';
import Staff from './components/staff'

function App() {
  return (
    <Routes>
      {/* Public routes (no sidebar) */}
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Staff" element={<Staff />} />

      {/* Dashboard and other routes inside Layout with sidebar */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/view-tickets" element={<ViewTickets />} />
        <Route path="/history" element={<TicketHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
