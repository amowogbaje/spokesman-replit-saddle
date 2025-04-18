import { LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Locations() {
  return (
    <section className="container mx-auto px-4 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="grid grid-cols-2 gap-6">
          <div>
            {LOCATIONS.map((location) => (
              <div key={location.id} className="mb-6 last:mb-0">
                <h3 className="font-bold mb-2">{location.region}</h3>
                <p className="text-gray-500">{location.places}</p>
              </div>
            ))}
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=674&q=80" 
              alt="World map" 
              className="rounded-lg w-full h-64 object-cover object-center"
            />
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-2xl mb-3">Locations</h3>
          <p className="text-lg mb-6">
            With locations on four continents, dozens of extensions, and a thriving online community, 
            you're only a click away from experiencing Saddleback Church.
          </p>
          <Link href="/locations">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-6">
              Find a Location
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
