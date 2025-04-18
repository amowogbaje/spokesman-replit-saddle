import { 
  type User, type InsertUser,
  type Location, type InsertLocation,
  type Message, type InsertMessage,
  type Event, type InsertEvent,
  type EventRegistration, type InsertEventRegistration
} from "@shared/schema";
import { api } from "./db";

/**
 * Storage interface for the application
 * This defines the contract between the application and the storage layer
 * The implementation uses the external API client to fetch data
 */
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Location methods
  getLocations(): Promise<Location[]>;
  getLocation(id: number): Promise<Location | undefined>;
  getLocationBySlug(slug: string): Promise<Location | undefined>;
  createLocation(location: InsertLocation): Promise<Location>;
  
  // Message methods
  getMessages(): Promise<Message[]>;
  getMessage(id: number): Promise<Message | undefined>;
  getMessageBySlug(slug: string): Promise<Message | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
  getLatestMessage(): Promise<Message | undefined>;
  
  // Event methods
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  getEventBySlug(slug: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Event registration methods
  registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration>;
  getEventRegistrations(eventId: number): Promise<EventRegistration[]>;
  getUserRegistrations(userId: number): Promise<EventRegistration[]>;
}

/**
 * External API Storage implementation
 * This class uses the external API client to fetch data instead of direct database access
 */
export class ExternalApiStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    try {
      return await api.users.getById(id.toString());
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const users = await api.users.getByUsername(username);
      return Array.isArray(users) && users.length > 0 ? users[0] : undefined;
    } catch (error) {
      console.error(`Error fetching user by username ${username}:`, error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    return await api.users.create(insertUser);
  }
  
  // Location methods
  async getLocations(): Promise<Location[]> {
    return await api.locations.getAll();
  }
  
  async getLocation(id: number): Promise<Location | undefined> {
    try {
      return await api.locations.getById(id.toString());
    } catch (error) {
      console.error(`Error fetching location ${id}:`, error);
      return undefined;
    }
  }
  
  async getLocationBySlug(slug: string): Promise<Location | undefined> {
    try {
      return await api.locations.getBySlug(slug);
    } catch (error) {
      console.error(`Error fetching location by slug ${slug}:`, error);
      return undefined;
    }
  }
  
  async createLocation(location: InsertLocation): Promise<Location> {
    return await api.locations.create(location);
  }
  
  // Message methods
  async getMessages(): Promise<Message[]> {
    return await api.messages.getAll();
  }
  
  async getMessage(id: number): Promise<Message | undefined> {
    try {
      return await api.messages.getById(id.toString());
    } catch (error) {
      console.error(`Error fetching message ${id}:`, error);
      return undefined;
    }
  }
  
  async getMessageBySlug(slug: string): Promise<Message | undefined> {
    try {
      return await api.messages.getBySlug(slug);
    } catch (error) {
      console.error(`Error fetching message by slug ${slug}:`, error);
      return undefined;
    }
  }
  
  async createMessage(message: InsertMessage): Promise<Message> {
    return await api.messages.create(message);
  }
  
  async getLatestMessage(): Promise<Message | undefined> {
    try {
      return await api.messages.getLatest();
    } catch (error) {
      console.error('Error fetching latest message:', error);
      return undefined;
    }
  }
  
  // Event methods
  async getEvents(): Promise<Event[]> {
    return await api.events.getAll();
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    try {
      return await api.events.getById(id.toString());
    } catch (error) {
      console.error(`Error fetching event ${id}:`, error);
      return undefined;
    }
  }
  
  async getEventBySlug(slug: string): Promise<Event | undefined> {
    try {
      return await api.events.getBySlug(slug);
    } catch (error) {
      console.error(`Error fetching event by slug ${slug}:`, error);
      return undefined;
    }
  }
  
  async createEvent(event: InsertEvent): Promise<Event> {
    return await api.events.create(event);
  }
  
  // Event registration methods
  async registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration> {
    return await api.eventRegistrations.register(registration);
  }
  
  async getEventRegistrations(eventId: number): Promise<EventRegistration[]> {
    return await api.eventRegistrations.getByEventId(eventId.toString());
  }
  
  async getUserRegistrations(userId: number): Promise<EventRegistration[]> {
    return await api.eventRegistrations.getByUserId(userId.toString());
  }
}

// Export an instance of the storage implementation
export const storage = new ExternalApiStorage();
