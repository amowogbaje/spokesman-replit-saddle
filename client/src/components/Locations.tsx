import { LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Locations() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Locations list and world map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 order-2 lg:order-1">
            {/* Locations by region */}
            <div className="space-y-8">
              {LOCATIONS.map((location) => (
                <div key={location.id} className="mb-6 last:mb-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">{location.region}</h3>
                  <p className="text-gray-600 text-sm">{location.places}</p>
                </div>
              ))}
            </div>
            
            {/* World map */}
            <div className="flex items-center justify-center">
              <div className="rounded-full overflow-hidden w-40 h-40 md:w-48 md:h-48 border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=674&q=80" 
                  alt="World map" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Description and button */}
          <div className="order-1 lg:order-2">
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Locations</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              With locations on four continents, dozens of extensions, and a thriving online community, 
              you're only a click away from experiencing Saddleback Church.
            </p>
            <Link href="/locations">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 shadow-md">
                Find a Location
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
