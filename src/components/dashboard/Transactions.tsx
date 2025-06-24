
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download } from "lucide-react";
import { useState } from "react";

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = [
    { id: 1, date: "2024-01-15", time: "14:23", word: "****", category: "Mild", amount: 5.00, status: "Paid", method: "FNB" },
    { id: 2, date: "2024-01-15", time: "11:45", word: "****", category: "Moderate", amount: 10.00, status: "Paid", method: "FNB" },
    { id: 3, date: "2024-01-14", time: "16:30", word: "****", category: "Severe", amount: 20.00, status: "Paid", method: "FNB" },
    { id: 4, date: "2024-01-14", time: "09:15", word: "****", category: "Mild", amount: 5.00, status: "Pending", method: "FNB" },
    { id: 5, date: "2024-01-13", time: "18:22", word: "****", category: "Moderate", amount: 10.00, status: "Failed", method: "FNB" },
    { id: 6, date: "2024-01-13", time: "12:08", word: "****", category: "Mild", amount: 5.00, status: "Paid", method: "FNB" },
    { id: 7, date: "2024-01-12", time: "15:45", word: "****", category: "Severe", amount: 20.00, status: "Paid", method: "FNB" },
    { id: 8, date: "2024-01-12", time: "10:30", word: "****", category: "Mild", amount: 5.00, status: "Paid", method: "FNB" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      case 'Failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Mild': return 'text-yellow-600 bg-yellow-100';
      case 'Moderate': return 'text-orange-600 bg-orange-100';
      case 'Severe': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Transaction History</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </Card>

      {/* Transactions Table */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Date & Time</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Word</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Category</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-white/50">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{transaction.date}</div>
                      <div className="text-sm text-gray-500">{transaction.time}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-gray-600">{transaction.word}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(transaction.category)}`}>
                      {transaction.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-gray-900">R{transaction.amount.toFixed(2)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{transaction.method}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Transactions;
