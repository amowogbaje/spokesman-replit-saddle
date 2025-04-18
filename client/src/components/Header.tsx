import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Locations", link: "/locations" },
  { title: "Watch", link: "/watch" },
  { title: "About", link: "/about" },
  { title: "Care", link: "/care" },
  { title: "Give", link: "/give" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" className="text-blue-500" fill="currentColor">
              <path d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0zm0 33c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"/>
              <path d="M18 6c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S24.627 6 18 6zm-6 12c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z"/>
            </svg>
            <span className="ml-2 text-base font-semibold tracking-wide">SADDLEBACK CHURCH</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="font-medium text-gray-700 hover:text-blue-500 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="hidden md:block">
              <Button variant="outline" size="sm" className="rounded-full border-gray-300 hover:bg-gray-50 hover:text-blue-600 px-5">
                My Dashboard
              </Button>
            </Link>
            <Link href="/signin" className="text-blue-500 text-sm font-medium">
              Sign In
            </Link>
            
            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-10">
                <div className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="py-2 px-2 hover:bg-gray-50 text-gray-800 rounded-md font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="py-2 px-2 hover:bg-gray-50 text-gray-800 rounded-md font-medium"
                    >
                      My Dashboard
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
