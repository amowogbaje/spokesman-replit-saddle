import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Spokesman Communication Ministries – About";
  }, []);

  const aboutSections = [
    {
      id: "history",
      title: "Our History",
      content: `What began in 1986 as a simple house fellowship under Prof. G.E. Erahbor’s leadership has grown into Spokesman Communication Ministries—a multi-divisional global ministry. From that first gathering at “House 17, Doctor’s Quarters” through divine commission moments, this ministry has stood firm through trials, setbacks, and even arson attempts, always rising as a beacon of hope.`,
      image: "/house11.jpg",
      link: "https://www.youtube.com/watch?v=emQiBmtfljA&t=10s",
      linkLabel: "Watch History on Youtube"
    },
    {
      id: "mission",
      title: "Our Mission",
      content: `We are called to communicate divine truth and bring hope to our generation. Committed to excellence in all things spiritual and practical, we pursue worship, fellowship, discipleship, ministry, and evangelism so every person can discover and fulfill their God-given purpose.`,
      image: "/hope_auditorium.JPG",
    },
    {
      id: "vision",
      title: "Our Vision",
      content: `To see our generation transformed by the message of hope. We will raise up God-centered men and women who bring biblical principles and excellence to every sphere—building strong Christian institutions that impact the world for Christ.`,
      image: "/connect.jpg"
    },
    {
      id: "values",
      title: "Our Core Values",
      content: `Integrity, accountability, transparency, and excellence guide everything we do. We believe leadership principles are universal: character over competence, unity over division, and love as the distinguishing mark of Christ’s body.`,
      image: "/core_values.png",
      link: "https://www.instagram.com/p/C_6B7k-srby/",
      linkLabel: "See what members say"
    },
    {
      id: "leadership",
      title: "Our Leadership",
      content: `Led by Prof. G.E. Erahbor—a physician, lecturer, and visionary—and his wife, Rev. Mrs. Folakemi Erahbor, a passionate teacher and co-laborer in ministry, SSOH is guided by a dedicated pastoral team. Together, they steward this trans-local ministry with integrity, compassion, and a clear divine mandate to “be God’s spokesman to our generation.”`,
      image: "/leadership.jpg",
    },
    {
      id: "dream-church",
      title: "Our Dream Church",
      content: `A multi-cultural, multi-generational family where every culture and class feels at home; a church charged with worship, prayer, and the Holy Spirit; where each member contributes and celebrates gifts toward our shared mission of winning and building souls.`,
      image: "/dream-church.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Spokesman Communication Ministries</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Communicating divine truth and bringing hope since 1986, we exist to equip leaders and transform lives globally.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 space-y-24">
            {aboutSections.map((section, idx) => (
              <div
                key={section.id}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                <div className="md:w-1/2">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-xl w-full h-auto object-cover shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-lg text-gray-700 mb-4">{section.content}</p>
                  {section.link && (
                    section.link.startsWith("http") ? (
                      <a
                        href={section.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:underline cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow"
                      >
                        {section.linkLabel || "Learn more"}
                      </a>
                    ) : (
                      <Link href={section.link}>
                        <span className="text-white font-medium hover:underline cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow">
                          {section.linkLabel || "Learn more"}
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether through our School of Effective Ministry & Leadership, media outreaches like “Hour of Change,” or our local Sanctuary of Hope church family, there’s a place for you here.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/locations">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow">
                  Find a Location
                </span>
              </Link>
              {/* <Link href="/ministries">
                <span className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-6 py-3 rounded-full border border-blue-600 shadow">
                  Explore Ministries
                </span>
              </Link> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
