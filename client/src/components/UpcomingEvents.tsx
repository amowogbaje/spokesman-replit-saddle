import { UPCOMING_EVENTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import React from "react";

/**
 * Interface for the Event data from the external API
 * This is completely separate from any database schema
 */
interface ExternalEvent {
  id: number;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registration_url?: string; // Optional field
}

/**
 * Event data structure for the UI display
 */
interface EventDisplay {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  image: string;
  link: string;
}

export default function UpcomingEvents() {
  // Fetch events from the external API
  const {
    data: externalEvents,
    isLoading,
    error
  } = useQuery<ExternalEvent[]>({
    queryKey: ['/api/events/upcoming'],
  });

  // Process date strings to get month and day
  const processedEvents = React.useMemo<EventDisplay[]>(() => {
    // If no events from API or there's an error, use fallback data
    if (!externalEvents || externalEvents.length === 0) {
      return UPCOMING_EVENTS; // Fallback to constants for demo/dev
    }

    // Process external API data into our display format
    return externalEvents.map(event => {
      // Parse date string to get month and day
      let month = '';
      let day = '';

      try {
        // Most date formats should work with this
        const dateObj = new Date(event.date);
        if (!isNaN(dateObj.getTime())) {
          month = dateObj.toLocaleString('default', { month: 'short' });
          day = dateObj.getDate().toString();
        } else {
          // If it's a custom format like "June 10-12, 2025", extract what we can
          const dateParts = event.date.split(/[,\s-]+/);
          if (dateParts.length >= 2) {
            month = dateParts[0].substring(0, 3); // First 3 chars of month
            day = dateParts[1]; // Just use the first day
          }
        }
      } catch (e) {
        // If parsing fails, use first part of the date string as month and second as day
        const parts = event.date.split(/[\s,.-]+/);
        month = parts[0]?.substring(0, 3) || '';
        day = parts[1] || '';
      }

      // Transform external API data to our display format
      return {
        id: event.id.toString(),
        title: event.title,
        date: event.date,
        month,
        day,
        time: event.time,
        image: event.image,
        link: event.registration_url || `/events/${event.slug}`
      };
    });
  }, [externalEvents]);

  return (
    <section className="container mx-auto px-4 my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
        <p className="text-lg text-gray-500">Join us for these special events and gatherings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          // Loading skeleton while waiting for API response
          Array(4).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
              <div className="w-full h-40 bg-gray-200"></div>
              <div className="p-4">
                <div className="flex items-start mb-3">
                  <div className="bg-gray-100 rounded p-2 mr-3 w-12 h-14"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-24"></div>
                    <div className="h-3 bg-gray-100 rounded w-16"></div>
                  </div>
                </div>
                <div className="h-3 bg-gray-100 rounded w-20"></div>
              </div>
            </div>
          ))
        ) : error ? (
          // Error state when API request fails
          <div className="col-span-4 text-center text-red-500">
            Error loading events from API. Please try again later.
            <p className="text-sm mt-2">API Error: {(error as Error).message}</p>
          </div>
        ) : (
          // Render events from API response
          processedEvents.map((event) => (
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
                {event.link.startsWith('http') ? (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm font-medium"
                  >
                    Learn More
                  </a>
                ) : (
                  <Link href={event.link}>
                    <span className="text-blue-500 text-sm font-medium cursor-pointer">
                      Learn More
                    </span>
                  </Link>
                )}

              </div>
            </div>
          ))
        )}
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
