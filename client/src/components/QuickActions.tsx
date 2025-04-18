import { ACTION_ITEMS } from "@/lib/constants";
import { Link } from "wouter";
import { ChevronRight, Heart, Users, Droplet, HelpingHand, Church } from "lucide-react";

const iconMap = {
  "heart": Heart,
  "users": Users,
  "droplet": Droplet,
  "helping-hand": HelpingHand,
  "church": Church,
};

export default function QuickActions() {
  return (
    <section className="container mx-auto px-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {ACTION_ITEMS.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          
          return (
            <Link key={item.id} href={item.link}>
              <div className="action-button bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-all cursor-pointer h-full">
                <div className={`h-12 w-12 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                  {IconComponent && <IconComponent className="h-5 w-5 text-white" />}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <span className="text-blue-500 inline-flex items-center text-sm">
                    Learn More
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
