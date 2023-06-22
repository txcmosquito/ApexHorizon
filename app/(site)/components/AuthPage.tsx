import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const DesktopAuthForm = dynamic(() => import('@/app/(site)/components/AuthForm'), {
    ssr: false,
});
const MobileAuthForm = dynamic(() => import('../components/MobileAuthForm'), {
    ssr: false,
});

const AuthPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return isMobile ? <MobileAuthForm /> : <DesktopAuthForm />;
};

export default AuthPage;
