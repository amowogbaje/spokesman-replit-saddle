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
    <section className="mx-4 lg:mx-auto my-6 max-w-6xl relative overflow-hidden rounded-xl">
      <div 
        className="aspect-[16/9] md:aspect-[21/9] w-full bg-cover bg-center" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="container mx-auto px-6 py-16 md:py-24 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-wider text-xs font-bold mb-1">LATEST MESSAGE</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{title}</h1>
            <p className="mb-6">{author} | {date}</p>
            
            <Link href="/watch/live">
              <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-6 py-3">
                <Play className="mr-2 h-4 w-4" />
                Watch Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
