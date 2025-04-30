import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get chat bot responses
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = z.object({ message: z.string() }).parse(req.body);
      
      // Record the user message
      const userMessage = await storage.createChatMessage({
        userId: 0, // anonymous user
        message,
        isBot: false,
        timestamp: new Date().toISOString()
      });
      
      // Get appropriate response
      let responseText = "";
      
      // Try to find a matching response
      for (const keyword of message.toLowerCase().split(" ")) {
        if (keyword.length < 3) continue; // Skip small words
        
        const matchingResponse = await storage.getChatResponseByKeyword(keyword);
        if (matchingResponse) {
          responseText = matchingResponse.response;
          break;
        }
      }
      
      // If no matching response found, use default
      if (!responseText) {
        const defaultResponse = await storage.getChatResponseByKeyword("default");
        responseText = defaultResponse?.response || "I'm not sure how to answer that. Could you ask something else?";
      }
      
      // Record the bot response
      const botMessage = await storage.createChatMessage({
        userId: 0, // anonymous user
        message: responseText,
        isBot: true,
        timestamp: new Date().toISOString()
      });
      
      res.json({ 
        userMessage,
        botMessage
      });
    } catch (error) {
      console.error("Error in chat API:", error);
      res.status(400).json({ message: "Invalid request" });
    }
  });

  // Get chat message history
  app.get("/api/chat/history", async (req, res) => {
    try {
      const messages = await storage.getChatMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching chat history:", error);
      res.status(500).json({ message: "Failed to fetch chat history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
