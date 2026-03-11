import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ToolDetail } from './pages/ToolDetail';
import { Login } from './pages/Login';
import { AdminDashboard } from './pages/AdminDashboard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-primary text-primary transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} onSearch={setSearchQuery} />} />
          <Route path="/tool/:id" element={<ToolDetail />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
