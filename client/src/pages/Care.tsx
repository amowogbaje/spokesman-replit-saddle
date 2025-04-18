import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Users, Phone, Clock } from "lucide-react";

export default function CarePage() {
  useEffect(() => {
    document.title = "Saddleback Church - Care";
  }, []);

  const careServices = [
    {
      id: "counseling",
      title: "Counseling",
      description: "Professional Christian counseling for individuals, couples, and families facing life's challenges.",
      icon: Heart,
      color: "bg-red-100 text-red-500"
    },
    {
      id: "support-groups",
      title: "Support Groups",
      description: "Find community and healing through specialized support groups for various needs and life situations.",
      icon: Users,
      color: "bg-blue-100 text-blue-500"
    },
    {
      id: "crisis-support",
      title: "Crisis Support",
      description: "Immediate assistance for those facing emergency situations or urgent needs.",
      icon: Phone,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: "recovery",
      title: "Recovery Programs",
      description: "Christ-centered recovery programs for those struggling with hurts, habits, and hang-ups.",
      icon: Clock,
      color: "bg-green-100 text-green-500"
    }
  ];

  const supportGroups = [
    {
      id: "grief",
      title: "Grief Support",
      day: "Tuesdays",
      time: "7:00 PM",
      location: "Lake Forest Campus",
      image: "https://images.unsplash.com/photo-1536811145696-cce6dcc35428?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "divorce",
      title: "Divorce Care",
      day: "Wednesdays",
      time: "6:30 PM",
      location: "Online & Lake Forest",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "addiction",
      title: "Celebrate Recovery",
      day: "Fridays",
      time: "7:00 PM",
      location: "All Campuses",
      image: "https://images.unsplash.com/photo-1469571486292-b53601020a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "mental-health",
      title: "Mental Health Support",
      day: "Thursdays",
      time: "6:00 PM",
      location: "Online",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Care & Support</h1>
              <p className="text-xl mb-8">
                No matter what you're going through, you don't have to face it alone.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-blue-500 rounded-full px-8 py-6">
                Get Care Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careServices.map((service) => (
                <Card key={service.id} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${service.color}`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                    <Link href={`/care/${service.id}`}>
                      <span className="text-blue-500 font-medium cursor-pointer">Learn more</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">Support Groups</h2>
            <p className="text-lg text-center text-gray-600 mb-8">Find community and healing with others who understand</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportGroups.map((group) => (
                <Card key={group.id} className="overflow-hidden">
                  <div 
                    className="h-40 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${group.image}')` }}
                  ></div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{group.title}</h3>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">When:</span> {group.day}, {group.time}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <span className="font-medium">Where:</span> {group.location}
                    </p>
                    <Link href={`/care/groups/${group.id}`}>
                      <span className="text-blue-500 text-sm font-medium cursor-pointer">Learn more</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/care/groups">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3">
                  See All Support Groups
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
              <p className="text-lg mb-8">
                If you're experiencing a crisis situation or need to speak with someone right away, 
                our care team is here for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3">
                  Call Our Care Line
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full px-8 py-3">
                  Chat Online
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
