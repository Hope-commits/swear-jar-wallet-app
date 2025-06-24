
import { useState } from "react";
import LoginPage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import Dashboard from "../components/dashboard/Dashboard";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'register' | 'dashboard'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  if (isAuthenticated && currentPage === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (currentPage === 'register') {
    return (
      <RegisterPage 
        onBack={() => setCurrentPage('login')}
        onRegister={handleLogin}
      />
    );
  }

  return (
    <LoginPage 
      onLogin={handleLogin}
      onRegister={() => setCurrentPage('register')}
    />
  );
};

export default Index;
