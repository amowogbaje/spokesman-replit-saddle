export const SITE_NAME = "Saddleback Church";

export type ActionItem = {
  id: string;
  title: string;
  icon: string;
  color: string;
  link: string;
};

export type CardItem = {
  id: string;
  title?: string;
  content: string;
  link: string;
  linkText: string;
  image?: string;
  color?: string;
};

export type Location = {
  id: string;
  region: string;
  places: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  image: string;
  link: string;
};

export const ACTION_ITEMS: ActionItem[] = [
  {
    id: "new-to-spokesman",
    title: "New to Spokesman?",
    icon: "church",
    color: "bg-blue-500",
    link: "/welcome",
  },
  {
    id: "follow-jesus",
    title: "I want to follow Jesus.",
    icon: "heart",
    color: "bg-red-500", 
    link: "/faith",
  },
  {
    id: "get-baptized",
    title: "I want to get baptized.",
    icon: "droplet", 
    color: "bg-blue-400",
    link: "/baptism",
  },
  {
    id: "find-community",
    title: "I want to find community.",
    icon: "users",
    color: "bg-green-500",
    link: "/groups",
  },
  {
    id: "start-volunteering",
    title: "I want to start volunteering.",
    icon: "helping-hand", 
    color: "bg-purple-500",
    link: "/volunteer",
  }
];

export const INFO_CARDS: CardItem[] = [
  {
    id: "ilcon",
    // title: "Discretion Series",
    content: "Are you a Leader? Do you want to add effectiveness to your leadership? Jump on this!",
    link: "https://ilcon.spokesmancom.org",
    linkText: "Learn More",
    image: "/ilcon2025.jpg"
  },
  {
    id: "socialmedia",
    content: "There is a need for the Church to represent God on the social media, Do you have ideas?",
    link: "/social-media",
    linkText: "Learn More",
    image: "/social-media.png"
  }
];

export const LOCATIONS: Location[] = [
  {
    id: "north-america",
    region: "North America",
    places: "So. Cal / Vancouver"
  },
  {
    id: "germany",
    region: "Germany",
    places: "Berlin"
  },
  {
    id: "east-asia",
    region: "East Asia",
    places: "Hong Kong / Santa Rosa"
  },
  {
    id: "argentina",
    region: "Argentina",
    places: "Buenos Aires"
  }
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: "easter-service",
    title: "Easter Service",
    date: "April 17",
    month: "APR",
    day: "17",
    time: "9:00 AM & 11:00 AM",
    image: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/events/easter"
  },
  {
    id: "worship-night",
    title: "Worship Night",
    date: "April 22",
    month: "APR",
    day: "22",
    time: "7:00 PM",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/events/worship-night"
  },
  {
    id: "family-day",
    title: "Family Day",
    date: "April 29",
    month: "APR",
    day: "29",
    time: "10:00 AM - 3:00 PM",
    image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/events/family-day"
  },
  {
    id: "volunteer-training",
    title: "Volunteer Training",
    date: "May 2",
    month: "MAY",
    day: "02",
    time: "6:30 PM",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/events/volunteer-training"
  }
];

export const FOOTER_LINKS = {
  about: [
    { title: "Our Story", link: "/about" },
    { title: "Beliefs", link: "/about/beliefs" },
    { title: "Leadership", link: "/about/leadership" },
    { title: "Purpose", link: "/about/purpose" }
  ],
  connect: [
    { title: "Get Involved", link: "/get-involved" },
    { title: "Find a Group", link: "/groups" },
    { title: "Serve", link: "/serve" },
    { title: "Give", link: "/give" }
  ],
  resources: [
    { title: "Messages", link: "/messages" },
    { title: "Daily Devotional", link: "/devotionals" },
    { title: "Mobile App", link: "/app" },
    { title: "Calendar", link: "/events" }
  ]
};
