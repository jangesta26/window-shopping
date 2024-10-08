'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound404 = () => {
    const router = useRouter();
    return (
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <Image 
                className="hidden lg:block" 
                src="https://i.ibb.co/v30JLYr/Group-192-2.png" 
                alt=""
                width={300}
                height={300}
                />
                <Image 
                className="hidden md:block lg:hidden" 
                src="https://i.ibb.co/c1ggfn2/Group-193.png" 
                alt="" 
                width={300}
                height={300}
                />
                <Image 
                className="md:hidden" 
                src="https://i.ibb.co/8gTVH2Y/Group-198.png" 
                alt="" 
                width={300}
                height={300}
                />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">Looks like you&apos;ve found the doorway to the great nothing</h1>
                <p className="py-4 text-base text-gray-800">The content you&apos;re looking for doesn&apos;t exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-base text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <Button 
                className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-primary text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                onClick={()=>router.push('/')}
                >
                    Go back to Homepage
                </Button>
            </div>
        </div>
    );
};

export default NotFound404;
