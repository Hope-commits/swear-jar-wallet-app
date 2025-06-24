
import { Card } from "@/components/ui/card";

interface Transaction {
  id: number;
  name: string;
  date: string;
  amount: number;
  type: string;
}

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList = ({ transactions }: TransactionsListProps) => {
  return (
    <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Transactions</h3>
        <a href="#" className="text-blue-600 text-sm hover:text-blue-700">See All</a>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/30 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <span className={`text-sm font-semibold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{transaction.name}</div>
                <div className="text-xs text-gray-500">{transaction.type}</div>
                <div className="text-xs text-gray-400">{transaction.date}</div>
              </div>
            </div>
            
            <div className={`font-semibold ${
              transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TransactionsList;
