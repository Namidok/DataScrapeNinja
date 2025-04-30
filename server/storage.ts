import { 
  users, 
  type User, 
  type InsertUser,
  chatMessages,
  type ChatMessage,
  type InsertChatMessage,
  chatResponses,
  type ChatResponse,
  type InsertChatResponse
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Chat messages operations
  getChatMessages(userId?: number): Promise<ChatMessage[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  
  // Chat responses operations
  getAllChatResponses(): Promise<ChatResponse[]>;
  getChatResponseByKeyword(keyword: string): Promise<ChatResponse | undefined>;
  createChatResponse(response: InsertChatResponse): Promise<ChatResponse>;
  initializeChatResponses(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, ChatMessage>;
  private responses: Map<number, ChatResponse>;
  userCurrentId: number;
  messageCurrentId: number;
  responseCurrentId: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.responses = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.responseCurrentId = 1;
    
    // Initialize with default chat responses
    this.initializeChatResponses();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getChatMessages(userId?: number): Promise<ChatMessage[]> {
    const allMessages = Array.from(this.messages.values());
    if (userId) {
      return allMessages.filter(message => message.userId === userId);
    }
    return allMessages;
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.messageCurrentId++;
    const message: ChatMessage = { ...insertMessage, id };
    this.messages.set(id, message);
    return message;
  }

  async getAllChatResponses(): Promise<ChatResponse[]> {
    return Array.from(this.responses.values());
  }

  async getChatResponseByKeyword(keyword: string): Promise<ChatResponse | undefined> {
    return Array.from(this.responses.values()).find(
      (response) => response.keyword.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  async createChatResponse(insertResponse: InsertChatResponse): Promise<ChatResponse> {
    const id = this.responseCurrentId++;
    const response: ChatResponse = { ...insertResponse, id };
    this.responses.set(id, response);
    return response;
  }

  async initializeChatResponses(): Promise<void> {
    const defaultResponses: InsertChatResponse[] = [
      { keyword: "who are you", response: "I'm a portfolio chatbot designed to answer questions about the portfolio owner." },
      { keyword: "name", response: "This is John Doe's portfolio website. He's a passionate web developer with expertise in modern frontend technologies." },
      { keyword: "born", response: "John was born in New York City and grew up in the suburbs." },
      { keyword: "education", response: "John graduated with a Computer Science degree from MIT in 2018." },
      { keyword: "work experience", response: "John has worked at several tech companies including Google and Microsoft as a frontend developer." },
      { keyword: "hobbies", response: "John enjoys hiking, photography, and coding side projects during his free time." },
      { keyword: "projects", response: "John has worked on several projects including e-commerce websites, data visualization dashboards, and mobile applications. Check out the Projects section for more details!" },
      { keyword: "contact", response: "You can contact John through the social media links on the Contact page or send a message using the contact form." },
      { keyword: "skills", response: "John's technical skills include JavaScript, TypeScript, React, Next.js, Node.js, and various UI frameworks like Tailwind CSS." },
      { keyword: "hello", response: "Hello! How can I help you learn more about John today?" },
      { keyword: "hi", response: "Hi there! Feel free to ask me anything about John or his portfolio." },
      { keyword: "linkedin", response: "You can find John's LinkedIn profile in the Contact section of this website." },
      { keyword: "github", response: "John's GitHub username is johndoe. You can check his repositories for code samples and projects." },
      { keyword: "instagram", response: "John shares his photography work on Instagram. Find the link in the Contact section." },
      { keyword: "resume", response: "You can download John's resume from the About page." },
      { keyword: "current work", response: "Currently, John is working as a Senior Frontend Developer at a startup focusing on AI-powered web applications." },
      { keyword: "frontend", response: "John specializes in frontend development with React, TypeScript, and modern CSS frameworks." },
      { keyword: "backend", response: "While primarily a frontend developer, John is also skilled in Node.js and Express for backend development." },
      { keyword: "location", response: "John is currently based in San Francisco, California." },
      { keyword: "default", response: "I don't have specific information about that. Feel free to ask about John's experience, skills, projects, or contact information!" }
    ];

    // Clear existing responses and add defaults
    this.responses.clear();
    for (const response of defaultResponses) {
      await this.createChatResponse(response);
    }
  }
}

export const storage = new MemStorage();
