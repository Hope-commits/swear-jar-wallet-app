
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Target, Trophy, Gift, Heart } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      id: 1,
      title: "Weekly Word Limit",
      description: "Keep bad words under 50 this week",
      target: 50,
      current: 32,
      type: "weekly",
      reward: "R50 bonus to savings",
      icon: Target,
      color: "blue"
    },
    {
      id: 2,
      title: "Monthly Challenge",
      description: "Reduce bad words by 30% this month",
      target: 100,
      current: 68,
      type: "monthly",
      reward: "Movie night voucher",
      icon: Trophy,
      color: "yellow"
    },
    {
      id: 3,
      title: "Clean Day Streak",
      description: "7 consecutive days with 0 bad words",
      target: 7,
      current: 3,
      type: "streak",
      reward: "Favorite restaurant meal",
      icon: Gift,
      color: "green"
    },
    {
      id: 4,
      title: "Charity Donation",
      description: "Collect R500 for local charity",
      target: 500,
      current: 285,
      type: "charity",
      reward: "Certificate of appreciation",
      icon: Heart,
      color: "pink"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-600 bg-blue-100';
      case 'yellow': return 'text-yellow-600 bg-yellow-100';
      case 'green': return 'text-green-600 bg-green-100';
      case 'pink': return 'text-pink-600 bg-pink-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'yellow': return 'bg-yellow-500';
      case 'green': return 'bg-green-500';
      case 'pink': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Goals & Challenges</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Create New Goal
        </Button>
      </div>

      {/* Active Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const IconComponent = goal.icon;
          
          return (
            <Card key={goal.id} className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getIconColor(goal.color)}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                    <p className="text-sm text-gray-600">{goal.description}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getIconColor(goal.color)}`}>
                  {goal.type}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">
                    {goal.current} / {goal.target}
                    {goal.type === 'charity' ? ' R' : ' words'}
                  </span>
                </div>
                
                <Progress value={progress} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Reward:</span>
                  <span className="text-sm font-medium text-green-600">{goal.reward}</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-4"
                disabled={progress < 100}
              >
                {progress >= 100 ? 'Claim Reward' : `${Math.round(progress)}% Complete`}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Create Custom Goal */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Create Custom Goal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Goal Title
            </label>
            <Input placeholder="e.g., Weekend Clean Speech" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target
            </label>
            <Input type="number" placeholder="e.g., 10" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reward
            </label>
            <Input placeholder="e.g., Ice cream treat" />
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 mt-4">
          Create Goal
        </Button>
      </Card>

      {/* Family/Group Goals */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Family Goals</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Family Clean Week</h4>
              <p className="text-sm text-gray-600">All family members keep it clean for 7 days</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">3/4 members</div>
              <div className="text-xs text-gray-500">participating</div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">
            Invite Family Members
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Goals;
