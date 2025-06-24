
import { useState } from "react";
import Header from "./Header";
import WalletCard from "./WalletCard";
import TransactionsList from "./TransactionsList";
import ExpenseChart from "./ExpenseChart";
import CreditScore from "./CreditScore";
import { Button } from "@/components/ui/button";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [totalBalance] = useState(31180.24);
  const [recentTransactions] = useState([
    { id: 1, name: "Apple Inc", date: "14 Dec 2023", amount: -45.00, type: "Fine for saying 'damn'" },
    { id: 2, name: "Jerry Helfer", date: "13 Dec 2023", amount: +120.00, type: "Refund from challenge" },
    { id: 3, name: "Diabete", date: "13 Dec 2023", amount: -350.00, type: "Weekly swear jar donation" },
    { id: 4, name: "Eva Food", date: "12 Dec 2023", amount: -462.00, type: "Monthly bad words total" },
    { id: 5, name: "Paypal Payment", date: "10 Dec 2023", amount: +102.00, type: "Challenge reward" },
  ]);

  const handleWordDetected = () => {
    console.log("Bad word detected! Charging fine...");
    // Here you would implement the actual word detection and charging logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/10 to-pink-100/10" />
      
      <Header onLogout={onLogout} />
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <WalletCard balance={totalBalance} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExpenseChart />
              <CreditScore score={1620} />
            </div>
            
            {/* Test Button for Word Detection */}
            <div className="backdrop-blur-sm bg-white/40 rounded-3xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Test Bad Word Detection</h3>
              <Button 
                onClick={handleWordDetected}
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
              >
                Simulate Bad Word (Test Fine)
              </Button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <TransactionsList transactions={recentTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
