import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Event } from "@shared/schema";
import { API_BASE_URL } from "@/lib/constants";


export default function EventsPage() {
  const params = useParams();
  const eventSlug = params?.slug;

  // Fetch all events
  const {
    data: events,
    isLoading: eventsLoading,
    error: eventsError,
  } = useQuery<Event[]>({
    queryKey: ['/events'],
  });

  // Fetch single event by slug if slug exists
  const {
    data: event,
    isLoading: eventLoading,
    error: eventError,
  } = useQuery<Event | null>({
    enabled: Boolean(eventSlug),
    queryKey: ["/events", eventSlug],
    queryFn: () =>
      fetch(`${API_BASE_URL}/events/${eventSlug}`)
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
  });

  // Set document title dynamically
  useEffect(() => {
    if (event) {
      document.title = `SSOH Church - ${event.title}`;
    } else {
      document.title = "SSOH Church - Events";
    }
  }, [event]);

  // Memoize displayed events, handle loading/error
  const displayedEvents = useMemo(() => {
    if (eventsLoading || eventsError || !events) return [];
    return events;
  }, [eventsLoading, eventsError, events]);

  // Show event detail if eventSlug and event data exist
  if (eventSlug) {
    if (eventLoading) {
      return <div>Loading event...</div>;
    }
    if (eventError || !event) {
      return (
        <div>
          <Header />
          <main className="container mx-auto px-4 py-12">
            <p className="text-center text-red-600">Event not found.</p>
            <Link href="/events">
              <Button className="mt-4">Back to Events</Button>
            </Link>
          </main>
          <Footer />
        </div>
      );
    }

    // Show event detail page
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
                  <p>All SSOH Campuses & Online</p>
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg">
                    {event.description ||
                      `Join us for a special ${event.title} service at SSOH Church. This event is open to everyone and will feature inspiring messages, worship, and community connection.`}
                  </p>

                  <p>
                    Don't miss this opportunity to gather with your church family for our{" "}
                    {event.title}. We'll have special activities, music, and a powerful message that will
                    encourage and inspire you.
                  </p>


                  <p>We can't wait to see you there! This event is free and open to everyone.</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Share This Event</h3>
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            shareUrls.facebook(window.location.href),
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            shareUrls.twitter(window.location.href, event.title),
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            shareUrls.email(window.location.href, `Check out this event: ${event.title}`),
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
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
                {displayedEvents
                  .filter(e => e.slug !== event.slug)
                  .slice(0, 4)
                  .map(otherEvent => {
                    if (otherEvent.registration_url) {
                      return (
                        <a
                          key={otherEvent.slug}
                          href={otherEvent.registration_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                            <div
                              className="h-40 bg-cover bg-center"
                              style={{ backgroundImage: `url('${otherEvent.image}')` }}
                            />
                            <CardContent className="p-4">
                              <div className="flex items-start">
                                <div className="bg-gray-50 rounded p-2 mr-3 text-center">
                                  <span className="block text-sm font-bold">{otherEvent.date}</span>
                                </div>
                                <div>
                                  <h3 className="font-bold">{otherEvent.title}</h3>
                                  <p className="text-sm text-gray-500">{otherEvent.time}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      );
                    } else {
                      return (
                        <Link key={otherEvent.slug} href={`/event/${otherEvent.slug}`}>
                          <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                            <div
                              className="h-40 bg-cover bg-center"
                              style={{ backgroundImage: `url('${otherEvent.image}')` }}
                            />
                            <CardContent className="p-4">
                              <div className="flex items-start">
                                <div className="bg-gray-50 rounded p-2 mr-3 text-center">
                                  <span className="block text-sm font-bold">{otherEvent.date}</span>
                                </div>
                                <div>
                                  <h3 className="font-bold">{otherEvent.title}</h3>
                                  <p className="text-sm text-gray-500">{otherEvent.time}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    }
                  })}
              </div>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // If no slug, show list of events page
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Events & Calendar</h1>
              <p className="text-xl">
                Stay connected with what's happening at SSOH Church. Join us for special events,
                services, and community gatherings.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          {eventsLoading && <p>Loading events...</p>}
          {eventsError && <p className="text-red-600">Failed to load events.</p>}
          {!eventsLoading && !eventsError && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedEvents.map(event => {
                if (event.registration_url) {
                  return (
                    <a
                      key={event.slug}
                      href={event.registration_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                        {/* Card content here */}
                        <div
                          className="h-40 bg-cover bg-center"
                          style={{ backgroundImage: `url('${event.image}')` }}
                        />
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="bg-gray-50 rounded p-2 mr-3 text-center">
                              <span className="block text-sm font-bold">{event.date}</span>
                            </div>
                            <div>
                              <h3 className="font-bold">{event.title}</h3>
                              <p className="text-sm text-gray-500">{event.time}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  );
                } else {
                  return (
                    <Link key={event.slug} href={`/events/${event.slug}`}>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                        {/* Card content here */}
                        <div
                          className="h-40 bg-cover bg-center"
                          style={{ backgroundImage: `url('${event.image}')` }}
                        />
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="bg-gray-50 rounded p-2 mr-3 text-center">
                              <span className="block text-sm font-bold">{event.date}</span>
                            </div>
                            <div>
                              <h3 className="font-bold">{event.title}</h3>
                              <p className="text-sm text-gray-500">{event.time}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                }
              })}

            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
