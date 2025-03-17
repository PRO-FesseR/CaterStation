"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {  Input } from "@/components/Authentication/auth-components/input";
import { Label, LabelInputContainer } from "@/components/Authentication/auth-components/label";
import { InteractiveHoverButton } from "@/components/Authentication/auth-components/button";
import { FcGoogle } from "react-icons/fc";
import {FaGoogle} from "react-icons/fa";

// Schema validation with Zod
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login({ setLogin }: { setLogin: () => void }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log("Login submitted", data);
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="email@provider.com" type="email" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" {...register("password")} />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </LabelInputContainer>

                <InteractiveHoverButton className="w-full" HoverClassName="bg-green-700" type="submit">
                    Login
                </InteractiveHoverButton>
                <InteractiveHoverButton
                    type="button"
                    HoverClassName="bg-red-500 dark:bg-gray-700"
                    className="w-full  mt-3 "
                >
                    <div className="flex items-center justify-center gap-2">
                        <FaGoogle size={15} />
                        <span>Login with Google</span>
                    </div>
                </InteractiveHoverButton>
                <div className="relative flex items-center justify-center my-8">
                    <div className="w-full border-t border-neutral-300 dark:border-neutral-700"></div>
                    <span className="absolute bg-white dark:bg-black px-2">or</span>
                </div>


                <div className="mt-4 flex flex-col space-y-4">
                    <p className="text-sm text-center text-gray-600">
                         Don't have an account?
                    </p>
                    <InteractiveHoverButton type="button" HoverClassName="bg-[var(--color-accent-brand-yellow)]"
                                            onClick={setLogin} className="w-full">
                        Create a New Account
                    </InteractiveHoverButton>
                </div>
            </form>
        </div>
    );
}
