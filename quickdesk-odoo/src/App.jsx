// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/dashboard';
import CreateTicket from './components/CreateTicket';
import ViewTickets from './components/ViewTickets';
import TicketHistory from './components/TicketHistory';
import LoginPage from './components/loginPage';
import SignupPage from './components/signupPage';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected layout with sidebar */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/view-tickets" element={<ViewTickets />} />
        <Route path="/history" element={<TicketHistory />} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
