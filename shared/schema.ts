import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table for authentication purposes
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Message history in the chatbot
export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  message: text("message").notNull(),
  isBot: boolean("is_bot").notNull(),
  timestamp: text("timestamp").notNull(),
});

// Predefined chat responses for the chatbot
export const chatResponses = pgTable("chat_responses", {
  id: serial("id").primaryKey(),
  keyword: text("keyword").notNull(),
  response: text("response").notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  userId: true,
  message: true,
  isBot: true,
  timestamp: true,
});

export const insertChatResponseSchema = createInsertSchema(chatResponses).pick({
  keyword: true,
  response: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;

export type InsertChatResponse = z.infer<typeof insertChatResponseSchema>;
export type ChatResponse = typeof chatResponses.$inferSelect;
