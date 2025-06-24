
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Mic, Volume2 } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account and app preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <User className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Profile Settings</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input defaultValue="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input type="email" defaultValue="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input defaultValue="+27 82 123 4567" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Language
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>English</option>
              <option>Afrikaans</option>
              <option>Zulu</option>
              <option>Xhosa</option>
            </select>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 mt-4">
          Save Profile
        </Button>
      </Card>

      {/* Notification Settings */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Bell className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Daily Summary</h4>
              <p className="text-sm text-gray-600">Get daily reports of your progress</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Goal Achievements</h4>
              <p className="text-sm text-gray-600">Notifications when you reach goals</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Payment Confirmations</h4>
              <p className="text-sm text-gray-600">Confirm when fines are charged</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Weekly Challenges</h4>
              <p className="text-sm text-gray-600">New challenge notifications</p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Detection Settings */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Mic className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Word Detection</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Voice Detection</h4>
              <p className="text-sm text-gray-600">Monitor spoken words</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Text Detection</h4>
              <p className="text-sm text-gray-600">Monitor typed words</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Sensitivity Level</h4>
              <p className="text-sm text-gray-600">Adjust detection strictness</p>
            </div>
            <select className="w-32 px-3 py-2 border border-gray-300 rounded-md">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Privacy & Security */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Privacy & Security</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Data Sharing</h4>
              <p className="text-sm text-gray-600">Share anonymous usage data</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Family Mode</h4>
              <p className="text-sm text-gray-600">Enable parental monitoring</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Extra security for your account</p>
            </div>
            <Switch />
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <Button variant="outline" className="mr-2">
            Change Password
          </Button>
          <Button variant="outline">
            Download Data
          </Button>
        </div>
      </Card>

      {/* Custom Word Lists */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Custom Word Lists</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Custom Words (comma separated)
            </label>
            <Input placeholder="word1, word2, word3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excluded Words (won't trigger fines)
            </label>
            <Input placeholder="allowed1, allowed2" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Update Word Lists
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
