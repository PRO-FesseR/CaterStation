'use client';

import { useState } from 'react';
import Register from '@/components/Authentication/register';
import Login from '@/components/Authentication/login';
import { motion } from 'framer-motion';
import { dancing_Script } from '@/fonts/googleFonts';

export default function AuthMobile() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="w-full md:hidden  h-screen flex flex-col  items-center justify-center px-6  ">

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full top-[10%] max-w-md absolute bg-white p-6 rounded-lg "
            >
                <h1 className={`${dancing_Script.className} text-center text-4xl text-[var(--color-accent-brand-blue)] mb-6`}>
                    {isLogin ? 'Login' : 'Register'}
                </h1>
                {isLogin ? <Login setLogin={() => setIsLogin(false)} /> : <Register setLogin={() => setIsLogin(true)} />}


            </motion.div>
        </div>
    );
}
