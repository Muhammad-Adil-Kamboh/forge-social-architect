
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
  Sun,
  User,
  HelpCircle
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
  { name: 'Dashboard', href: '/app', icon: LayoutDashboard },
  { name: 'Idea Lab', href: '/app/idea-lab', icon: Lightbulb },
  { name: 'Drafts', href: '/app/drafts', icon: FileText },
  { name: 'Pipeline', href: '/app/pipeline', icon: BarChart3 },
  { name: 'Insights', href: '/app/insights', icon: BarChart3 },
  { name: 'Radar', href: '/app/radar', icon: Radar },
  { name: 'Network', href: '/app/network', icon: Users },
  { name: 'Saved Posts', href: '/app/saved-posts', icon: Bookmark },
  { name: 'AI Studio', href: '/app/ai-studio', icon: Sparkles },
  { name: 'Library', href: '/app/library', icon: Library },
  { name: 'Team Space', href: '/app/team-space', icon: UserCog },
];

const bottomNavigation = [
  { name: 'Account Settings', href: '/app/profile-settings', icon: Settings },
  { name: 'Help Hub', href: '/app/support-hub', icon: HelpCircle },
];

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveRoute = (href: string) => {
    if (href === '/app') {
      return location.pathname === '/app';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className={`min-h-screen flex w-full ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col shadow-xl backdrop-blur-md`}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          {!sidebarCollapsed && (
            <h1 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span>LeadKin</span>
            </h1>
          )}
          {sidebarCollapsed && (
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.href);
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : ''}`} />
                {!sidebarCollapsed && <span className="font-medium">{item.name}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom Navigation & Profile */}
        <div className="px-3 py-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          {/* Settings & Help */}
          {bottomNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.href);
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : ''}`} />
                {!sidebarCollapsed && <span className="font-medium">{item.name}</span>}
              </button>
            );
          })}

          {/* Profile Button */}
          <div className={`${sidebarCollapsed ? 'px-1' : 'px-3'} py-2`}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 hover:shadow-md border border-slate-200 dark:border-slate-700">
                  <Avatar className="h-8 w-8 ring-2 ring-blue-600 ring-offset-2 ring-offset-white dark:ring-offset-slate-900">
                    <AvatarImage src="/avatars/user.jpg" alt="User" />
                    <AvatarFallback className="bg-blue-600 text-white font-semibold">JD</AvatarFallback>
                  </Avatar>
                  {!sidebarCollapsed && (
                    <div className="ml-3 text-left">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">John Doe</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Premium User</p>
                    </div>
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">John Doe</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/app/profile-settings')} className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700">
                  <User className="w-4 h-4 mr-2" />
                  Profile & Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/app/support-hub')} className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Support Hub
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-800 relative rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 bg-slate-50/50 dark:bg-slate-950/50 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
