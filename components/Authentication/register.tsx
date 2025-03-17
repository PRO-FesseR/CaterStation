"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label, LabelInputContainer } from "@/components/Authentication/auth-components/label";
import { Input } from "@/components/Authentication/auth-components/input";
import { InteractiveHoverButton } from "@/components/Authentication/auth-components/button";
import { FaGoogle } from "react-icons/fa";

// Schema validation using Zod
const registerSchema = z
    .object({
        firstname: z.string().min(2, "It is mandatory."),
        lastname: z.string().min(2, "It is mandatory."),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        rePassword: z.string(),
    })
    .refine((data) => data.password === data.rePassword, {
        message: "Passwords do not match",
        path: ["rePassword"],
    });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Register({ setLogin }: { setLogin: () => void }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data: RegisterFormValues) => {
        console.log("Form submitted", data);
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="First name" type="text" {...register("firstname")} />
                        {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Last name" type="text" {...register("lastname")} />
                        {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultChecked={false} placeholder="email@provider.com" type="email" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" {...register("password")} />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="rePassword">Re-type password</Label>
                    <Input id="rePassword" placeholder="••••••••" type="password" {...register("rePassword")} />
                    {errors.rePassword && <p className="text-red-500 text-sm">{errors.rePassword.message}</p>}
                </LabelInputContainer>

                <InteractiveHoverButton HoverClassName="bg-green-700" className="w-full" type="submit">
                    Register
                </InteractiveHoverButton>
                <InteractiveHoverButton type="button"
                                        HoverClassName="bg-red-500 dark:bg-gray-700"
                    className="w-full  mt-3 "
                >
                    <div className="flex items-center justify-center gap-2">
                        <FaGoogle size={15} />
                        <span>Continue with Google</span>
                    </div>
                </InteractiveHoverButton>

                <div className="relative flex items-center justify-center my-8">
                    <div className="w-full border-t border-neutral-300 dark:border-neutral-700"></div>
                    <span className="absolute bg-white dark:bg-black px-2">or</span>
                </div>


                <div className="mt-4 flex flex-col space-y-4">
                    <p className="text-sm text-center text-gray-600">
                         Already have an account?
                    </p>
                    <InteractiveHoverButton type="button" HoverClassName="bg-[var(--color-accent-brand-blue)]"
                                            onClick={setLogin} className="w-full">
                        Login To Account
                    </InteractiveHoverButton>
                </div>
            </form>
        </div>
    );
}
