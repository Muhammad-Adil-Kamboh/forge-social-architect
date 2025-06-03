
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface NavLink {
  label: string;
  href: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, navLinks }) => {
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    navigate(href);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full p-6">
          <nav className="flex-1 space-y-6 mt-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className="block w-full text-left text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="space-y-4 border-t pt-6">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleNavigation('/app')}
            >
              Log In
            </Button>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => handleNavigation('/app')}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
