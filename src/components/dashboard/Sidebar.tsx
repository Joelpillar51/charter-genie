
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Generate Policy",
      icon: Plus,
      path: "/generate",
    },
    {
      title: "Saved Documents",
      icon: FileText,
      path: "/documents",
    },
    {
      title: "Account",
      icon: Settings,
      path: "/account",
    },
    {
      title: "Help",
      icon: HelpCircle,
      path: "/help",
    },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
      </Button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
          collapsed ? "-translate-x-full" : "translate-x-0",
          "md:translate-x-0",
          collapsed ? "w-0" : "w-64",
          "md:w-64 md:sticky md:top-0",
          className
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold"
          >
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              CharterGenie
            </span>
          </Link>
        </div>

        <div className="flex-1 overflow-auto py-4">
          <nav className="grid gap-1 px-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setCollapsed(true);
                  }
                }}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t p-4">
          <Link
            to="/signout"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
