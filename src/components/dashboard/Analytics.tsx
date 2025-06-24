
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { useState } from "react";

const Analytics = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const weeklyData = [
    { day: 'Mon', words: 12, fines: 60 },
    { day: 'Tue', words: 8, fines: 40 },
    { day: 'Wed', words: 15, fines: 75 },
    { day: 'Thu', words: 6, fines: 30 },
    { day: 'Fri', words: 20, fines: 100 },
    { day: 'Sat', words: 4, fines: 20 },
    { day: 'Sun', words: 10, fines: 50 },
  ];

  const monthlyData = [
    { month: 'Jan', words: 245, fines: 1225 },
    { month: 'Feb', words: 180, fines: 900 },
    { month: 'Mar', words: 320, fines: 1600 },
    { month: 'Apr', words: 150, fines: 750 },
    { month: 'May', words: 280, fines: 1400 },
    { month: 'Jun', words: 190, fines: 950 },
  ];

  const categoryData = [
    { name: 'Mild', value: 45, color: '#FFB800' },
    { name: 'Moderate', value: 30, color: '#FF6B35' },
    { name: 'Severe', value: 25, color: '#DC2626' },
  ];

  const todayCount = 8;
  const weekCount = 75;
  const monthCount = 320;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">{todayCount}</div>
            <div className="text-sm text-gray-600">Words Today</div>
            <div className="text-xs text-gray-500 mt-1">R{todayCount * 5} in fines</div>
          </div>
        </Card>

        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">{weekCount}</div>
            <div className="text-sm text-gray-600">Words This Week</div>
            <div className="text-xs text-gray-500 mt-1">R{weekCount * 5} in fines</div>
          </div>
        </Card>

        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{monthCount}</div>
            <div className="text-sm text-gray-600">Words This Month</div>
            <div className="text-xs text-gray-500 mt-1">R{monthCount * 5} in fines</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Chart */}
        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Weekly Progress</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Bar dataKey="words" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Monthly Trend */}
        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Monthly Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Line type="monotone" dataKey="words" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Category Breakdown */}
        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Word Categories</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Calendar */}
        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Calendar View</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
          <div className="mt-4 text-sm text-gray-600">
            Selected: {selectedDate?.toDateString() || 'No date selected'}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
