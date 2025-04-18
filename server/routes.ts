import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEventSchema, insertLocationSchema, insertMessageSchema, insertUserSchema, insertEventRegistrationSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Helper function to handle validation errors
  const validateRequest = (schema: any, req: Request, res: Response) => {
    try {
      return schema.parse(req.body);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: 'Validation error', 
          errors: error.errors 
        });
        return null;
      }
      throw error;
    }
  };

  // User routes
  app.post('/api/users', async (req, res) => {
    const userData = validateRequest(insertUserSchema, req, res);
    if (!userData) return;
    
    try {
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
      }
      
      const user = await storage.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Event routes
  app.get('/api/events', async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/api/events/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }
      
      const event = await storage.getEvent(id);
      if (event) {
        res.json(event);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      console.error('Error fetching event:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.post('/api/events', async (req, res) => {
    const eventData = validateRequest(insertEventSchema, req, res);
    if (!eventData) return;
    
    try {
      const event = await storage.createEvent(eventData);
      res.status(201).json(event);
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Location routes
  app.get('/api/locations', async (req, res) => {
    try {
      const locations = await storage.getLocations();
      res.json(locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/api/locations/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }
      
      const location = await storage.getLocation(id);
      if (location) {
        res.json(location);
      } else {
        res.status(404).json({ message: 'Location not found' });
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.post('/api/locations', async (req, res) => {
    const locationData = validateRequest(insertLocationSchema, req, res);
    if (!locationData) return;
    
    try {
      const location = await storage.createLocation(locationData);
      res.status(201).json(location);
    } catch (error) {
      console.error('Error creating location:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Message routes
  app.get('/api/messages', async (req, res) => {
    try {
      const messages = await storage.getMessages();
      res.json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/api/messages/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }
      
      const message = await storage.getMessage(id);
      if (message) {
        res.json(message);
      } else {
        res.status(404).json({ message: 'Message not found' });
      }
    } catch (error) {
      console.error('Error fetching message:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.post('/api/messages', async (req, res) => {
    const messageData = validateRequest(insertMessageSchema, req, res);
    if (!messageData) return;
    
    try {
      const message = await storage.createMessage(messageData);
      res.status(201).json(message);
    } catch (error) {
      console.error('Error creating message:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/api/latest-message', async (req, res) => {
    try {
      const latestMessage = await storage.getLatestMessage();
      if (latestMessage) {
        res.json(latestMessage);
      } else {
        res.status(404).json({ message: 'No messages found' });
      }
    } catch (error) {
      console.error('Error fetching latest message:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Event registration routes
  app.post('/api/event-registrations', async (req, res) => {
    const registrationData = validateRequest(insertEventRegistrationSchema, req, res);
    if (!registrationData) return;
    
    try {
      // Validate that user and event exist
      const user = await storage.getUser(registrationData.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      const event = await storage.getEvent(registrationData.eventId);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      
      // Create the registration
      const registration = await storage.registerForEvent(registrationData);
      res.status(201).json(registration);
    } catch (error) {
      console.error('Error creating event registration:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.get('/api/event-registrations/event/:eventId', async (req, res) => {
    try {
      const eventId = parseInt(req.params.eventId);
      if (isNaN(eventId)) {
        return res.status(400).json({ message: 'Invalid event ID format' });
      }
      
      const registrations = await storage.getEventRegistrations(eventId);
      res.json(registrations);
    } catch (error) {
      console.error('Error fetching event registrations:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.get('/api/event-registrations/user/:userId', async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID format' });
      }
      
      const registrations = await storage.getUserRegistrations(userId);
      res.json(registrations);
    } catch (error) {
      console.error('Error fetching user registrations:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
