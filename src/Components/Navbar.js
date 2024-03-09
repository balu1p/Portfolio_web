import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between p-3 border-b-2 text-white cursor-pointer">
        <Link to='/'><div><p className="font-Italic text-3xl hover:text-pink-300">Balu Patil</p></div></Link>
        <ul className="flex gap-36 ">
        <Link to='/'><li className="hover:text-gray-400 hover:animate-bounce">Home</li></Link>
        <Link to='/skill'><li className="hover:text-gray-400 hover:animate-bounce">Skill</li></Link>
        <Link to='/projects'><li className="hover:text-gray-400 hover:animate-bounce">Projects</li></Link>
        <Link to='/contactus'><li className="hover:text-gray-400 hover:animate-bounce">Contact us</li></Link>
        </ul>
        </div>
    )
}
export default Navbar;