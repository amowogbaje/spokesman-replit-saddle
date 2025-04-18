import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { LOCATIONS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function LocationsPage() {
  useEffect(() => {
    document.title = "Saddleback Church - Locations";
  }, []);

  // Extended location data for the dedicated page
  const extendedLocations = [
    {
      id: "lake-forest",
      name: "Lake Forest",
      region: "Southern California",
      address: "1 Saddleback Pkwy, Lake Forest, CA 92630",
      services: "Saturday 4:00pm & 6:30pm, Sunday 9:00am & 11:30am",
      image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "anaheim",
      name: "Anaheim",
      region: "Southern California",
      address: "2021 E. Ball Road, Anaheim, CA 92806",
      services: "Sunday 9:00am & 11:30am",
      image: "https://images.unsplash.com/photo-1558442086-8ea19a482dbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "corona",
      name: "Corona",
      region: "Southern California",
      address: "1307 W 6th St., Corona, CA 92882",
      services: "Sunday 9:00am & 11:30am",
      image: "https://images.unsplash.com/photo-1548625361-58a9b86aa83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "vancouver",
      name: "Vancouver",
      region: "North America",
      address: "600 W Georgia St, Vancouver, BC V6B 4J3, Canada",
      services: "Sunday 10:00am",
      image: "https://images.unsplash.com/photo-1521478413868-1bbd982fa4a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "berlin",
      name: "Berlin",
      region: "Germany",
      address: "Kurfürstendamm 20, 10719 Berlin, Germany",
      services: "Sunday 11:00am",
      image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "hong-kong",
      name: "Hong Kong",
      region: "East Asia",
      address: "Central, Hong Kong",
      services: "Sunday 10:00am",
      image: "https://images.unsplash.com/photo-1517144447511-aebb25bbc5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "santa-rosa",
      name: "Santa Rosa",
      region: "East Asia",
      address: "Santa Rosa, Laguna, Philippines",
      services: "Sunday 9:00am & 11:00am",
      image: "https://images.unsplash.com/photo-1586275289344-70b7914f73ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "buenos-aires",
      name: "Buenos Aires",
      region: "Argentina",
      address: "Buenos Aires, Argentina",
      services: "Sunday 10:30am",
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
              <p className="text-lg text-gray-600">
                With locations on four continents, dozens of extensions, and a thriving online 
                community, you're only a click away from experiencing Saddleback Church.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Global Presence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {LOCATIONS.map((location) => (
                  <Card key={location.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">{location.region}</h3>
                      <p className="text-gray-500">{location.places}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-center">Find a Campus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extendedLocations.map((location) => (
                <Card key={location.id} className="overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${location.image}')` }}
                  ></div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{location.name}</h3>
                    <p className="text-gray-500 mb-2">{location.region}</p>
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <p className="font-medium">Service Times</p>
                    <p className="text-gray-600">{location.services}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
