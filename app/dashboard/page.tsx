"use client";
import { useState } from 'react';
import Link from 'next/link';

// Mock data for boards
const mockBoards = [
  { id: 1, name: 'Marketing Campaign', tasks: 8, completed: 3, dueDate: '2025-03-15' },
  { id: 2, name: 'Product Roadmap', tasks: 12, completed: 5, dueDate: '2025-04-02' },
  { id: 3, name: 'Website Redesign', tasks: 6, completed: 6, dueDate: '2025-03-10' },
  { id: 4, name: 'Q1 Goals', tasks: 5, completed: 2, dueDate: '2025-03-31' },
];

// Mock data for recent activities
const mockActivities = [
  { id: 1, user: 'Alex Kim', action: 'moved', item: 'Landing page design', from: 'In Progress', to: 'Review', time: '2 minutes ago' },
  { id: 2, user: 'Jamie Smith', action: 'added', item: 'User research', from: '', to: 'To Do', time: '1 hour ago' },
  { id: 3, user: 'You', action: 'completed', item: 'Update documentation', from: '', to: '', time: '3 hours ago' },
  { id: 4, user: 'Robin Taylor', action: 'commented on', item: 'API integration', from: '', to: '', time: '5 hours ago' },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  
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
                <Link href="/dashboard" className="text-purple-400 border-b-2 border-purple-400 px-1 py-1">
                  Dashboard
                </Link>
                <Link href="/boards" className="text-gray-300 hover:text-white px-1 py-1">
                  Boards
                </Link>
                <Link href="/calendar" className="text-gray-300 hover:text-white px-1 py-1">
                  Calendar
                </Link>
                <Link href="/reports" className="text-gray-300 hover:text-white px-1 py-1">
                  Reports
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative md:w-64">
                <input 
                  type="text" 
                  placeholder="Search..." 
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

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, User!</h1>
          <p className="text-gray-300">Here's what's happening with your projects today.</p>
        </div>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Total Tasks</p>
                    <h3 className="text-2xl font-bold text-white">31</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '52%' }}></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">16 completed (52%)</p>
                </div>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Projects</p>
                    <h3 className="text-2xl font-bold text-white">4</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">3 in progress (75%)</p>
                </div>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Upcoming</p>
                    <h3 className="text-2xl font-bold text-white">8</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">2 due today (25%)</p>
                </div>
              </div>
            </div>
            
            {/* Boards List */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Your Boards</h2>
                <button className="flex items-center space-x-1 text-sm bg-purple-600/90 text-white px-3 py-1.5 rounded-md hover:bg-purple-700/90 transition backdrop-blur-sm border border-purple-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>New Board</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {mockBoards.map((board) => (
                  <div key={board.id} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition cursor-pointer">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-white">{board.name}</h3>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-white transition">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 text-sm">
                      <div className="flex space-x-4">
                        <span className="text-gray-400">
                          <span className="text-purple-400">{board.completed}</span>/{board.tasks} tasks
                        </span>
                        <span className="text-gray-400">Due {new Date(board.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex -space-x-2">
                        {/* User avatars would go here - using placeholders */}
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-purple-500/30 border border-black/50 flex items-center justify-center text-xs text-white">
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="bg-purple-500 h-full rounded-full" 
                          style={{ width: `${(board.completed / board.tasks) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width on large screens */}
          <div className="space-y-8">
            {/* Today's tasks */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Today's Tasks</h2>
                <span className="text-sm text-purple-400">View All</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-gray-500 bg-white/10 text-purple-600 focus:ring-purple-500 mr-3"
                  />
                  <span className="text-white">Design team meeting</span>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-gray-500 bg-white/10 text-purple-600 focus:ring-purple-500 mr-3"
                    checked
                  />
                  <span className="text-gray-400 line-through">Review client feedback</span>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-gray-500 bg-white/10 text-purple-600 focus:ring-purple-500 mr-3"
                  />
                  <span className="text-white">Finalize project requirements</span>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-gray-500 bg-white/10 text-purple-600 focus:ring-purple-500 mr-3"
                  />
                  <span className="text-white">Send weekly update</span>
                </div>
              </div>
              
              <button className="flex items-center space-x-1 text-sm text-purple-400 mt-4 hover:text-purple-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Add task</span>
              </button>
            </div>
            
            {/* Activity Feed */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
              
              <div className="space-y-4">
                {mockActivities.map((activity) => (
                  <div key={activity.id} className="border-l-2 border-purple-500/50 pl-4 pb-5 relative">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500/50 border border-black/50"></div>
                    <p className="text-gray-300">
                      <span className="text-white font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="text-white">{activity.item}</span>
                      {activity.from && activity.to && (
                        <span> from <span className="text-gray-400">{activity.from}</span> to <span className="text-gray-400">{activity.to}</span></span>
                      )}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}