import { Layout, Pointer, Zap } from 'lucide-react';
import React from 'react'
import { Feature108 } from './ui/productCard';

const Product = () => {

    const demoData = {
        badge: "shadcnblocks.com",
        heading: "A Collection of Components Built With Shadcn & Tailwind",
        description: "Join us to build flawless web solutions.",
        tabs: [
            {
                value: "tab-1",
                icon: <Zap className="h-auto w-4 shrink-0" />,
                label: "Boost Revenue",
                content: {
                    badge: "Modern Tactics",
                    title: "Make your site a true standout.",
                    description:
                        "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
                    buttonText: "See Plans",
                    imageSrc:
                        "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
                    imageAlt: "placeholder",
                },
            },
            {
                value: "tab-2",
                icon: <Pointer className="h-auto w-4 shrink-0" />,
                label: "Higher Engagement",
                content: {
                    badge: "Expert Features",
                    title: "Boost your site with top-tier design.",
                    description:
                        "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
                    buttonText: "See Tools",
                    imageSrc:
                        "https://www.shadcnblocks.com/images/block/placeholder-dark-2.svg",
                    imageAlt: "placeholder",
                },
            },
            {
                value: "tab-3",
                icon: <Layout className="h-auto w-4 shrink-0" />,
                label: "Stunning Layouts",
                content: {
                    badge: "Elite Solutions",
                    title: "Build an advanced web experience.",
                    description:
                        "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
                    buttonText: "See Options",
                    imageSrc:
                        "https://www.shadcnblocks.com/images/block/placeholder-dark-3.svg",
                    imageAlt: "placeholder",
                },
            },
        ],
    };


    return (
        <div className="min-h-screen mx-auto text-white w-[97.5%] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background div */}
            <div className="absolute top-0 w-full h-[39rem] productBg z-0"></div>
            <div className="relative z-[10] h-full">
                <Feature108 {...demoData} />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[39rem] productDownBg z-0"></div>


        </div>

    )
}

export default Product
