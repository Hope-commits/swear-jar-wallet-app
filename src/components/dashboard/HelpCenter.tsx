
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Phone, Mail, Search, Book } from "lucide-react";
import { useState } from "react";

const HelpCenter = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: "assistant",
      message: "Hello! I'm your No Bad Words assistant. How can I help you today? I can assist with account issues, payment problems, or answer questions about using the app effectively."
    }
  ]);

  const faqs = [
    {
      question: "How does the word detection work?",
      answer: "Our app uses advanced speech recognition and text analysis to detect inappropriate words. You can adjust sensitivity levels in settings."
    },
    {
      question: "Can I get refunds for accidental charges?",
      answer: "Yes! If you believe you were charged by mistake, contact support within 24 hours and we'll review your case."
    },
    {
      question: "How do I set up parental monitoring?",
      answer: "Enable Family Mode in settings, then add family members. Parents can monitor all family member activities and set custom rules."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely! We use bank-grade encryption and never store your full payment details. All transactions are processed securely through FNB."
    },
    {
      question: "Can I customize the word list?",
      answer: "Yes! Go to Settings > Custom Word Lists to add your own words or exclude certain words from triggering fines."
    }
  ];

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    const userMessage = {
      id: chatHistory.length + 1,
      type: "user",
      message: chatMessage
    };

    const assistantResponse = {
      id: chatHistory.length + 2,
      type: "assistant", 
      message: "I understand you're asking about '" + chatMessage + "'. Let me help you with that! For complex issues, I recommend checking our FAQ section or contacting our support team directly."
    };

    setChatHistory([...chatHistory, userMessage, assistantResponse]);
    setChatMessage("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
        <p className="text-gray-600">Get help with your No Bad Words journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Assistant Chat */}
        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
          </div>
          
          <div className="h-64 overflow-y-auto mb-4 p-3 border border-gray-200 rounded-lg bg-white/50">
            {chatHistory.map((message) => (
              <div key={message.id} className={`mb-3 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg max-w-xs ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-2">
            <Input
              placeholder="Ask me anything about the app..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
              Send
            </Button>
          </div>
        </Card>

        {/* Contact Support */}
        <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Support</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white/50 cursor-pointer">
              <Phone className="w-5 h-5 text-green-600" />
              <div>
                <h4 className="font-medium text-gray-900">Phone Support</h4>
                <p className="text-sm text-gray-600">+27 11 123 4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white/50 cursor-pointer">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <h4 className="font-medium text-gray-900">Email Support</h4>
                <p className="text-sm text-gray-600">support@nobadwords.co.za</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white/50 cursor-pointer">
              <MessageCircle className="w-5 h-5 text-purple-600" />
              <div>
                <h4 className="font-medium text-gray-900">Live Chat</h4>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Book className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h3>
        </div>
        
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search FAQs..." className="pl-10" />
          </div>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="border border-gray-200 rounded-lg p-3 bg-white/50">
              <summary className="font-medium text-gray-900 cursor-pointer hover:text-blue-600">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Card>

      {/* Parental Monitoring Info */}
      <Card className="backdrop-blur-sm bg-white/40 border-white/20 shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Parental Monitoring Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Real-time Monitoring</h4>
            <p className="text-sm text-gray-600">Track your children's language usage in real-time with instant notifications when inappropriate words are detected.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Custom Rules</h4>
            <p className="text-sm text-gray-600">Set different fine amounts and rules for each child. Create age-appropriate word lists and sensitivity levels.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Progress Reports</h4>
            <p className="text-sm text-gray-600">Receive weekly and monthly reports showing improvement trends and areas that need attention.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Reward System</h4>
            <p className="text-sm text-gray-600">Set up positive reinforcement with rewards for achieving clean speech goals and maintaining good behavior.</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 mt-4">
          Enable Family Mode
        </Button>
      </Card>
    </div>
  );
};

export default HelpCenter;
