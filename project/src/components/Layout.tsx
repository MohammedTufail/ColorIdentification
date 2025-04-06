import React, { useState } from 'react';
import { Camera, Upload, Palette, MessageCircle, Info, Mail, Menu, X, Save, Sparkles } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
        isActive(to)
          ? 'text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      <nav className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200" />
                  <div className="relative bg-white rounded-xl p-2">
                    <Palette className="h-8 w-8 text-violet-600" />
                  </div>
                </div>
                <div className="ml-3 flex items-center">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                    Palette
                  </span>
                  <span className="relative ml-1">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">Pro</span>
                    <Sparkles className="absolute -right-4 -top-2 h-4 w-4 text-amber-500" />
                  </span>
                </div>
              </Link>
              
              <div className="hidden md:ml-8 md:flex md:space-x-2">
                <NavLink to="/camera">
                  <Camera className="h-4 w-4 mr-1.5" />
                  Live Detection
                </NavLink>
                <NavLink to="/upload">
                  <Upload className="h-4 w-4 mr-1.5" />
                  Upload Image
                </NavLink>
                <NavLink to="/saved">
                  <Save className="h-4 w-4 mr-1.5" />
                  Pro Collections
                </NavLink>
                <NavLink to="/chat">
                  <MessageCircle className="h-4 w-4 mr-1.5" />
                  Pro Assistant
                </NavLink>
                <NavLink to="/about">
                  <Info className="h-4 w-4 mr-1.5" />
                  About
                </NavLink>
                <NavLink to="/contact">
                  <Mail className="h-4 w-4 mr-1.5" />
                  Contact
                </NavLink>
              </div>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/camera">
              <Camera className="h-4 w-4 mr-1.5" />
              Live Detection
            </NavLink>
            <NavLink to="/upload">
              <Upload className="h-4 w-4 mr-1.5" />
              Upload Image
            </NavLink>
            <NavLink to="/saved">
              <Save className="h-4 w-4 mr-1.5" />
              Pro Collections
            </NavLink>
            <NavLink to="/chat">
              <MessageCircle className="h-4 w-4 mr-1.5" />
              Pro Assistant
            </NavLink>
            <NavLink to="/about">
              <Info className="h-4 w-4 mr-1.5" />
              About
            </NavLink>
            <NavLink to="/contact">
              <Mail className="h-4 w-4 mr-1.5" />
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>

      <footer className="bg-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">Pro Features</h3>
              <ul className="space-y-3">
                <li><Link to="/camera" className="text-gray-500 hover:text-violet-600 transition-colors">Live Detection</Link></li>
                <li><Link to="/upload" className="text-gray-500 hover:text-violet-600 transition-colors">Image Upload</Link></li>
                <li><Link to="/saved" className="text-gray-500 hover:text-violet-600 transition-colors">Pro Collections</Link></li>
                <li><Link to="/chat" className="text-gray-500 hover:text-violet-600 transition-colors">Pro Assistant</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/docs" className="text-gray-500 hover:text-violet-600 transition-colors">Documentation</Link></li>
                <li><Link to="/guides" className="text-gray-500 hover:text-violet-600 transition-colors">Pro Guides</Link></li>
                <li><Link to="/api" className="text-gray-500 hover:text-violet-600 transition-colors">API Access</Link></li>
                <li><Link to="/blog" className="text-gray-500 hover:text-violet-600 transition-colors">Pro Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-500 hover:text-violet-600 transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-500 hover:text-violet-600 transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="text-gray-500 hover:text-violet-600 transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-500 hover:text-violet-600 transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">Connect</h3>
              <ul className="space-y-3">
                <li><a href="https://twitter.com" className="text-gray-500 hover:text-violet-600 transition-colors">Twitter</a></li>
                <li><a href="https://github.com" className="text-gray-500 hover:text-violet-600 transition-colors">GitHub</a></li>
                <li><a href="https://discord.com" className="text-gray-500 hover:text-violet-600 transition-colors">Discord</a></li>
                <li><a href="https://linkedin.com" className="text-gray-500 hover:text-violet-600 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Palette Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;