import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function AppDownload() {
  return (
    <section className="container mx-auto px-4 my-16 max-w-4xl">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-bold mb-3">The Saddleback App</h3>
          <p className="text-lg mb-6">
            Get everything you need for your weekend experience and 
            discover new ways to grow spiritually throughout the week.
          </p>
          <Link href="https://onelink.to/dwtqdt">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-6">
              Download
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1551817958-d9d86fb29431?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Mobile app" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
