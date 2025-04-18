import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Calendar, Clock } from "lucide-react";

export default function WatchPage() {
  useEffect(() => {
    document.title = "Saddleback Church - Watch";
  }, []);

  const recentMessages = [
    {
      id: "msg1",
      title: "Why Good Friday Is Good For You",
      speaker: "Andy Wood",
      date: "Apr 17, 2025",
      duration: "38 min",
      image: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "msg2",
      title: "Finding Peace in a Chaotic World",
      speaker: "Andy Wood",
      date: "Apr 10, 2025",
      duration: "42 min",
      image: "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "msg3",
      title: "The Power of Community",
      speaker: "John Baker",
      date: "Apr 3, 2025",
      duration: "37 min",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "msg4",
      title: "Living With Purpose",
      speaker: "Andy Wood",
      date: "Mar 27, 2025",
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1536599018102-9f6700e1428c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "msg5",
      title: "Grace That Changes Everything",
      speaker: "Teresa Wood",
      date: "Mar 20, 2025",
      duration: "36 min",
      image: "https://images.unsplash.com/photo-1515705576963-95cad62945b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "msg6",
      title: "Overcoming Anxiety",
      speaker: "Andy Wood",
      date: "Mar 13, 2025",
      duration: "39 min",
      image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const messageSeries = [
    {
      id: "series1",
      title: "Easter 2025",
      count: 4,
      image: "https://images.unsplash.com/photo-1588435305889-10ab5ef0e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "series2",
      title: "Finding Peace",
      count: 6,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "series3",
      title: "Purpose Driven Life",
      count: 5,
      image: "https://images.unsplash.com/photo-1551649001-7a2482d98d05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "series4",
      title: "Daring Faith",
      count: 7,
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Watch Saddleback</h1>
              <p className="text-xl mb-8">
                Watch live services or catch up on recent messages from Saddleback Church.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-blue-500 rounded-full px-8 py-6">
                <Play className="mr-2 h-4 w-4" />
                Watch Live Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Recent Messages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentMessages.map((message) => (
                <Card key={message.id} className="overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center relative" 
                    style={{ backgroundImage: `url('${message.image}')` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Button className="rounded-full w-12 h-12 p-0 bg-white hover:bg-gray-100">
                        <Play className="h-6 w-6 text-blue-500" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{message.title}</h3>
                    <p className="text-gray-500 mb-4">{message.speaker}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {message.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {message.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Message Series</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {messageSeries.map((series) => (
                <Card key={series.id} className="overflow-hidden">
                  <div 
                    className="h-40 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${series.image}')` }}
                  ></div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{series.title}</h3>
                    <p className="text-gray-500">{series.count} messages</p>
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
