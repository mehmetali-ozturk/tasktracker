"use client";
import { useState } from 'react';
import Link from 'next/link';

// Mock data for reports charts
const mockTaskCompletionData = [
  { date: 'Feb 26', completed: 5, added: 8 },
  { date: 'Feb 27', completed: 7, added: 4 },
  { date: 'Feb 28', completed: 3, added: 6 },
  { date: 'Mar 1', completed: 8, added: 7 },
  { date: 'Mar 2', completed: 10, added: 5 },
  { date: 'Mar 3', completed: 6, added: 3 },
  { date: 'Mar 4', completed: 9, added: 6 },
  { date: 'Mar 5', completed: 4, added: 8 },
];

// Mock data for task distribution
const mockTaskDistribution = [
  { category: 'Design', count: 14, color: 'bg-purple-500' },
  { category: 'Development', count: 24, color: 'bg-blue-500' },
  { category: 'Marketing', count: 18, color: 'bg-green-500' },
  { category: 'Research', count: 10, color: 'bg-pink-500' },
  { category: 'Planning', count: 8, color: 'bg-yellow-500' },
];

// Mock data for team productivity
const mockTeamProductivity = [
  { member: 'Alex Kim', completed: 23, avatar: 'AK' },
  { member: 'Jamie Smith', completed: 18, avatar: 'JS' },
  { member: 'Robin Taylor', completed: 26, avatar: 'RT' },
  { member: 'Blake Thompson', completed: 21, avatar: 'BT' },
];

// Mock data for overdue tasks
const mockOverdueTasks = [
  { 
    id: 1, 
    title: 'Update user documentation', 
    board: 'Website Redesign',
    assignee: 'AK',
    dueDate: '2025-03-01',
    daysOverdue: 4
  },
  { 
    id: 2, 
    title: 'Finalize Q1 marketing budget', 
    board: 'Marketing Campaign',
    assignee: 'JS',
    dueDate: '2025-03-02',
    daysOverdue: 3
  },
  { 
    id: 3, 
    title: 'Review competitor analysis', 
    board: 'Product Roadmap',
    assignee: 'RT',
    dueDate: '2025-03-03',
    daysOverdue: 2
  },
];

