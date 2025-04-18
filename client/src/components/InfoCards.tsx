import { INFO_CARDS } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function InfoCards() {
  return (
    <section className="container mx-auto px-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INFO_CARDS.map((card) => (
          <div 
            key={card.id} 
            className={`rounded-xl overflow-hidden shadow-sm border border-gray-100 ${card.color || 'bg-white'}`}
          >
            {card.image && (
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url('${card.image}')` }}
              ></div>
            )}
            <div className="p-6">
              {card.title && <h3 className="text-lg font-bold mb-2">{card.title}</h3>}
              <p className="text-lg leading-relaxed mb-4">{card.content}</p>
              <Link href={card.link}>
                <span className="text-blue-500 font-medium inline-flex items-center cursor-pointer">
                  {card.linkText}
                  <ChevronRight className="ml-1 h-3 w-3" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
