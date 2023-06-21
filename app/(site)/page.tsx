'use client'

import '@/app/globals.css'

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import AuthForm from "./components/AuthForm";
// import Confetti from "react-confetti";
import { FiMoon, FiStar } from "react-icons/fi";
import "./styles.css"; // Add your custom styles here

const Auth = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPandora(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const [showPandora, setShowPandora] = useState(false);

    // Define the animation properties
    const pandoraAnimation = useSpring({
        opacity: showPandora ? 1 : 0,
        transform: showPandora ? "translateY(0)" : "translateY(50px)",
        config: { duration: 500 },
    });

    return (
        <div className="flex min-h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" >
            <div className="absolute top-0 right-0 z-10">
                <FiStar className="animate-spin w-12 h-12 text-yellow-300" />
                <FiMoon className="animate-pulse w-12 h-12 text-gray-300" />
            </div>

            {/*<div className="absolute inset-0 flex flex-col justify-center items-center z-0">*/}
            {/*    <Confetti*/}
            {/*        width={window.innerWidth}*/}
            {/*        height={window.innerHeight}*/}
            {/*        recycle={false}*/}
            {/*    />*/}
            {/*</div>*/}

            <div className="w-full max-w-md flex flex-col justify-center py-12 px-6 z-10">
                {/*<h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">*/}
                {/*    Welcome to Pandora Chat*/}
                {/*</h2>*/}
                <AuthForm />
            </div>
            <div className="flex flex-col justify-center items-start py-12 px-6 z-10">
                <animated.h1
                    className="text-4xl font-bold text-yellow-300 mb-4"
                    style={pandoraAnimation}
                >
                    ApexConnect
                </animated.h1>
                <animated.p className="text-white text-lg" style={pandoraAnimation}>
                    Apex Connect is a powerful and dynamic chat application designed to revolutionize the way people connect and communicate. With its cutting-edge features and user-friendly interface, Apex Connect offers a seamless and engaging messaging experience. Apex Connect boasts real-time messaging capabilities, allowing users to instantly exchange messages, photos and other media with their contacts. Whether its one-on-one conversations or group chats, Apex Connect provides a platform for effortless and efficient communication.
                </animated.p>
            </div>
        </div>
    );
};

export default Auth;