export default function Reports() {
  const [dateRange, setDateRange] = useState('week'); // 'week', 'month', 'quarter'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeReport, setActiveReport] = useState('overview'); // 'overview', 'productivity', 'tasks', 'time'
  
  // Calculate total tasks count
  const totalTasks = mockTaskDistribution.reduce((acc, item) => acc + item.count, 0);
  
  // Calculate percentages for distribution chart
  const calculatePercentage = (count: number) => {
    return Math.round((count / totalTasks) * 100);
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-black/20 shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-2xl font-bold text-white hover:text-purple-400 transition">
                TaskTracker Pro
              </Link>
              <nav className="hidden md:flex space-x-4">
                <Link href="/dashboard" className="text-gray-300 hover:text-white px-1 py-1">
                  Dashboard
                </Link>
                <Link href="/boards" className="text-gray-300 hover:text-white px-1 py-1">
                  Boards
                </Link>
                <Link href="/calendar" className="text-gray-300 hover:text-white px-1 py-1">
                  Calendar
                </Link>
                <Link href="/reports" className="text-purple-400 border-b-2 border-purple-400 px-1 py-1">
                  Reports
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative md:w-64">
                <input 
                  type="text" 
                  placeholder="Search reports..." 
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="relative">
                <button className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <span className="absolute -top-1 -right-1 bg-purple-600 text-xs text-white w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
                  US
                </div>
                <span className="hidden md:inline text-sm text-white">User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Title & Date Range Selection */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Reports & Analytics</h1>
            <p className="text-gray-300">Track your team's performance and project progress</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex border border-white/10 rounded-md overflow-hidden">
              <button 
                className={`px-4 py-2 ${dateRange === 'week' ? 'bg-purple-600/80 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'} transition`}
                onClick={() => setDateRange('week')}
              >
                Week
              </button>
              <button 
                className={`px-4 py-2 ${dateRange === 'month' ? 'bg-purple-600/80 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'} transition`}
                onClick={() => setDateRange('month')}
              >
                Month
              </button>
              <button 
                className={`px-4 py-2 ${dateRange === 'quarter' ? 'bg-purple-600/80 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'} transition`}
                onClick={() => setDateRange('quarter')}
              >
                Quarter
              </button>
            </div>
          </div>
        </div>
        
        {/* Report Navigation */}
        <div className="mb-6 flex flex-nowrap overflow-x-auto pb-2 hide-scrollbar">
          <button
            className={`px-4 py-2 rounded-md backdrop-blur-sm border whitespace-nowrap mr-2 ${
              activeReport === 'overview'
                ? 'bg-purple-600/80 text-white border-purple-500/30' 
                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
            } transition`}
            onClick={() => setActiveReport('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 rounded-md backdrop-blur-sm border whitespace-nowrap mr-2 ${
              activeReport === 'productivity'
                ? 'bg-purple-600/80 text-white border-purple-500/30' 
                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
            } transition`}
            onClick={() => setActiveReport('productivity')}
          >
            Team Productivity
          </button>
          <button
            className={`px-4 py-2 rounded-md backdrop-blur-sm border whitespace-nowrap mr-2 ${
              activeReport === 'tasks'
                ? 'bg-purple-600/80 text-white border-purple-500/30' 
                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
            } transition`}
            onClick={() => setActiveReport('tasks')}
          >
            Task Analysis
          </button>
          <button
            className={`px-4 py-2 rounded-md backdrop-blur-sm border whitespace-nowrap mr-2 ${
              activeReport === 'time'
                ? 'bg-purple-600/80 text-white border-purple-500/30' 
                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
            } transition`}
            onClick={() => setActiveReport('time')}
          >
            Time Tracking
          </button>
        </div>

        {/* Overview Report */}
        {activeReport === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Completed Tasks</p>
                    <h3 className="text-2xl font-bold text-white">52</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +12% from last week
                </p>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Overdue Tasks</p>
                    <h3 className="text-2xl font-bold text-white">7</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-500/20 text-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  +3 from last week
                </p>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Completion Rate</p>
                    <h3 className="text-2xl font-bold text-white">68%</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-sm text-blue-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +5% from last week
                </p>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Avg. Task Age</p>
                    <h3 className="text-2xl font-bold text-white">4.2 days</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500/20 text-yellow-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  -0.8 days from last week
                </p>
              </div>
            </div>
            
            {/* Task Completion Chart */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Task Completion Trend</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-300">Completed</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-blue-500/50 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-300">Added</span>
                  </div>
                </div>
              </div>
              
              <div className="h-64 w-full">
                {/* Simple chart representation using divs */}
                <div className="flex h-full items-end justify-between">
                  {mockTaskCompletionData.map((day, index) => (
                    <div key={index} className="flex flex-col items-center justify-end h-full">
                      <div className="relative w-12 flex flex-col items-center">
                        <div className="absolute top-0 -mt-6 text-xs text-gray-400">{day.completed}</div>
                        <div className="h-full bg-purple-500/70 w-3 rounded-t-sm" style={{ height: `${day.completed * 6}%` }}></div>
                        <div className="absolute bottom-0 mb-6 text-xs text-gray-400">{day.added}</div>
                        <div className="h-full bg-blue-500/50 w-3 rounded-t-sm ml-4" style={{ height: `${day.added * 6}%` }}></div>
                        <div className="mt-2 text-xs text-gray-400">{day.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Two-column layout for Category Distribution and Team Productivity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Task Category Distribution */}
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">Task Distribution</h2>
                <div className="space-y-4">
                  {mockTaskDistribution.map((category, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300">{category.category}</span>
                        <span className="text-gray-300">{category.count} tasks ({calculatePercentage(category.count)}%)</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`${category.color} h-full rounded-full`} 
                          style={{ width: `${calculatePercentage(category.count)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Team Productivity */}
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">Team Performance</h2>
                <div className="space-y-4">
                  {mockTeamProductivity.map((member, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/10 mr-3">
                        {member.avatar}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">{member.member}</span>
                          <span className="text-gray-300">{member.completed} tasks</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="bg-purple-500 h-full rounded-full" 
                            style={{ width: `${(member.completed / 30) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Overdue Tasks */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Overdue Tasks</h2>
                <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Task</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Board</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Assignee</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Due Date</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOverdueTasks.map((task) => (
                      <tr key={task.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4 text-white">{task.title}</td>
                        <td className="py-3 px-4 text-gray-300">{task.board}</td>
                        <td className="py-3 px-4">
                          <div className="w-7 h-7 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
                            {task.assignee}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-300">
                          {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </td>
                        <td className="py-3 px-4">
                          <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded-md text-xs">
                            {task.daysOverdue} {task.daysOverdue === 1 ? 'day' : 'days'} overdue
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Team Productivity Report */}
        {activeReport === 'productivity' && (
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
            <p className="text-white text-center py-20">Team Productivity report details would go here.</p>
          </div>
        )}
        
        {/* Task Analysis Report */}
        {activeReport === 'tasks' && (
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
            <p className="text-white text-center py-20">Task Analysis report details would go here.</p>
          </div>
        )}
        
        {/* Time Tracking Report */}
        {activeReport === 'time' && (
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
            <p className="text-white text-center py-20">Time Tracking report details would go here.</p>
          </div>
        )}
      </main>
    </div>
  );
}