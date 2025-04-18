import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Activate() {
  return (
    <section className="container mx-auto px-4 my-16 py-16 bg-gray-50 rounded-xl">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="uppercase tracking-wider text-sm font-bold text-blue-500 mb-2">Activate</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover God's purposes for your life</h2>
        <p className="text-lg">
          Step into your calling as you grow in your faith, connect in friendship, 
          and use your gifts to make a difference.
        </p>
      </div>
      
      <div className="flex justify-center">
        <Link href="/sections/get-involved/adults/activate">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6">
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1523803326055-13445def5fee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Growth" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Grow</h3>
          <p>Deepen your relationship with Jesus through classes, groups, and resources designed to help you grow spiritually.</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Connect" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Connect</h3>
          <p>Find genuine community with others who will encourage you and walk alongside you in your journey of faith.</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Serve" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Serve</h3>
          <p>Discover the joy of making a difference by using your unique gifts to serve others in the church and community.</p>
        </div>
      </div>
    </section>
  );
}
