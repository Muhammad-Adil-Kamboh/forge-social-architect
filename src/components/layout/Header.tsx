
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/components/theme/ThemeProvider';
import { useAuth } from '@/contexts/AuthContext';
import { MobileDrawer } from './MobileDrawer';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { user, profile, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '/features' },
    { label: 'Free Tools', href: '/free-tools' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-linkedin-surface/95 backdrop-blur-md border-b border-[rgb(var(--grey-300))] sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[rgb(var(--blue-primary))] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <button 
              onClick={() => navigate('/')} 
              className="text-xl font-bold text-[rgb(var(--grey-900))] hover:text-[rgb(var(--blue-primary))] transition-colors duration-150 focus-linkedin"
            >
              LeadKin
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className="text-[rgb(var(--grey-900))] hover:text-[rgb(var(--blue-primary))] transition-colors duration-150 font-medium focus-linkedin"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-[rgb(var(--grey-100))] focus-linkedin"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-linkedin-muted" /> : <Moon className="w-5 h-5 text-linkedin-muted" />}
            </Button>
            
            {user ? (
              <>
                {profile?.role === 'admin' && (
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate('/admin')}
                    className="text-linkedin-primary hover:text-[rgb(var(--blue-accent))] focus-linkedin"
                  >
                    Admin
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/app')}
                  className="text-[rgb(var(--grey-800))] hover:text-[rgb(var(--blue-primary))] focus-linkedin"
                >
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={handleSignOut}
                  className="text-[rgb(var(--grey-800))] hover:text-red-600 focus-linkedin"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/login')}
                  className="text-[rgb(var(--grey-800))] hover:text-[rgb(var(--blue-primary))] focus-linkedin"
                >
                  Log In
                </Button>
                <Button 
                  className="btn-linkedin-primary focus-linkedin animate-linkedin-hover"
                  onClick={() => navigate('/signup')}
                >
                  Start Free Trial
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-[rgb(var(--grey-100))] focus-linkedin"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-linkedin-muted" /> : <Moon className="w-5 h-5 text-linkedin-muted" />}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[rgb(var(--grey-900))] hover:text-[rgb(var(--blue-primary))] hover:bg-[rgb(var(--grey-100))] focus-linkedin"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
};
