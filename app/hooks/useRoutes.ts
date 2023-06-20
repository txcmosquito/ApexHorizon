import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat, HiVideoCamera, HiOutlineMusicNote, HiCheck } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { AiOutlineRobot } from 'react-icons/ai';

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: HiChat,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Users', 
      href: '/users', 
      icon: HiUsers, 
      active: pathname === '/users'
    },
    {
      label: 'Videocall',
      href: '/videocall',
      icon: HiVideoCamera,
      active: pathname === '/videocall'
    },
    // {
    //   label: 'Music',
    //   href: '/music',
    //   icon: HiOutlineMusicNote,
    //   active: pathname === '/music'
    // },
    {
      label: 'Chatbot',
      href: '/chatbot',
      icon: AiOutlineRobot,
      active: pathname === '/chatbot'
    },
    {
      label: 'Logout', 
      onClick: () => signOut(),
      href: '#',
      icon: HiArrowLeftOnRectangle, 
    }
  ], [pathname, conversationId]);

  return routes;
};

export default useRoutes;
