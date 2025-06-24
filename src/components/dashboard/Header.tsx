
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Circle } from "lucide-react";

interface HeaderProps {
  onLogout: () => void;
  currentView: string;
  setCurrentView: (view: 'dashboard' | 'analytics' | 'transactions' | 'payments' | 'goals' | 'settings' | 'help') => void;
}

const Header = ({ onLogout, currentView, setCurrentView }: HeaderProps) => {
  const navItems = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'transactions', label: 'Transactions' },
    { key: 'payments', label: 'Payments' },
    { key: 'goals', label: 'Goals' },
    { key: 'settings', label: 'Settings' },
    { key: 'help', label: 'Help' }
  ];

  return (
    <header className="backdrop-blur-sm bg-white/40 border-b border-white/20 relative z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Circle className="w-8 h-8 text-blue-600 fill-current" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                No Bad Words
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentView(item.key as any)}
                  className={`font-medium transition-colors ${
                    currentView === item.key
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search transactions..." 
                className="pl-10 w-64 bg-white/50 border-gray-200"
              />
            </div>
            
            <Button
              variant="outline"
              onClick={onLogout}
              className="bg-white/50 border-gray-200 hover:bg-white/70"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
