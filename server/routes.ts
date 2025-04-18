import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { events } from "./data/events";
import { locations } from "./data/locations";
import { messages } from "./data/messages";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.get('/api/events', (req, res) => {
    res.json(events);
  });

  app.get('/api/events/:id', (req, res) => {
    const event = events.find(e => e.id === req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  });

  app.get('/api/locations', (req, res) => {
    res.json(locations);
  });

  app.get('/api/locations/:id', (req, res) => {
    const location = locations.find(l => l.id === req.params.id);
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  });

  app.get('/api/messages', (req, res) => {
    res.json(messages);
  });

  app.get('/api/messages/:id', (req, res) => {
    const message = messages.find(m => m.id === req.params.id);
    if (message) {
      res.json(message);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  });

  app.get('/api/latest-message', (req, res) => {
    // Return the first message as the latest
    if (messages.length > 0) {
      res.json(messages[0]);
    } else {
      res.status(404).json({ message: 'No messages found' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
