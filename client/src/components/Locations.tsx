import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { LOCATIONS } from "@/lib/constants";
import React from "react";
import { Location } from "@shared/schema";

export default function Locations() {
  const {
    data: locations,
    isLoading,
    error
  } = useQuery<Location[]>({
    queryKey: ['/api/locations'],
  });

  const displayedLocations = React.useMemo(() => {
    if (isLoading || error || !locations) {
      return LOCATIONS;
    }

    return locations;
  }, [isLoading, error, locations]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="font-bold text-3xl text-gray-900 mb-4">Explore Our Global Locations</h3>
          <p className="text-lg text-gray-600">
            Discover where we gather around the world and connect with a community near you.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-white shadow rounded-lg p-4">
                <div className="bg-gray-200 h-40 w-full rounded mb-4"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">Failed to load locations</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedLocations.map((location) => (
              <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={location.image || "/placeholder-location.jpg"} 
                  alt={location.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{location.name}</h4>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/locations">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 shadow-md">
              Find a Location
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
