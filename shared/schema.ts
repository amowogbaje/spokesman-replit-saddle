import { pgTable, text, serial, integer, timestamp, uuid, varchar, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Locations/campuses table
export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  services: text("services").notNull(),
  description: text("description"),
  image: text("image"),
  latitude: text("latitude"),
  longitude: text("longitude"),
  region: text("region").notNull(),
});

// Messages/sermons table
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  speaker: text("speaker").notNull(),
  date: text("date").notNull(),
  image: text("image").notNull(),
  video_url: text("video_url"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Events table
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  registrationUrl: text("registration_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Event registrations table
export const eventRegistrations = pgTable("event_registrations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  eventId: integer("event_id").notNull().references(() => events.id),
  registeredAt: timestamp("registered_at").defaultNow().notNull(),
  attended: boolean("attended").default(false),
});

export const eventRegistrationsRelations = relations(eventRegistrations, ({ one }) => ({
  user: one(users, {
    fields: [eventRegistrations.userId],
    references: [users.id],
  }),
  event: one(events, {
    fields: [eventRegistrations.eventId],
    references: [events.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  name: true,
});

export const insertLocationSchema = createInsertSchema(locations).pick({
  slug: true,
  name: true,
  address: true,
  services: true,
  description: true,
  image: true,
  latitude: true,
  longitude: true,
  region: true,
});

export const insertMessageSchema = createInsertSchema(messages).pick({
  slug: true,
  title: true,
  speaker: true,
  date: true,
  image: true,
  videoUrl: true,
  description: true,
});

export const insertEventSchema = createInsertSchema(events).pick({
  slug: true,
  title: true,
  date: true,
  time: true,
  location: true,
  description: true,
  image: true,
  registrationUrl: true,
});

export const insertEventRegistrationSchema = createInsertSchema(eventRegistrations).pick({
  userId: true,
  eventId: true,
});

// Type definitions
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertLocation = z.infer<typeof insertLocationSchema>;
export type Location = typeof locations.$inferSelect;

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertEventRegistration = z.infer<typeof insertEventRegistrationSchema>;
export type EventRegistration = typeof eventRegistrations.$inferSelect;

// Add relations after all tables are defined
export const usersRelations = relations(users, ({ many }) => ({
  registrations: many(eventRegistrations),
}));

export const eventsRelations = relations(events, ({ many }) => ({
  registrations: many(eventRegistrations),
}));
