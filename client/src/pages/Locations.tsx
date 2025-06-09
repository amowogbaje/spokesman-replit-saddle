'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Location = {
  id: string;
  name: string;
  region: string;
  address: string;
  services: string;
  image: string;
  description: string;
  map_link: string;
};

export default function LocationsPage() {
  const { data: locations, isLoading, error } = useQuery<Location[]>({
    queryKey: ["/api/locations"]
  });

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Set document title
  useEffect(() => {
    document.title = "SSOH Church - Locations";
  }, []);

  // Set default selected location once locations are loaded
  useEffect(() => {
    if (locations && locations.length > 0 && !selectedLocation) {
      setSelectedLocation(locations[0]);
    }
  }, [locations, selectedLocation]);

  const displayedLocations = useMemo(() => {
    if (isLoading || error || !locations) return [];
    return locations;
  }, [isLoading, error, locations]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
            <p className="text-lg text-gray-600">
              With locations on four continents and a thriving online community, you’re only a click away from SSOH Church.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with location list */}
            <div className="lg:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Select a Location</h2>
              <div className="space-y-4">
                {displayedLocations.map((location) => (
                  <Card
                    key={location.id}
                    className={`cursor-pointer hover:shadow-md transition-all ${
                      selectedLocation?.id === location.id ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold">{location.name}</h3>
                      <p className="text-sm text-gray-500">{location.address}</p>
                      <p className="text-sm text-gray-500">{location.region}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Detail view */}
            <div className="lg:w-2/3">
              {selectedLocation ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url('${selectedLocation.image}')` }}
                  ></div>
                  <div className="p-6">
                    <h2 className="text-3xl font-bold mb-2">{selectedLocation.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{selectedLocation.region}</p>
                    <p className="text-gray-700 mb-4">{selectedLocation.description}</p>

                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{selectedLocation.address}</p>
                    </div>

                    <div className="mb-4">
                      <p className="font-semibold">Service Times</p>
                      <p className="text-gray-600">{selectedLocation.services}</p>
                    </div>

                    <a
                      href={selectedLocation.map_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-20">
                  <p>Please select a location from the left to view details.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
