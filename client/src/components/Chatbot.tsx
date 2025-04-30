import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Bot } from "lucide-react";
import ChatMessage from "@/components/ChatMessage";
import { apiRequest } from "@/lib/queryClient";

interface ChatbotProps {
  onClose: () => void;
}

interface Message {
  id: number;
  message: string;
  isBot: boolean;
  timestamp: string;
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      message: "Hello! I'm John's assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      id: messages.length,
      message: input,
      isBot: false,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      // Send message to API and get response
      const response = await apiRequest("POST", "/api/chat", { message: input });
      const data = await response.json();
      
      // Add bot response to chat
      setMessages(prev => [...prev, {
        id: prev.length,
        message: data.botMessage.message,
        isBot: true,
        timestamp: data.botMessage.timestamp
      }]);
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Add error message if request fails
      setMessages(prev => [...prev, {
        id: prev.length,
        message: "Sorry, I couldn't process your request. Please try again.",
        isBot: true,
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-4 right-4 z-50 w-80 md:w-96 h-[500px] max-h-[80vh] bg-card rounded-xl shadow-lg border border-border overflow-hidden"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="mr-2 h-5 w-5 text-primary" />
            <h3 className="font-semibold">Chat with John's Assistant</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Messages */}
        <div className="p-4 overflow-y-auto h-[calc(100%-8rem)]">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <ChatMessage
                key={message.id}
                message={message}
                index={index}
              />
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-secondary text-foreground rounded-xl p-3 max-w-[80%]">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "600ms" }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
