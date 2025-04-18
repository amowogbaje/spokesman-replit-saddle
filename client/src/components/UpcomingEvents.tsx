import { UPCOMING_EVENTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function UpcomingEvents() {
  return (
    <section className="container mx-auto px-4 my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
        <p className="text-lg text-gray-500">Join us for these special events and gatherings</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {UPCOMING_EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="flex items-start mb-3">
                <div className="bg-gray-50 rounded p-2 mr-3 text-center">
                  <span className="block text-sm font-bold">{event.month}</span>
                  <span className="block text-xl font-bold">{event.day}</span>
                </div>
                <div>
                  <h3 className="font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </div>
              </div>
              <Link href={event.link}>
                <span className="text-blue-500 text-sm font-medium cursor-pointer">Learn More</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/events">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-6">
            View All Events
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
