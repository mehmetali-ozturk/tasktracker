"use client";
import { useState } from 'react';
import Link from 'next/link';

// Mock data for board categories
const boardCategories = [
  { id: 1, name: 'All Boards', count: 9 },
  { id: 2, name: 'Recent', count: 4 },
  { id: 3, name: 'Favorites', count: 3 },
  { id: 4, name: 'Templates', count: 5 },
];

// Mock data for boards
const mockBoards = [
  { 
    id: 1, 
    name: 'Marketing Campaign', 
    description: 'Q1 2025 social media and content strategy',
    favorite: true,
    tasks: 8, 
    completed: 3, 
    dueDate: '2025-03-15',
    members: ['AK', 'JS', 'BT'],
    recentlyViewed: true,
  },
  { 
    id: 2, 
    name: 'Product Roadmap', 
    description: 'Feature planning and development timeline',
    favorite: true,
    tasks: 12, 
    completed: 5, 
    dueDate: '2025-04-02',
    members: ['RT', 'AK', 'JS'],
    recentlyViewed: false,
  },
  { 
    id: 3, 
    name: 'Website Redesign', 
    description: 'New homepage and product pages',
    favorite: true,
    tasks: 6, 
    completed: 6, 
    dueDate: '2025-03-10',
    members: ['JS', 'BT', 'RT'],
    recentlyViewed: true,
  },
  { 
    id: 4, 
    name: 'Q1 Goals', 
    description: 'Quarterly OKRs and team goals',
    favorite: false,
    tasks: 5, 
    completed: 2, 
    dueDate: '2025-03-31',
    members: ['AK', 'RT'],
    recentlyViewed: true,
  },
  { 
    id: 5, 
    name: 'Content Calendar', 
    description: 'Blog and social media content schedule',
    favorite: false,
    tasks: 10, 
    completed: 4, 
    dueDate: '2025-03-25',
    members: ['BT', 'JS'],
    recentlyViewed: false,
  },
  { 
    id: 6, 
    name: 'User Research', 
    description: 'Customer interviews and feedback analysis',
    favorite: false,
    tasks: 7, 
    completed: 2, 
    dueDate: '2025-04-10',
    members: ['AK', 'RT', 'JS'],
    recentlyViewed: true,
  },
];

// Mock data for board templates
const boardTemplates = [
  { id: 1, name: 'Marketing Plan', description: 'Template for marketing campaigns', category: 'Marketing' },
  { id: 2, name: 'Project Management', description: 'Standard project workflow', category: 'Management' },
  { id: 3, name: 'Sprint Planning', description: 'Agile sprint organization', category: 'Development' },
];

export default function Boards() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(1);
  const [showTemplates, setShowTemplates] = useState(false);
  
  // Filter boards based on selected category and search query
  const filteredBoards = mockBoards.filter(board => {
    const matchesSearch = board.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          board.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    
    switch(activeCategory) {
      case 1: return true; // All boards
      case 2: return board.recentlyViewed; // Recent
      case 3: return board.favorite; // Favorites
      default: return true;
    }
  });
  
  return (
    <div className="min-h-screen">
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
                <Link href="/boards" className="text-purple-400 border-b-2 border-purple-400 px-1 py-1">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Boards</h1>
            <p className="text-gray-300">View and manage all your project boards</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button 
              onClick={() => setShowTemplates(false)}
              className={`px-4 py-2 rounded-md backdrop-blur-sm border ${
                !showTemplates 
                  ? 'bg-purple-600/80 text-white border-purple-500/30' 
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              } transition`}
            >
              My Boards
            </button>
            <button 
              onClick={() => setShowTemplates(true)}
              className={`px-4 py-2 rounded-md backdrop-blur-sm border ${
                showTemplates 
                  ? 'bg-purple-600/80 text-white border-purple-500/30' 
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              } transition`}
            >
              Templates
            </button>
            <button className="flex items-center space-x-1 bg-purple-600/90 text-white px-4 py-2 rounded-md hover:bg-purple-700/90 transition backdrop-blur-sm border border-purple-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Create Board</span>
            </button>
          </div>
        </div>

        {showTemplates ? (
          // Templates View
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-6">Board Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boardTemplates.map(template => (
                <div key={template.id} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-white">{template.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">{template.description}</p>
                    </div>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md">
                      {template.category}
                    </span>
                  </div>
                  <button className="mt-4 w-full py-2 bg-white/10 hover:bg-white/15 text-white text-sm rounded-md border border-white/10 backdrop-blur-sm transition">
                    Use Template
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // My Boards View
          <>
            {/* Board Categories */}
            <div className="mb-6 flex flex-wrap gap-2">
              {boardCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-md backdrop-blur-sm border flex items-center ${
                    activeCategory === category.id
                      ? 'bg-purple-600/80 text-white border-purple-500/30' 
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                  } transition`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span>{category.name}</span>
                  <span className="ml-2 bg-white/10 text-xs px-2 py-0.5 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>

            {/* Boards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBoards.length > 0 ? filteredBoards.map(board => (
                <div key={board.id} className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 hover:bg-white/10 transition cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-white text-lg">{board.name}</h3>
                    <div className="flex space-x-2">
                      <button className={`text-gray-400 hover:text-yellow-400 transition ${board.favorite ? 'text-yellow-400' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={board.favorite ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-2">{board.description}</p>
                  
                  <div className="mt-6 mb-4">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="bg-purple-500 h-full rounded-full" 
                        style={{ width: `${(board.completed / board.tasks) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-gray-400">
                        <span className="text-purple-400">{board.completed}</span>/{board.tasks} tasks
                      </span>
                    </div>
                    <span className="text-gray-400">Due {new Date(board.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {board.members.map((member, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-purple-500/30 border border-black/50 flex items-center justify-center text-xs text-white">
                          {member}
                        </div>
                      ))}
                    </div>
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition">Open Board</button>
                  </div>
                </div>
              )) : (
                <div className="lg:col-span-3 backdrop-blur-lg bg-white/5 p-8 rounded-xl shadow-lg border border-white/10 text-center">
                  <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white">No boards found</h3>
                  <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
                  <button className="mt-6 px-4 py-2 bg-purple-600/90 text-white rounded-md hover:bg-purple-700/90 transition backdrop-blur-sm border border-purple-500/30">
                    Create New Board
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}