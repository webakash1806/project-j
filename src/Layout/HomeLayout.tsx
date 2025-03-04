import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { Link } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div className="bg-transparent top-0 z-[1000] sticky mx-auto flex justify-center items-center py-4">
            <HoverBorderGradient className={"bg-[#111321] backdrop-blur-sm text-[0.82rem] font-[400] border border-lightGray text-white rounded-full px-2 py-1 shadow-md "}>
                <nav className="flex gap-2">
                    <Link to="/" className="px-4 py-1 transition duration-300 rounded-full hover:bg-lightGray hover:text-gray-200">Home</Link>
                    <Link to="/" className="px-4 py-1 transition duration-300 rounded-full hover:bg-lightGray hover:text-gray-200">About</Link>
                    <Link to="/" className="px-4 py-1 transition duration-300 rounded-full hover:bg-lightGray hover:text-gray-200">Projects</Link>
                    <Link to="/" className="px-4 py-1 transition duration-300 rounded-full hover:bg-lightGray hover:text-gray-200">Contact</Link>
                    <Link to="/" className="Btn">Hire me</Link>


                </nav>
            </HoverBorderGradient>
        </div>
    )
}

export default HomeLayout
