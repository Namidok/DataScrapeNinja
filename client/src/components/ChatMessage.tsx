import { motion } from "framer-motion";
import { format } from "date-fns";

interface Message {
  id: number;
  message: string;
  isBot: boolean;
  timestamp: string;
}

interface ChatMessageProps {
  message: Message;
  index: number;
}

export default function ChatMessage({ message, index }: ChatMessageProps) {
  const formattedTime = format(new Date(message.timestamp), "h:mm a");

  return (
    <motion.div
      className={`mb-4 flex ${message.isBot ? "justify-start" : "justify-end"}`}
      initial={{ opacity: 0, x: message.isBot ? -10 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index % 3 }}
    >
      <div
        className={`p-3 rounded-xl max-w-[80%] ${
          message.isBot
            ? "bg-secondary text-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <p className="text-sm">{message.message}</p>
        <p className="text-xs mt-1 opacity-60">{formattedTime}</p>
      </div>
    </motion.div>
  );
}
