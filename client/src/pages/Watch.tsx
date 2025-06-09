import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Calendar, Clock } from "lucide-react";

interface Message {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  image: string;
  video_url: string;
}

interface Series {
  id: string;
  title: string;
  count: number;
  image: string;
  series_url?: string;
}

export default function WatchPage() {
  useEffect(() => {
    document.title = "SSOH Church - Watch";
  }, []);

  // Fetch recent messages
  const { data: messages, isLoading: loadingMsgs, error: errorMsgs } = useQuery<Message[]>({
    queryKey: ['/api/messages'],
  });

  const displayedMessages = useMemo(() => {
    if (loadingMsgs || errorMsgs || !messages) {
      return [];
    }
    return messages;
  }, [loadingMsgs, errorMsgs, messages]);

  // Placeholder: define API shape for series
  // We recommend an endpoint GET /api/series returning:
  // [
  //   { id, title, count, image, series_url? }
  // ]
  // const { data: seriesList, isLoading: loadingSeries, error: errorSeries } = useQuery<Series[]>({
  //   queryKey: ['/api/series'],
  // });

  // const displayedSeries = useMemo(() => {
  //   if (loadingSeries || errorSeries || !seriesList) {
  //     return [];
  //   }
  //   return seriesList;
  // }, [loadingSeries, errorSeries, seriesList]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Watch SSOH</h1>
              <p className="text-xl mb-8">
                Watch live services or catch up on recent messages from SSOH Church.
              </p>
              <a href="https://www.youtube.com/sanctuaryofhopechurch/live" target="_blank">
              <Button className="bg-white hover:bg-gray-100 text-blue-500 rounded-full px-8 py-6">
                <Play className="mr-2 h-4 w-4" />
                Watch Live Now
              </Button>
            </a>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Recent Messages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedMessages.map((message) => (
                <Card key={message.id} className="overflow-hidden">
                  <a href={message.video_url} target="_blank" rel="noopener noreferrer">
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
                  </a>
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

        {/* <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Message Series</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedSeries.map((series) => (
                <Card key={series.id} className="overflow-hidden">
                  <a href={series.series_url || '#'}>
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{ backgroundImage: `url('${series.image}')` }}
                    />
                  </a>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{series.title}</h3>
                    <p className="text-gray-500">{series.count} messages</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
