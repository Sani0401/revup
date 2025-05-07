import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-gray-900">AI SDR</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/demo" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/demo') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Demo
            </Link>
            <Link 
              to="/features" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/features') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Features
            </Link>
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-full transition-colors duration-200">
              Get Started
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 transition-all duration-200 ease-in-out">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium px-4 py-2 rounded-md ${
                  isActive('/') ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/demo" 
                className={`font-medium px-4 py-2 rounded-md ${
                  isActive('/demo') ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Demo
              </Link>
              <Link 
                to="/features" 
                className={`font-medium px-4 py-2 rounded-md ${
                  isActive('/features') ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <button 
                className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;