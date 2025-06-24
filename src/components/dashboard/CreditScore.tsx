
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CreditScoreProps {
  score: number;
}

const CreditScore = ({ score }: CreditScoreProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 1500) return "text-green-600";
    if (score >= 1200) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 1500) return "Excellent";
    if (score >= 1200) return "Good";
    return "Needs Improvement";
  };

  return (
    <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Language Score</h3>
        <a href="#" className="text-blue-600 text-sm hover:text-blue-700">See More</a>
      </div>
      
      <div className="text-center mb-6">
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Circular Progress */}
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(score / 2000) * 351.86} 351.86`}
            />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                {score}
              </div>
              <div className={`text-xs ${getScoreColor(score)}`}>
                {getScoreLabel(score)}
              </div>
            </div>
          </div>
          
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        size="sm"
      >
        Improve Score
      </Button>
    </Card>
  );
};

export default CreditScore;
