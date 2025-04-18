import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Saddleback Church - About";
  }, []);

  const aboutSections = [
    {
      id: "our-story",
      title: "Our Story",
      content: "Saddleback Church was founded in 1980 by Rick and Kay Warren in Lake Forest, California. Starting with just one family, the church has grown to become a global ministry with multiple locations around the world. Throughout our history, we've remained committed to helping people discover their purpose and develop their God-given potential.",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "our-beliefs",
      title: "Our Beliefs",
      content: "We believe in the authority of Scripture, the Trinity, salvation by grace through faith in Jesus Christ, the church as the body of Christ, and the Great Commission to make disciples of all nations. Our values are centered on worship, fellowship, discipleship, ministry, and evangelism.",
      image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "our-leadership",
      title: "Our Leadership",
      content: "Saddleback is led by Pastor Andy Wood, who serves as Senior Pastor along with a team of dedicated pastors and staff who oversee various ministries. Our leadership is committed to serving the congregation and community with integrity, compassion, and vision.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "our-purpose",
      title: "Our Purpose",
      content: "Our purpose is to help people live a Christ-centered life. We do this through our purpose-driven approach that focuses on worship, fellowship, discipleship, ministry, and evangelism. We believe every person has a God-given purpose and we're committed to helping them discover and fulfill it.",
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
              <h1 className="text-4xl font-bold mb-4">About Saddleback Church</h1>
              <p className="text-xl">
                We're a global family helping people live a Christ-centered life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {aboutSections.map((section, index) => (
              <div 
                key={section.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                  gap-8 items-center mb-16 last:mb-0`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-lg mb-4 text-gray-600">{section.content}</p>
                  <Link href={`/about/${section.id.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-blue-500 font-medium cursor-pointer">Learn more</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Come Visit Us</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              We'd love to meet you in person. Join us at one of our weekend services 
              or connect with us online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/locations">
                <span className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full cursor-pointer">
                  Find a Location
                </span>
              </Link>
              <Link href="/watch/live">
                <span className="bg-white hover:bg-gray-100 text-blue-500 font-medium py-3 px-6 rounded-full border border-blue-500 cursor-pointer">
                  Watch Online
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
