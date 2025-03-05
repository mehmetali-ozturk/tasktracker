"use client";
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import Link from 'next/link';

// Mock data for calendar events
const mockEvents = [
  { 
    id: 1, 
    title: 'Marketing Team Meeting',
    description: 'Weekly team sync',
    date: '2025-03-05',
    startTime: '10:00',
    endTime: '11:00',
    type: 'meeting',
    board: 'Marketing Campaign',
    attendees: ['AK', 'JS', 'BT']
  },
  { 
    id: 2, 
    title: 'Project Review',
    description: 'Review website design progress',
    date: '2025-03-05',
    startTime: '14:00',
    endTime: '15:30',
    type: 'review',
    board: 'Website Redesign',
    attendees: ['AK', 'JS', 'RT']
  },
  { 
    id: 3, 
    title: 'Content Calendar Planning',
    description: 'Plan next month\'s content',
    date: '2025-03-07',
    startTime: '09:00',
    endTime: '10:30',
    type: 'planning',
    board: 'Content Calendar',
    attendees: ['JS', 'BT']
  },
  { 
    id: 4, 
    title: 'Product Roadmap Review',
    description: 'Q2 planning and prioritization',
    date: '2025-03-08',
    startTime: '11:00',
    endTime: '12:30',
    type: 'planning',
    board: 'Product Roadmap',
    attendees: ['AK', 'RT', 'JS']
  },
  { 
    id: 5, 
    title: 'User Research Session',
    description: 'Interview with key customers',
    date: '2025-03-10',
    startTime: '13:00',
    endTime: '14:30',
    type: 'research',
    board: 'User Research',
    attendees: ['BT', 'RT']
  },
  { 
    id: 6, 
    title: 'Design Workshop',
    description: 'New feature UI exploration',
    date: '2025-03-12',
    startTime: '10:00',
    endTime: '12:00',
    type: 'workshop',
    board: 'Website Redesign',
    attendees: ['JS', 'BT', 'RT']
  },
];

