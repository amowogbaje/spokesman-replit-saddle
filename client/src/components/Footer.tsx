import { SITE_NAME, FOOTER_LINKS } from "@/lib/constants";
import { Link } from "wouter";
import { Waves } from "lucide-react";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                <Waves className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-lg font-bold uppercase tracking-wider">SADDLEBACK</span>
            </div>
            <p className="text-gray-500 mb-4">Helping people live a Christ-centered life.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.title}>
                  <Link href={link.link}>
                    <span className="text-gray-500 hover:text-blue-500 cursor-pointer">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.title}>
                  <Link href={link.link}>
                    <span className="text-gray-500 hover:text-blue-500 cursor-pointer">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.title}>
                  <Link href={link.link}>
                    <span className="text-gray-500 hover:text-blue-500 cursor-pointer">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Saddleback Church. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link href="/privacy">
              <span className="text-sm text-gray-500 hover:text-blue-500 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-sm text-gray-500 hover:text-blue-500 cursor-pointer">
                Terms of Use
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-sm text-gray-500 hover:text-blue-500 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
