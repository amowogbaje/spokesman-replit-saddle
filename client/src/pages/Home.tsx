import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import InfoCards from "@/components/InfoCards";
import Locations from "@/components/Locations";
import Activate from "@/components/Activate";
import AppDownload from "@/components/AppDownload";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Saddleback Church - Home";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero 
          title="Why Good Friday Is Good For You" 
          author="Andy Wood" 
          date="Apr 17, 2025" 
        />
        <QuickActions />
        <InfoCards />
        <Locations />
        <Activate />
        <AppDownload />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  );
}
