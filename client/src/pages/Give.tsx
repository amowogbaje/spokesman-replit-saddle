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
    document.title = "SSOH Church - Give";
  }, []);

  const givingOptions = [
    {
      type: "🇳🇬 Nigerian Account (NGN)",
      details: [
        { label: "Account Name", value: "Spokesman Sanctuary of Hope" },
        { label: "Bank", value: "Access Bank" },
        { label: "Account Number", value: "1234567890" }
      ],
      note: "For transfers within Nigeria in Naira (₦)."
    },
    {
      type: "🌍 International Account (USD)",
      details: [
        { label: "Account Name", value: "Spokesman Sanctuary of Hope" },
        { label: "Bank Name", value: "Access Bank" },
        { label: "Account Number (USD)", value: "1234567890" },
        { label: "SWIFT Code", value: "ABNGNGLA" },
        { label: "Bank Address", value: "Access Bank, Victoria Island, Lagos, Nigeria" }
      ],
      note: "For international transfers in US Dollars (USD)."
    },
    {
      type: "💳 Card / Wallet / Online Payment",
      description: "Make a secure one-time donation online using your debit/credit card:",
      links: [
        {
          label: "Flutterwave – NGN, USD, GBP, more",
          href: "https://flutterwave.com/pay/SSOHGive"
        },
        {
          label: "PayPal – For USD & International",
          href: "https://paypal.me/SSOHChurch"
        }
      ]
    }
  ];

  const givingImpact = [
    {
      id: "local",
      title: "Local Missions",
      description: "Your support enables us to serve our neighborhoods with compassion through ministries, outreach, and transformational care.",
      image: "https://images.unsplash.com/photo-1593113598332-cd59a93f9dd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: Heart
    },
    {
      id: "global",
      title: "International Impact",
      description: "Your faithfulness extends across borders—supporting missionaries, church development, and global outreach with hope and purpose.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: Globe
    },
    {
      id: "outreach",
      title: "Compassion Outreach",
      description: "We reach hurting hearts through food drives, housing support, crisis relief, and community empowerment—all thanks to your generosity.",
      image: "https://images.unsplash.com/photo-1469571486292-b53601020a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: Handshake
    },
    {
      id: "church",
      title: "Kingdom Growth",
      description: "Your giving fuels the expansion of our sanctuary, renovations, and ministry innovations as we reach more souls for Christ.",
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
                Every gift you sow is a seed of hope—changing lives locally and globally through the mission of SSOH Church.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-blue-500 rounded-full px-8 py-6">
                Give Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Ways You Can Give</h2>

            <Tabs defaultValue="online" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="online" className="text-center py-3">Online</TabsTrigger>
                <TabsTrigger value="inperson" className="text-center py-3">In Person</TabsTrigger>
              </TabsList>

              <TabsContent value="online" className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Give Online</h3>
                <p className="mb-6">
                  Support the mission of Spokesman Sanctuary of Hope through the giving options below. Choose the one that suits you best.
                </p>

                {givingOptions.map((option, index) => (
                  <div key={index} className="mb-8">
                    <h4 className="font-bold text-lg mb-2">{option.type}</h4>

                    {option.description && <p className="text-gray-700 mb-3">{option.description}</p>}

                    {option.details && option.details.map((item, i) => (
                      <p key={i} className="text-gray-700 mb-1">
                        {item.label}: <strong>{item.value}</strong>
                      </p>
                    ))}

                    {option.links && (
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {option.links.map((link, j) => (
                          <li key={j}>
                            <a href={link.href} target="_blank" className="text-blue-500 underline">{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}

                    {option.note && (
                      <p className="text-gray-500 text-sm mt-2">{option.note}</p>
                    )}
                  </div>
                ))}

                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3">
                  Give Now
                </Button>
              </TabsContent>



              <TabsContent value="inperson" className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Give In Person</h3>
                <p className="mb-4">
                  You’re welcome to give during our Sunday services or visit any of our SSOH locations.
                  Our ushers and giving stations are always available to assist you.
                </p>
                <p className="mb-6">
                  We accept cash, checks, and card payments at every gathering.
                </p>
                <Link href="/locations">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3">
                    Find a Location
                  </Button>
                </Link>
              </TabsContent>


            </Tabs>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">The Fruit of Your Faithfulness</h2>
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
            <h2 className="text-3xl font-bold mb-4">We’re Grateful for Your Heart</h2>
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
