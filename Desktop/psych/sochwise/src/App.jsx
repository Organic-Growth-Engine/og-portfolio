import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-800 to-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1539650116574-75c0c6d57d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 text-white">
          {/* Left side - Follow us */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-light tracking-wider">FOLLOW US</span>
            <div className="flex space-x-3">
              <span className="cursor-pointer hover:text-gray-300 transition-colors text-sm">🔍</span>
              <span className="cursor-pointer hover:text-gray-300 transition-colors text-sm">📷</span>
              <span className="cursor-pointer hover:text-gray-300 transition-colors text-sm">📘</span>
              <span className="cursor-pointer hover:text-gray-300 transition-colors text-sm">🐦</span>
            </div>
          </div>

          {/* Right side - Navigation */}
          <nav className="flex space-x-8">
            <a href="#" className="text-sm font-light tracking-wider hover:text-gray-300 transition-colors">DESTINATIONS</a>
            <a href="#" className="text-sm font-light tracking-wider hover:text-gray-300 transition-colors">DEALS</a>
            <a href="#" className="text-sm font-light tracking-wider hover:text-gray-300 transition-colors">SPECIAL OFFERS</a>
            <a href="#" className="text-sm font-light tracking-wider hover:text-gray-300 transition-colors">ABOUT US</a>
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex items-center justify-center min-h-[80vh] relative">
          {/* Hero Text */}
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight">
              <span className="text-green-400">ice</span>
              <span className="text-white">land</span>
            </h1>
          </div>

          {/* Left Content Card */}
          <div className="absolute left-8 bottom-20 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 max-w-xs text-white">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl font-light">01</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 tracking-wider">DISCOVER TOURS</h3>
            
            <p className="text-sm font-light leading-relaxed mb-4 opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <button className="flex items-center space-x-2 text-sm font-light tracking-wider hover:text-gray-300 transition-colors group">
              <span>VIEW ALL TRIPS</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Vertical Text */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="writing-vertical text-white text-2xl font-light tracking-[0.3em] transform rotate-90 origin-center">
              ADVENTURE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;