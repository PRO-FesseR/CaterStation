'use client'
import {useState} from "react";
import Register from "@/components/Authentication/register";
import Login from "@/components/Authentication/login";
import {motion} from "framer-motion";
import {dancing_Script} from "@/fonts/googleFonts";

export default function AuthDesktop() {
    const [isLogin, setIsLogin] =useState(true);

    return (


            <div className="w-full  h-full md:flex  hidden justify-between">
                <div className="flex-col flex bg-white h-full items-center justify-center w-[50%]">

                    <Register setLogin={()=>setIsLogin(true)}/>
                </div>
                <div className="flex-col flex bg-white items-center justify-center h-full w-[50%]">

                    <Login setLogin={()=>setIsLogin(false)}/>

                </div>
                <motion.div
                    initial={{
                        left: isLogin ? 0 : '50%',
                        backgroundColor: isLogin ? '#223454' : '#ffb72d',
                    }}
                    animate={{
                        left: isLogin ? 0 : '50%',
                        backgroundColor: isLogin ? '#223454' : '#ffb72d',
                    }}
                    transition={{
                        type: 'spring',
                        duration: 0.6,
                        bounce: 0,
                    }}
                    className="absolute text-white z-50 flex gap-0 justify-start overflow-hidden  w-[50%]  h-screen ">
                    <motion.div
                        initial={{
                            x: isLogin ? 0 : '-90%'
                        }}
                        animate={{
                            x: isLogin ? 0 : '-90%'
                        }}
                        transition={{
                            type: 'spring',
                            duration: 1,
                        }}
                        className="flex flex-col absolute  gap-10 justify-center items-center  w-full h-screen"
                    >
                        <h1 className={`${dancing_Script.className} text-[var(--color-accent-brand-yellow)] text-6xl lg:text-9xl`}>Login</h1>
                        <p className="text-2xl">Welcome back</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: !isLogin ? 0 : '100%'
                        }}
                        animate={{
                            x: !isLogin ? 0 : '100%'
                        }}
                        transition={{
                            type: 'spring',
                            duration: 0.6,
                        }}
                        className="flex flex-col absolute  gap-10 justify-center items-center  w-full h-full"
                    >
                        <h1 className={`${dancing_Script.className} text-[var(--color-accent-brand-blue)] text-6xl lg:text-9xl`}>Register</h1>
                        <p className="text-2xl px-4 text-center">Create an account! It's free and always will be</p>
                    </motion.div>

                </motion.div>
            </div>
    )
}