import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "wouter";

type HeroProps = {
  title: string;
  author: string;
  date: string;
}

export default function Hero({ 
  title = "Why Good Friday Is Good For You",
  author = "Andy Wood",
  date = "Apr 17, 2025"
}: HeroProps) {
  return (
    <section className="w-full bg-gray-50 pt-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Hero video content - takes full width on mobile, left side on desktop */}
          <div className="w-full lg:w-3/5 lg:pr-8">
            <div 
              className="relative overflow-hidden rounded-xl aspect-[16/9] bg-cover bg-center shadow-lg" 
              style={{ 
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-start p-6 md:p-10">
                <div className="text-white">
                  <p className="uppercase tracking-wider text-xs font-bold mb-1">LATEST MESSAGE</p>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{title}</h1>
                  <p className="mb-6 text-sm md:text-base">{author} | {date}</p>
                  
                  <Link href="/watch/live">
                    <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-6 py-2">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
