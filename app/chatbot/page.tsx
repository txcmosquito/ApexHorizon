import React from 'react';
import Chat from '@/app/chatbot/components/Chat'
import Image from "next/image";

const ChatBot = () => {


    return (
        <div className="flex bg-black min-h-screen overflow-hidden">
            <div className="w-1/5 bg-gray-800 overflow-y-auto">
                <div className="h-full bg-gray-700 w-1/4">
                    {/* Nested sidebar content goes here */}
                </div>
            </div>
            <div className="w-4/5">
                <div className="bg-black h-20 flex items-center justify-between px-4">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-white mr-2" viewBox="0 0 24 24" fill="currentColor">
                            {/* Beautiful icon SVG code goes here */}
                        </svg>
                        <h1 className="text-white text-xl font-bold">Aloy</h1>
                    </div>
                    <div className="relative">
                        <Image
                            className="w-12 h-12 animate-bounce"
                            src="/images/bot.svg"
                            alt="Visual Bot"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="h-full overflow-y-auto">
                    <Chat />
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
