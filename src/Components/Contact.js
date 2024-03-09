import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="p-8">
        <h3 className="text-5xl font-bold mb-4 underline text-center text-white">
          Contact us
        </h3>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="text-center mb-10">
        <h3 className="text-lg font-bold mb-4 text-white">Follow me...</h3>
        <div className="flex justify-center space-x-4">
          <NavLink to="https://www.instagram.com/patil_balu_007/">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="text-6xl text-pink-500 hover:text-pink-700 cursor-pointer"
            />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/balu-patil-74b241255">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-6xl text-blue-500 hover:text-blue-700 cursor-pointer"
            />
          </NavLink>
       
          <NavLink to="https://github.com/balu1p">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-6xl text-black hover:text-gray-950 cursor-pointer"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Contact;
