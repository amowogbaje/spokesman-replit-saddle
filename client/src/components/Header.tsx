import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Waves, Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
              <Waves className="h-5 w-5 text-white" />
            </div>
            <span className="ml-2 text-lg font-bold uppercase tracking-wider">{SITE_NAME}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="font-medium hover:text-blue-500 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="hidden md:block">
              <Button variant="outline" className="rounded-full">
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
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="py-2 px-4 hover:bg-gray-100 rounded-md font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="py-2 px-4 hover:bg-gray-100 rounded-md font-medium"
                  >
                    My Dashboard
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
