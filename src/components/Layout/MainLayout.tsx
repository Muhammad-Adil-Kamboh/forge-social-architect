
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Lightbulb, 
  FileText, 
  BarChart3, 
  Radar, 
  Users, 
  Bookmark, 
  Sparkles,
  Library,
  UserCog,
  Menu,
  Bell,
  Settings,
  Moon,
  Sun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Idea Lab', href: '/idea-lab', icon: Lightbulb },
  { name: 'Drafts', href: '/drafts', icon: FileText },
  { name: 'Pipeline', href: '/pipeline', icon: BarChart3 },
  { name: 'Insights', href: '/insights', icon: BarChart3 },
  { name: 'Radar', href: '/radar', icon: Radar },
  { name: 'Network', href: '/network', icon: Users },
  { name: 'Saved Posts', href: '/saved-posts', icon: Bookmark },
  { name: 'AI Studio', href: '/ai-studio', icon: Sparkles },
  { name: 'Library', href: '/library', icon: Library },
  { name: 'Team Space', href: '/team-space', icon: UserCog },
];

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className={`min-h-screen flex w-full ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-60'} bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
          {!sidebarCollapsed && (
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              SocialFlow
            </h1>
          )}
          {sidebarCollapsed && (
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.href);
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {!sidebarCollapsed && <span>{item.name}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile-settings')}>
                  <Settings className="w-4 h-4 mr-2" />
                  Profile & Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/support-hub')}>
                  Support Hub
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 bg-gray-50 dark:bg-gray-950 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