// Event colors based on type
const eventColors: { [key in 'meeting' | 'review' | 'planning' | 'workshop' | 'research']: string } = {
  meeting: 'bg-blue-500/30 border-blue-500/50 text-blue-200',
  review: 'bg-purple-500/30 border-purple-500/50 text-purple-200',
  planning: 'bg-green-500/30 border-green-500/50 text-green-200',
  workshop: 'bg-yellow-500/30 border-yellow-500/50 text-yellow-200',
  research: 'bg-pink-500/30 border-pink-500/50 text-pink-200',
};

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState('month'); // 'month', 'week', or 'day'
  type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    startTime: string;
    endTime: string;
    type: string;
    board: string;
    attendees: string[];
  };
  
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Generate days for the calendar
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }
    
    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ 
        day: i, 
        isCurrentMonth: true,
        date: new Date(year, month, i),
        events: mockEvents.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate.getFullYear() === year && 
                 eventDate.getMonth() === month && 
                 eventDate.getDate() === i;
        })
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  
  // Get day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Format date for display
  const formatMonth = (date: Date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  // Navigate between months
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const goToToday = () => {
    setCurrentDate(new Date());
  };

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
                <Link href="/boards" className="text-gray-300 hover:text-white px-1 py-1">
                  Boards
                </Link>
                <Link href="/calendar" className="text-purple-400 border-b-2 border-purple-400 px-1 py-1">
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
                  placeholder="Search events..." 
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
        {/* Calendar Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Calendar</h1>
            <p className="text-gray-300">Plan and organize your tasks and meetings</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <div className="flex border border-white/10 rounded-md overflow-hidden">
              <button 
                className={`px-4 py-2 ${currentView === 'month' ? 'bg-purple-600/80 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'} transition`}
                onClick={() => setCurrentView('month')}
              >
                Month
              </button>
              <button 
                className={`px-4 py-2 ${currentView === 'week' ? 'bg-purple-600/80 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'} transition`}
                onClick={() => setCurrentView('week')}
              >
                Week
              </button>
              <button 
                className={`px-4 py-2 ${currentView === 'day' ? 'bg-purple-600/80 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'} transition`}
                onClick={() => setCurrentView('day')}
              >
                Day
              </button>
            </div>
            
            <button className="flex items-center space-x-1 bg-purple-600/90 text-white px-4 py-2 rounded-md hover:bg-purple-700/90 transition backdrop-blur-sm border border-purple-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Event</span>
            </button>
          </div>
        </div>
        
        {/* Calendar Navigation */}
        <div className="backdrop-blur-lg bg-white/5 p-4 rounded-xl shadow-lg border border-white/10 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={prevMonth} 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <h2 className="text-xl font-medium text-white">{formatMonth(currentDate)}</h2>
              <button 
                onClick={nextMonth} 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <button 
              onClick={goToToday} 
              className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-sm rounded-md border border-white/10 backdrop-blur-sm transition"
            >
              Today
            </button>
          </div>
        </div>
        
        {/* Calendar Grid */}
        {currentView === 'month' && (
          <div className="backdrop-blur-lg bg-white/5 rounded-xl shadow-lg border border-white/10">
            {/* Day header */}
            <div className="grid grid-cols-7 border-b border-white/10">
              {dayNames.map((day, index) => (
                <div key={index} className="py-3 px-2 text-center text-gray-300 font-medium">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar cells */}
            <div className="grid grid-cols-7 auto-rows-fr">
              {calendarDays.map((dayObj, index) => (
                <div 
                  key={index} 
                  className={`min-h-[100px] p-1 border-b border-r border-white/10 ${
                    dayObj.isCurrentMonth ? 'bg-transparent' : 'bg-white/5'
                  }`}
                >
                  {dayObj.day && (
                    <div className="h-full flex flex-col">
                      <div className="flex justify-between items-center p-1">
                        <span className={`text-sm font-medium ${
                          dayObj.day === new Date().getDate() && 
                          currentDate.getMonth() === new Date().getMonth() &&
                          currentDate.getFullYear() === new Date().getFullYear()
                            ? 'bg-purple-600/80 text-white h-6 w-6 rounded-full flex items-center justify-center'
                            : 'text-gray-300'
                        }`}>
                          {dayObj.day}
                        </span>
                        
                        {dayObj.events.length > 0 && (
                          <span className="text-xs text-gray-400">{dayObj.events.length} event{dayObj.events.length > 1 ? 's' : ''}</span>
                        )}
                      </div>
                      
                      <div className="flex-1 overflow-y-auto space-y-1 pr-1 mt-1">
                        {dayObj.events.map(event => (
                          <div 
                            key={event.id}
                            className={`p-1 text-xs rounded border ${eventColors[event.type as keyof typeof eventColors]} cursor-pointer`}
                            onClick={() => setSelectedEvent(event)}
                          >
                            <div className="font-medium">{event.startTime} - {event.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {currentView === 'week' && (
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
            <p className="text-center text-white">Week view coming soon</p>
          </div>
        )}
        
        {currentView === 'day' && (
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
            <p className="text-center text-white">Day view coming soon</p>
          </div>
        )}
        
        {/* Event Details Sidebar */}
        {selectedEvent && (
          <div className="fixed inset-y-0 right-0 w-full md:w-80 backdrop-blur-lg bg-black/50 shadow-lg border-l border-white/10 p-6 z-20 overflow-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold text-white">{selectedEvent.title}</h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white">
                    {new Date(selectedEvent.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">{selectedEvent.startTime} - {selectedEvent.endTime}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-gray-400 mb-1 text-sm">Description</h4>
                <p className="text-white">{selectedEvent.description}</p>
              </div>
              
              <div>
                <h4 className="text-gray-400 mb-1 text-sm">Board</h4>
                <div className="bg-purple-500/20 text-purple-200 px-3 py-1.5 rounded-md inline-block">
                  {selectedEvent.board}
                </div>
              </div>
              
              <div>
                <h4 className="text-gray-400 mb-1 text-sm">Attendees</h4>
                <div className="flex flex-wrap space-x-1">
                  {selectedEvent.attendees.map((attendee: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-purple-500/30 border border-black/50 flex items-center justify-center text-xs text-white">
                      {attendee}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10 flex space-x-2">
                <button className="flex-1 py-2 bg-purple-600/90 text-white rounded-md hover:bg-purple-700/90 transition backdrop-blur-sm border border-purple-500/30 text-sm">
                  Edit Event    
                </button>
                <button className="py-2 px-3 bg-white/10 hover:bg-white/15 text-white rounded-md border border-white/10 backdrop-blur-sm transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}