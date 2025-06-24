
import { Card } from "@/components/ui/card";

interface WalletCardProps {
  balance: number;
}

const WalletCard = ({ balance }: WalletCardProps) => {
  return (
    <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-2">Total Balance</h2>
          <div className="text-4xl font-bold text-gray-900">
            ${balance.toLocaleString()}
            <span className="text-lg text-gray-500">.24</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-gray-500 mb-1">This Month</div>
          <div className="text-green-600 font-semibold">+2.5%</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 font-semibold text-sm">↑</span>
          </div>
          <div>
            <div className="text-sm text-gray-500">Saved</div>
            <div className="font-semibold text-gray-900">$2,450</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-600 font-semibold text-sm">↓</span>
          </div>
          <div>
            <div className="text-sm text-gray-500">Fines</div>
            <div className="font-semibold text-gray-900">$185</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-600 mb-3">My Cards</h3>
        <div className="flex space-x-4">
          {/* Card 1 */}
          <div className="flex-1 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white relative overflow-hidden">
            <div className="absolute top-2 right-2 text-xs opacity-80">VISA</div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xs opacity-80">•••• •••• •••• 4455</div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex-1 h-32 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 text-white relative overflow-hidden">
            <div className="absolute top-2 right-2 text-xs opacity-80">Mastercard</div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xs opacity-80">•••• •••• •••• 6789</div>
            </div>
          </div>
          
          {/* Add Card */}
          <div className="w-16 h-32 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-2xl">+</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WalletCard;
