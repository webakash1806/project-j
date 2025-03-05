import Hero from '@/components/Hero'
import { BackgroundPaths } from '@/components/ui/background-paths'
import HomeLayout from '@/Layout/HomeLayout'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom'
import { SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import Product from '@/components/Product';


const Home = () => {

    const skillsIcon = [
        { icon: <IoLogoJavascript className="text-white text-[1.4rem]" /> },
        { icon: <GrReactjs className="text-white text-[1.4rem]" /> },
        { icon: <SiTailwindcss className="text-white text-[1.4rem]" /> },
        { icon: <IoLogoNodejs className="text-white text-[1.4rem]" /> },
        { icon: <SiExpress className="text-white text-[1.4rem]" /> },
        { icon: <SiMongodb className="text-white text-[1.4rem]" /> },
        { icon: <SiRedux className="text-white text-[1.4rem]" /> },
        { icon: <SiTypescript className="text-white text-[1.4rem]" /> },

    ]

    return (
        <div className='bg-mainBg'>
            <HomeLayout />
            <Hero />
            <BackgroundPaths title='About' description={<div>
                <p className=" font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-tr from-neutral-300 to-white ">
                    I am a passionate MERN Stack Web Developer with expertise in MongoDB, Express.js, React.js, and Node.js. I specialize in crafting dynamic, user-centric web applications that deliver exceptional functionality and seamless user experiences.
                </p>
                <p className=" font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-tr mt-4 from-neutral-300 to-white ">

                    As a MERN Stack web developer, I craft dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I excel in both frontend and backend development, ensuring clean code and user-friendly experiences. With a passion for innovation, I stay updated on emerging technologies to deliver top-notch solutions.
                </p>
                <div
                    className="row-span-1 mt-6 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-2 bg-black border-white/[0.2] border  justify-between flex flex-col overflow-hidden">
                    <div className={`transition duration-200 group-hover/bento:translate-x-2 mb-2 flex flex-col items-center justify-center`}>
                        <div
                            className={`flex items-center gap-2 mt-2 mb-2 font-sans font-bold text-neutral-200`}>
                            Skills

                        </div>

                    </div>
                    {<div className="relative overflow-hidden w-full h-[4rem]">
                        <Marquee
                            gradient={true}
                            speed={15}
                            pauseOnHover
                            gradientColor='#000'
                            gradientWidth={100}
                            direction="left"
                        >
                            {[
                                ...skillsIcon,
                                ...skillsIcon,
                                ...skillsIcon,
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    to="/"
                                    className="flex items-center gap-2 ml-5 group"
                                >
                                    <div
                                        className="flex-shrink-0 w-[3.6rem] h-[3.6rem] border group-hover:bg-custom-radial rounded-[0.85rem] bg-gradient-to-b from-iconUp to-iconDown flex items-center justify-center border-iconBorder"
                                    >
                                        {item?.icon}
                                    </div>
                                </Link>
                            ))}
                        </Marquee>
                    </div>}

                </div>

            </div>} />

            <Product />
        </div>
    )
}

export default Home
