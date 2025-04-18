import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Gift, Heart, Globe, Handshake } from "lucide-react";

export default function GivePage() {
  useEffect(() => {
    document.title = "Saddleback Church - Give";
  }, []);

  const givingImpact = [
    {
      id: "local",
      title: "Local Ministry",
      description: "Your gift helps provide services, resources, and care to people in our local communities through various ministries and outreach programs.",
      image: "https://images.unsplash.com/photo-1593113598332-cd59a93f9dd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: Heart
    },
    {
      id: "global",
      title: "Global Missions",
      description: "Your generosity supports missionaries, church plants, and humanitarian projects around the world, bringing hope to communities in need.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: Globe
    },
    {
      id: "outreach",
      title: "Community Outreach",
      description: "Your donations fund food pantries, homeless ministries, disaster relief, and other initiatives that demonstrate Christ's love through practical service.",
      image: "https://images.unsplash.com/photo-1469571486292-b53601020a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: Handshake
    },
    {
      id: "church",
      title: "Church Expansion",
      description: "Your gifts help establish new campuses, renovate facilities, and expand ministry programs to reach more people with the message of hope.",
      image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: Gift
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Give</h1>
              <p className="text-xl mb-8">
                Your generosity makes a difference in the lives of people in our community and around the world.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-blue-500 rounded-full px-8 py-6">
                Give Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Ways to Give</h2>
            
            <Tabs defaultValue="online" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="online" className="text-center py-3">Online</TabsTrigger>
                <TabsTrigger value="inperson" className="text-center py-3">In Person</TabsTrigger>
                <TabsTrigger value="other" className="text-center py-3">Other Ways</TabsTrigger>
              </TabsList>
              
              <TabsContent value="online" className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Give Online</h3>
                <p className="mb-6">
                  Giving online is a simple and secure way to support the ministry of Saddleback Church. 
                  You can make a one-time gift or set up recurring donations.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 mb-4">
                  Give Now
                </Button>
                
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="font-bold mb-2">Set Up Recurring Giving</h4>
                  <p className="text-gray-600 mb-4">
                    Schedule automatic donations on a weekly, bi-weekly, or monthly basis.
                  </p>
                  <Link href="/give/recurring">
                    <span className="text-blue-500 font-medium cursor-pointer">Set up recurring giving</span>
                  </Link>
                </div>
              </TabsContent>
              
              <TabsContent value="inperson" className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Give In Person</h3>
                <p className="mb-4">
                  You can give during any weekend service at any of our campus locations. 
                  Simply place your gift in the offering during the service or use one of the giving kiosks in the lobby.
                </p>
                <p className="mb-6">
                  Cash, checks, and debit/credit cards are accepted at all of our locations.
                </p>
                <Link href="/locations">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3">
                    Find a Location
                  </Button>
                </Link>
              </TabsContent>
              
              <TabsContent value="other" className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Other Ways to Give</h3>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-bold mb-2">Mail a Check</h4>
                  <p className="text-gray-600">
                    Saddleback Church<br />
                    1 Saddleback Parkway<br />
                    Lake Forest, CA 92630
                  </p>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-bold mb-2">Stock & Securities</h4>
                  <p className="text-gray-600 mb-2">
                    Donating appreciated stocks or securities can be a tax-efficient way to give.
                  </p>
                  <Link href="/give/stocks">
                    <span className="text-blue-500 font-medium cursor-pointer">Learn more</span>
                  </Link>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Legacy Giving</h4>
                  <p className="text-gray-600 mb-2">
                    Include Saddleback in your estate planning and leave a lasting legacy.
                  </p>
                  <Link href="/give/legacy">
                    <span className="text-blue-500 font-medium cursor-pointer">Learn more</span>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {givingImpact.map((item) => (
                <Card key={item.id} className="overflow-hidden h-full">
                  <div 
                    className="h-40 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <item.icon className="h-5 w-5 text-blue-500" />
                      </div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Thank You for Your Generosity</h2>
            <p className="text-lg mb-8">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, 
              for God loves a cheerful giver." — 2 Corinthians 9:7
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3">
              Give Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
