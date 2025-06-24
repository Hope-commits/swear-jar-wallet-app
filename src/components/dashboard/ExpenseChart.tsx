
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const ExpenseChart = () => {
  const data = [
    { name: '1 Dec', value: 65 },
    { name: '2 Dec', value: 45 },
    { name: '3 Dec', value: 78 },
    { name: '4 Dec', value: 52 },
    { name: '5 Dec', value: 88 },
    { name: '6 Dec', value: 35 },
    { name: '7 Dec', value: 92 },
    { name: '8 Dec', value: 58 },
    { name: '9 Dec', value: 75 },
    { name: '10 Dec', value: 42 },
  ];

  return (
    <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Bad Words</h3>
          <p className="text-sm text-gray-600">Daily count this month</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">$2046.44</div>
          <div className="text-sm text-gray-500">Total fines</div>
        </div>
      </div>
      
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis hide />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={false}
              fill="url(#gradient)"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ExpenseChart;
