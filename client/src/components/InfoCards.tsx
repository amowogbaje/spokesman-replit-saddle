import { INFO_CARDS } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InfoCards() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INFO_CARDS.map((card) => (
            <div 
              key={card.id} 
              className={`rounded-xl overflow-hidden ${!card.image ? card.color : ''} shadow-md h-full`}
            >
              {card.image ? (
                <div className="relative h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
                  <div className="relative px-8 py-10 h-full flex flex-col justify-between z-10">
                    {card.title && <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>}
                    <div>
                      <p className="text-lg text-white font-light mb-6">{card.content}</p>
                      <Link href={card.link}>
                        <Button className="rounded-full bg-white text-black hover:bg-gray-100">
                          {card.linkText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="px-8 py-10 h-full flex flex-col justify-between">
                  {card.title && <h3 className="text-xl font-bold mb-2">{card.title}</h3>}
                  <div>
                    <p className="text-lg font-light mb-6">{card.content}</p>
                    <Link href={card.link}>
                      <Button className="rounded-full bg-white text-black border border-gray-200 hover:bg-gray-50">
                        {card.linkText}
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
