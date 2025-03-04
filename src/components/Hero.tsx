import React from 'react'
import { FlipWords } from './ui/flip-words';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { SparklesCore } from './ui/sparkles';


const people = [
    {
        id: 1,
        name: "Github",
        designation: "webakash1806",
        link: "https://github.com/webakash1806",
        image:
            "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        name: "Instagram",
        designation: "__its_akash.18",
        link: "https://www.instagram.com/__its_akash.18/",
        image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvd25sb2FkJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        name: "Whatsapp",
        designation: "+91 6207234759",
        link: "https://wa.me/916207234759",
        image:
            "https://images.unsplash.com/photo-1661862649743-2799867c32b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhdHNhcHAlMjBsb2dvfGVufDB8fDB8fHww",
    },
    {
        id: 4,
        name: "Linkedin",
        designation: "itsakash18",
        link: "https://www.linkedin.com/in/itsakash18/",
        image:
            "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        name: "CV",
        designation: "Download CV",
        link: "",
        image:
            "https://cdn-icons-png.freepik.com/256/10118/10118795.png?uid=R55011592&ga=GA1.1.774467265.1732693696",
    },
];

const Hero = () => {
    return (
        <div className='h-[38rem] mx-auto text-white w-[97.5%] relative overflow-hidden'>
            <div className='h-[38rem] mainBg'>
            </div>
            <div className='absolute p-1 z-[100] w-full max-w-[30rem] lg:max-w-[39rem] text-center -translate-x-1/2 -translate-y-1/2 top-[47%] left-1/2'>
                <h1 className='text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-white font-[500] font-poppins tracking-wide'>Hello - I am</h1>

                <FlipWords words={['Akash Kumar Singh', 'Web Developer', 'Web Designer']} className={"text-white text-[1.9rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.6rem] font-[550] tracking-wide lg:tracking-wider text-center "} duration={2000} />

                <div className='pt-4'>
                    <TextGenerateEffect words={"Highly motivated and detail-oriented MERN Stack Web Developer with a strong foundation in front-end and back-end technologies."} />

                </div>

                <div className='flex items-center justify-center gap-8 mt-16'>
                    <div className="flex flex-row items-center justify-center">
                        <AnimatedTooltip items={people} />
                    </div>

                    <button className="inline-flex h-11 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#FFFFFF,45%,#FFFFFF,55%,#FFFFFF)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors">
                        Let&apos;s talk
                    </button>
                </div>




            </div>
            {/* <ShootingStars /> */}
            <SparklesCore />
        </div>
    )
}

export default Hero
