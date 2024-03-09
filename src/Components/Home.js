
import heroImage from "../assets/heroImage.jpg";
const Home = () => {
  
  return (
    <div>
      <div className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-2xl sm:text-7xl font-medium text-pink-200">
              {" "}
              <i>I'm a Front-End Developer....</i>
            </h2>

            <p className="text-gray-500 py-4 max-w-md">
              With a solid foundation in software development, my current focus
              revolves around the dynamic realm of web applications. I
              specialize in utilizing technologies like React, Tailwind, and
              JavaScript to create sleek, user-centric interfaces. My passion
              lies in seamlessly blending design and functionality to deliver
              compelling digital solutions
            </p>
          </div>

          <div>
            <img
              src={heroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
