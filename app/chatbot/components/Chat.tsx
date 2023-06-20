'use client'


import '@/app/chatbot/style.css';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-layout bg-black">
            <div className="chat-container bg-black rounded-t-lg overflow-y-auto" ref={chatContainerRef}>
                <AnimatePresence initial={false}>
                    {messages.length > 0 ? (
                        messages.map((m, index) => (
                            <motion.div
                                key={m.id}
                                className={`message ${m.role === 'user' ? 'bg-emerald-200' : 'bg-violet-300'} p-4 rounded-md mb-4`}
                                style={{ animationDelay: `${index * 100}ms` }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="font-bold">{m.role === 'user' ? 'User: ' : 'AI: '}</span>
                                {m.content}
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            className="empty-message flex flex-col items-center justify-center text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Start the conversation...
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <form onSubmit={handleSubmit} className="flex items-center p-2 border-t border-gray-300">
                <input
                    className="input-field flex-grow py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                    value={input}
                    placeholder="Type a message..."
                    onChange={handleInputChange}
                />
                <motion.button
                    type="submit"
                    className="send-button ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                </motion.button>
            </form>
        </div>
    );
}

