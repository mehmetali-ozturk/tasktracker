"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  
  return (
    <div className="min-h-screen ">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-black/20 shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">TaskTracker Pro</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-300 hover:text-purple-400 transition">Features</Link>
            <Link href="#pricing" className="text-gray-300 hover:text-purple-400 transition">Pricing</Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-purple-400 transition">Testimonials</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-purple-400 transition">Log in</Link>
            <Link href="/signup" className="bg-purple-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-purple-900/80 transition border border-purple-500/30">Sign up free</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-xl shadow-lg border border-white/10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Organize anything, together
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                TaskTracker Pro helps teams move work forward and stay productive.
                Collaborate, manage projects, and reach new productivity peaks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-purple-600/90 text-white px-6 py-3 rounded-md hover:bg-purple-700/90 transition backdrop-blur-sm border border-purple-500/30">
                  Sign up - it's free!
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="backdrop-blur-lg bg-purple-900/20 p-4 rounded-xl shadow-lg border border-purple-500/30">
              {/* Placeholder for an image of the app UI */}
              <div className="aspect-video bg-purple-800/30 rounded-lg flex items-center justify-center border border-purple-500/30">
                <p className="text-gray-300 text-center px-4">
                  TaskTracker Pro Board Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-200">
            Features to boost your productivity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Kanban Boards - HIGHEST PRIORITY */}
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-14 h-14 bg-purple-500/30 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Intuitive Kanban Boards</h3>
              <p className="text-gray-300">
                Visualize your workflow with our drag-and-drop interface. Create customizable columns to represent your workflow stages and move tasks seamlessly between them.
              </p>
            </div>
            
            {/* Feature 2: Real-time Collaboration - SECOND PRIORITY */}
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-14 h-14 bg-purple-500/30 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Real-time Collaboration</h3>
              <p className="text-gray-300">
                Work together with your team in real-time. See changes instantly, leave comments on cards, assign tasks to team members, and get notified of important updates.
              </p>
            </div>
            
            {/* Feature 3: Task Management - THIRD PRIORITY */}
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-lg border border-white/20">
              <div className="w-14 h-14 bg-purple-500/30 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Powerful Task Management</h3>
              <p className="text-gray-300">
                Create detailed task cards with descriptions, checklists, due dates, file attachments, and custom labels. Filter and search to find exactly what you need.
              </p>
            </div>
          </div>
          
          {/* Additional Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Feature 4: Templates */}
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Board Templates</h3>
              </div>
              <p className="text-gray-300">
                Jump-start new projects with pre-built templates for common workflows or save your custom boards as templates.
              </p>
            </div>
            
            {/* Feature 5: Automation */}
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Smart Automation</h3>
              </div>
              <p className="text-gray-300">
                Automate repetitive actions with rule-based triggers and actions to keep your workflow running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-200">
            Choose the perfect plan for your team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-lg border border-white/20 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-white">Free</h3>
              <div className="text-4xl font-bold mb-4 text-gray-200">$0<span className="text-gray-400 text-lg font-normal">/mo</span></div>
              <p className="text-gray-300 mb-6">For individuals or small teams just getting started</p>
              <ul className="mb-8 flex-grow space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited cards &amp; boards
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 10 users
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic automation
                </li>
              </ul>
              <button className="w-full py-3 rounded-md bg-purple-800/80 text-white hover:bg-purple-900/80 transition backdrop-blur-sm">
                Get started free
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="backdrop-blur-lg bg-purple-800/20 p-8 rounded-xl shadow-lg border border-purple-500/30 flex flex-col transform md:scale-105 relative">
              <div className="absolute -top-3 right-6 bg-purple-800 text-white text-sm font-semibold py-1 px-3 rounded-full">MOST POPULAR</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Pro</h3>
              <div className="text-4xl font-bold mb-4 text-gray-200">$10<span className="text-gray-400 text-lg font-normal">/mo</span></div>
              <p className="text-gray-300 mb-6">For teams that need to manage more work</p>
              <ul className="mb-8 flex-grow space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Everything in Free
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 100 users
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced automation
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <button className="w-full py-3 rounded-md bg-purple-600/90 text-white hover:bg-purple-700/90 transition backdrop-blur-sm">
                Start free trial
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-lg border border-white/20 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-white">Enterprise</h3>
              <div className="text-4xl font-bold mb-4 text-gray-200">$25<span className="text-gray-400 text-lg font-normal">/mo</span></div>
              <p className="text-gray-300 mb-6">For organizations that need advanced security & support</p>
              <ul className="mb-8 flex-grow space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited users
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SSO integration
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated support
                </li>
              </ul>
              <button className="w-full py-3 rounded-md bg-purple-800/80 text-white hover:bg-purple-900/80 transition backdrop-blur-sm">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-200">
            Trusted by teams worldwide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/30 mr-4 backdrop-blur-sm border border-white/10"></div>
                <div>
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">Product Manager, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "TaskTracker Pro transformed how our team collaborates. We've increased our productivity by 35% since implementing it."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/30 mr-4 backdrop-blur-sm border border-white/10"></div>
                <div>
                  <p className="font-semibold text-white">Michael Chen</p>
                  <p className="text-sm text-gray-400">Engineering Lead, StartUp Inc</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The visual organization of tasks made our sprint planning effortless. Best project management tool we've ever used."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/30 mr-4 backdrop-blur-sm border border-white/10"></div>
                <div>
                  <p className="font-semibold text-white">Emily Rodriguez</p>
                  <p className="text-sm text-gray-400">Marketing Director, GrowthCo</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "TaskTracker Pro's automation capabilities saved our team countless hours on repetitive tasks. It's been a game-changer."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="backdrop-blur-lg bg-purple-900/20 p-10 rounded-xl shadow-lg border border-purple-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              Ready to boost your team's productivity?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams using TaskTracker Pro to collaborate seamlessly and achieve more together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600/90 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-700/90 transition backdrop-blur-sm">
                Get started for free
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/20 transition backdrop-blur-sm">
                Schedule a demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg bg-white/5 p-8 rounded-xl shadow-lg border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">TaskTracker Pro</h3>
                <p className="text-gray-400 mb-4">Organize anything, together.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-3">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-purple-400 transition">Features</a></li>
                  <li><a href="#pricing" className="hover:text-purple-400 transition">Pricing</a></li>
                  <li><a href="#testimonials" className="hover:text-purple-400 transition">Testimonials</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-3">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-purple-400 transition">Help Center</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Documentation</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Support</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Legal</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; 2025 TaskTracker Pro. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}