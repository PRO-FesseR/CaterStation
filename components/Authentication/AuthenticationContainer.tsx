import AuthDesktop from "@/components/Authentication/auth-components/authDesktop";
import AuthMobile from "@/components/Authentication/auth-components/authMobile";

export default function  AuthenticationContainer(){
    return (
        <section className="flex md:h-screen overflow-x-hidden  w-screen ">
            <AuthMobile/>
            <AuthDesktop/>

        </section>
    )
}