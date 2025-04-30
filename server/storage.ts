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
    const message: ChatMessage = { 
      ...insertMessage, 
      id,
      userId: insertMessage.userId || null 
    };
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
      { keyword: "who are you", response: "I'm a portfolio chatbot designed to answer questions about Srikar Kodi, the portfolio owner." },
      { keyword: "name", response: "This is Srikar Kodi's portfolio website. He's a passionate Python developer and data engineer with expertise in ETL processes and full-stack development." },
      { keyword: "born", response: "Srikar is from Visakhapatnam, Andhra Pradesh, India." },
      { keyword: "education", response: "Srikar graduated with a Bachelor's degree in Computer Science & Engineering from MVGR College of Engineering." },
      { keyword: "work experience", response: "Srikar has worked at Vavili Technologies as a Software Developer Trainee and at ValueLabs as a Software Engineer." },
      { keyword: "hobbies", response: "Srikar enjoys developing AI projects, working on data engineering solutions, and creating innovative software applications." },
      { keyword: "projects", response: "Srikar has worked on several projects including Cipher (personal chatbot assistant), Dataset Translator App, and Data Engineer with Python. Check out the Projects section for more details!" },
      { keyword: "contact", response: "You can contact Srikar through GitHub and LinkedIn links on the Contact page or send a message using the contact form." },
      { keyword: "skills", response: "Srikar's technical skills include Python, SQL, Flask, Django, PostgreSQL, AWS, ETL development, and data engineering." },
      { keyword: "hello", response: "Hello! How can I help you learn more about Srikar today?" },
      { keyword: "hi", response: "Hi there! Feel free to ask me anything about Srikar or his portfolio." },
      { keyword: "linkedin", response: "You can find Srikar's LinkedIn profile in the Contact section of this website." },
      { keyword: "github", response: "Srikar's GitHub username is Namidok. You can check his repositories for code samples and projects." },
      { keyword: "resume", response: "You can learn about Srikar's experience and skills on the About page." },
      { keyword: "current work", response: "Srikar is a Python Developer and Data Engineer with experience in ETL processes and full-stack development." },
      { keyword: "data engineering", response: "Srikar specializes in data engineering, building ETL pipelines, and data transformation solutions using Python." },
      { keyword: "python", response: "Srikar is proficient in Python programming and has developed several applications and data solutions with it." },
      { keyword: "chatbot", response: "Srikar has developed 'Cipher', a personal chatbot assistant, and has experience with NLP and conversational AI." },
      { keyword: "location", response: "Srikar is currently based in Visakhapatnam, Andhra Pradesh, India." },
      { keyword: "default", response: "I don't have specific information about that. Feel free to ask about Srikar's experience, skills, projects, or contact information!" }
    ];

    // Clear existing responses and add defaults
    this.responses.clear();
    for (const response of defaultResponses) {
      await this.createChatResponse(response);
    }
  }
}

export const storage = new MemStorage();
