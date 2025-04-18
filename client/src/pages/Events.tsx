import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { UPCOMING_EVENTS } from "@/lib/constants";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";

export default function EventsPage() {
  const params = useParams();
  const eventSlug = params?.slug;
  
  // Find event if we have a slug
  const event = eventSlug ? 
    UPCOMING_EVENTS.find(e => e.link === `/events/${eventSlug}`) : 
    null;
  
  useEffect(() => {
    document.title = event ? 
      `Saddleback Church - ${event.title}` : 
      "Saddleback Church - Events";
  }, [event]);

  // Additional upcoming events (beyond the ones in constants)
  const additionalEvents = [
    {
      id: "mothers-day",
      title: "Mother's Day Service",
      date: "May 12",
      month: "MAY",
      day: "12",
      time: "9:00 AM & 11:00 AM",
      image: "https://images.unsplash.com/photo-1520980194500-dfaf9460d094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/events/mothers-day"
    },
    {
      id: "baptism",
      title: "Baptism Weekend",
      date: "May 18-19",
      month: "MAY",
      day: "18",
      time: "All Services",
      image: "https://images.unsplash.com/photo-1569355215454-8b8786fde3fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/events/baptism"
    },
    {
      id: "mens-breakfast",
      title: "Men's Breakfast",
      date: "May 25",
      month: "MAY",
      day: "25",
      time: "8:00 AM",
      image: "https://images.unsplash.com/photo-1553964274-ec8142add654?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/events/mens-breakfast"
    },
    {
      id: "womens-retreat",
      title: "Women's Retreat",
      date: "June 7-9",
      month: "JUN",
      day: "07",
      time: "All Weekend",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/events/womens-retreat"
    }
  ];
  
  // All events combined
  const allEvents = [...UPCOMING_EVENTS, ...additionalEvents];

  // If we have a specific event, show event details
  if (event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <Link href="/events">
              <span className="inline-flex items-center mb-6 text-blue-500 cursor-pointer">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Events
              </span>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full rounded-xl mb-6 max-h-[400px] object-cover"
                />
                <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <p>{event.date}, 2025</p>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <p>{event.time}</p>
                </div>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2" />
                  <p>All Saddleback Campuses & Online</p>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg">
                    Join us for a special {event.title} service at Saddleback Church. This event is open to everyone and 
                    will feature inspiring messages, worship, and community connection.
                  </p>
                  
                  <h2>Event Details</h2>
                  <p>
                    Don't miss this opportunity to gather with your church family for our {event.title}. 
                    We'll have special activities, music, and a powerful message that will encourage and inspire you.
                  </p>
                  
                  <h2>What to Expect</h2>
                  <ul>
                    <li>Uplifting worship experience</li>
                    <li>Relevant and encouraging message</li>
                    <li>Safe and fun children's program (birth through 5th grade)</li>
                    <li>Connection with others in your community</li>
                  </ul>
                  
                  <p>
                    We can't wait to see you there! This event is free and open to everyone.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Register for this Event</h3>
                    <p className="mb-4 text-gray-600">
                      Let us know you're coming so we can prepare for your visit.
                    </p>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-2">
                      Register Now
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      Registration is optional but appreciated
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Share This Event</h3>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Facebook
                      </Button>
                      <Button variant="outline" size="sm">
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm">
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Other Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {allEvents
                  .filter(e => e.id !== event.id)
                  .slice(0, 4)
                  .map((otherEvent) => (
                    <Link key={otherEvent.id} href={otherEvent.link}>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                        <div 
                          className="h-40 bg-cover bg-center" 
                          style={{ backgroundImage: `url('${otherEvent.image}')` }}
                        ></div>
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="bg-gray-50 rounded p-2 mr-3 text-center">
                              <span className="block text-sm font-bold">{otherEvent.month}</span>
                              <span className="block text-xl font-bold">{otherEvent.day}</span>
                            </div>
                            <div>
                              <h3 className="font-bold">{otherEvent.title}</h3>
                              <p className="text-sm text-gray-500">{otherEvent.time}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Otherwise show events listing page
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Events & Calendar</h1>
              <p className="text-xl">
                Stay connected with what's happening at Saddleback Church.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allEvents.map((event) => (
                <Link key={event.id} href={event.link}>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow h-full">
                    <div 
                      className="h-40 bg-cover bg-center" 
                      style={{ backgroundImage: `url('${event.image}')` }}
                    ></div>
                    <CardContent className="p-4">
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
                      <span className="text-blue-500 text-sm font-medium">Learn More</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Monthly Calendar</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              View our full calendar to see all upcoming services, classes, and events at Saddleback Church.
            </p>
            <Link href="/calendar">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3">
                View Full Calendar
              </Button>
            </Link>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Event Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { id: "services", title: "Weekend Services", icon: "🙏" },
                { id: "classes", title: "Classes & Groups", icon: "📚" },
                { id: "kids", title: "Kids & Students", icon: "👶" },
                { id: "mens", title: "Men's Events", icon: "👨" },
                { id: "womens", title: "Women's Events", icon: "👩" },
                { id: "missions", title: "Missions & Outreach", icon: "🌎" },
                { id: "recovery", title: "Care & Recovery", icon: "❤️" },
                { id: "worship", title: "Worship Events", icon: "🎵" },
                { id: "special", title: "Special Events", icon: "✨" }
              ].map((category) => (
                <Link key={category.id} href={`/events/category/${category.id}`}>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-6 flex items-center">
                      <span className="text-3xl mr-4">{category.icon}</span>
                      <span className="font-medium">{category.title}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
