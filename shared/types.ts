export type Message = {
  id: string;
  title: string;
  speaker: string;
  date: string;
  image: string;
  video_url?: string;
  description?: string;
};

export type EventType = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationUrl?: string;
};

export type CampusLocation = {
  id: string;
  name: string;
  address: string;
  services: string;
  description?: string;
  image?: string;
  latitude?: number;
  longitude?: number;
  region: string;
};
