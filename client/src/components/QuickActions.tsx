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
      <div className="space-y-3 lg:pl-4">
        {ACTION_ITEMS.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          
          return (
            <Link key={item.id} href={item.link}>
              <div className="action-button bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-all cursor-pointer">
                <div className={`h-10 w-10 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                  {IconComponent && <IconComponent className="h-5 w-5 text-white" />}
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-sm md:text-base">{item.title}</h3>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
