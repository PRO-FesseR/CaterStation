'use client'
import {motion} from "framer-motion";

export default function HeroForm(){

    return (
        <motion.form
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                type: "spring",
                duration: 0.9,
                delay: 0.8

            }}
            className="ease relative flex h-10 md:w-[40%] w-full md:mt-7 mt-5.5 items-center rounded-[30px] bg-gray-100 pl-3 pr-3 duration-500 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-center before:scale-x-0 before:rounded-[1px] before:bg-lime-600 before:transition-all before:duration-500 before:content-[''] focus-within:rounded-[1px] focus-within:before:scale-100 dark:bg-gray-800 dark:before:bg-lime-500"
            // onSubmit={function E() {
            // }}
        >
            <button
                className="mr-1 border-none bg-none text-gray-500"
                tabIndex={-1}
                type="button"
            >
                <svg
                    fill="none"
                    height="16"
                    role="img"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.333"
                    />
                </svg>
            </button>
            <input
                className="h-full w-full bg-transparent text-sm md:text-[0.9rem] text-black focus:outline-none dark:text-white [&:not(:placeholder-shown)~button]:visible [&:not(:placeholder-shown)~button]:opacity-100"
                placeholder="Search Your Favorite Vendors here..."
                required
                type="text"
            />
            <button
                className="invisible border-none text-gray-400 opacity-0 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:focus:ring-lime-500"
                type="reset"
            >
                <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </motion.form>
    )
}