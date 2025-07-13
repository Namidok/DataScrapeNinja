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
      (response) => response.keyword.toLowerCase() === keyword.toLowerCase()
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
      { keyword: "who are you", response: "I am Srikar Kodi's AI assistant, designed to provide information about his professional background, skills, and projects to potential employers and collaborators." },
      { keyword: "name", response: "This is Srikar Kodi's professional portfolio. He is a dedicated Full Stack Python & AI Enthusiast with a strong background in developing intelligent web solutions and robust data pipelines." },
      { keyword: "born", response: "Srikar is based in Visakhapatnam, Andhra Pradesh, India." },
      { keyword: "education", response: "Srikar holds a Bachelor's degree in Electronics and Communication Engineering from MVGR College of Engineering, providing a solid foundation for his technical career." },
      { keyword: "work experience", response: "Srikar has 3 years of professional experience, including 2 years in Application Development at Vavili Technologies, where he contributed to full-stack web applications like TemplesWiki, and 1 year in Quality Assurance at ValueLabs, focusing on test plan development and software quality." },
      { keyword: "hobbies", response: "Beyond professional work, Srikar is passionate about developing AI projects, optimizing data engineering solutions, and creating innovative software applications." },
      { keyword: "projects", response: "Srikar's portfolio includes impactful projects like Cipher (a personal chatbot assistant), a Dataset Translator App, and contributions to TemplesWiki. These demonstrate his expertise in full-stack development, AI, and data engineering. More details are available in the Projects section." },
      { keyword: "contact", response: "You can connect with Srikar via his LinkedIn and GitHub profiles, linked in the Contact section of this website, or by using the direct contact form." },
      { keyword: "skills", response: "Srikar's core technical skills include Python, SQL, PostgreSQL, Flask, Django, AWS, Docker, Kubernetes, ETL development, data visualization, and proficiency in AI/ML frameworks like TensorFlow and PyTorch." },
      { keyword: "hello", response: "Hello! I'm here to assist you with any professional inquiries about Srikar Kodi. How can I help you today?" },
      { keyword: "hi", response: "Hi there! Feel free to ask me anything about Srikar's professional experience, technical skills, or projects." },
      { keyword: "linkedin", response: "You can find Srikar Kodi's professional LinkedIn profile in the Contact section of this website for more details on his career journey." },
      { keyword: "github", response: "Srikar's GitHub username is Namidok. His repositories showcase his coding style and project contributions. You can find the link in the Contact section." },
      { keyword: "resume", response: "For a comprehensive overview of Srikar's qualifications, please refer to his resume, accessible via the 'View Resume' button on the About page." },
      { keyword: "current work", response: "Srikar is currently focused on developing full-stack applications that integrate AI technologies, specializing in Python backends and modern frontend frameworks." },
      { keyword: "data engineering", response: "Srikar possesses strong expertise in data engineering, including building robust ETL pipelines, data transformation, and data management using Python and SQL." },
      { keyword: "python", response: "Srikar is highly proficient in Python, leveraging it for backend development, data engineering, AI/ML applications, and scripting." },
      { keyword: "chatbot", response: "Srikar has developed 'Cipher,' a personal chatbot assistant, demonstrating his capabilities in natural language processing and conversational AI development." },
      { keyword: "location", response: "Srikar is currently located in Visakhapatnam, Andhra Pradesh, India, and is open to remote opportunities." },
      { keyword: "default", response: "I can provide more details about Srikar's professional experience, technical skills, or specific projects. Please ask a more specific question related to his professional profile." }
    ];

    // Clear existing responses and add defaults
    this.responses.clear();
    for (const response of defaultResponses) {
      await this.createChatResponse(response);
    }
  }
}

export const storage = new MemStorage();
