import Hero from '@/components/Hero'
import { BackgroundPaths } from '@/components/ui/background-paths'
import HomeLayout from '@/Layout/HomeLayout'

const Home = () => {
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
            </div>} />
        </div>
    )
}

export default Home
