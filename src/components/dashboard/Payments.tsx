
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Smartphone, Building, Plus } from "lucide-react";

const Payments = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Payment Methods</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Payment Method
        </Button>
      </div>

      {/* FNB Integration Status */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">FNB Bank Integration</h3>
              <p className="text-sm text-gray-600">Connect your FNB account for seamless payments</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-green-600 font-medium">Connected</div>
            <div className="text-xs text-gray-500">Last sync: 5 mins ago</div>
          </div>
        </div>
      </Card>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">FNB Cheque Account</h3>
              <p className="text-sm text-gray-600">•••• •••• •••• 4455</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Available Balance:</span>
              <span className="font-medium">R12,450.50</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Daily Limit:</span>
              <span className="font-medium">R500.00</span>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            Set as Primary
          </Button>
        </Card>

        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">FNB eWallet</h3>
              <p className="text-sm text-gray-600">Mobile payments</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Available Balance:</span>
              <span className="font-medium">R1,250.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Transaction Limit:</span>
              <span className="font-medium">R100.00</span>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            Configure
          </Button>
        </Card>
      </div>

      {/* Payment Settings */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Payment Settings</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default Fine Amount (Mild)
              </label>
              <Input type="number" placeholder="5.00" defaultValue="5.00" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default Fine Amount (Moderate)
              </label>
              <Input type="number" placeholder="10.00" defaultValue="10.00" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default Fine Amount (Severe)
              </label>
              <Input type="number" placeholder="20.00" defaultValue="20.00" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Daily Spending Limit
              </label>
              <Input type="number" placeholder="100.00" defaultValue="100.00" />
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Save Settings
          </Button>
        </div>
      </Card>

      {/* API Configuration Note */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">FNB API Integration</h3>
        <p className="text-sm text-gray-600 mb-4">
          To enable real-time payments through FNB, you'll need to configure your API keys securely. 
          This requires connecting to Supabase for secure key storage and payment processing.
        </p>
        <Button variant="outline">
          Configure API Keys
        </Button>
      </Card>
    </div>
  );
};

export default Payments;
