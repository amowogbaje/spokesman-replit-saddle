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
    <div className="w-full lg:w-2/5">
      <div className="space-y-4 lg:pl-4">
        {ACTION_ITEMS.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          
          return (
            <Link key={item.id} href={item.link}>
              <div className="action-button bg-white rounded-xl py-3 px-4 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer">
                <div className={`h-12 w-12 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                  {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-sm md:text-base text-gray-700">{item.title}</h3>
                </div>
                <ChevronRight className="h-5 w-5 text-blue-500" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
