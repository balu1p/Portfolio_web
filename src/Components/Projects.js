import BookingApp from "../assets/BookingApp.png";
import SwiggyClone from "../assets/Swiggy Clone.png";
import TodoList from "../assets/TodoList.png";
import DragonGame from "../assets/Dragon-Game.png";
import { useState } from "react";
const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Swiggy Clone",
      image: SwiggyClone,
      description: "It is swiggy clone i use real data for this project.",
    },
    {
      id: 2,
      name: "Booking App",
      image: BookingApp,
      description: "It is Booking App here you sign in , book your movie.",
    },
    {
      id: 3,
      name: "Todo List",
      image: TodoList,
      description:
        "In this project you add daily routine. also i gave delete functionality in this.",
    },
    {
      id: 4,
      name: "Dragon Game",
      image: DragonGame,
      description:
        "In this project you play Dragon Game. your score will display in the screen.",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <>
      <h3 className="text-5xl font-bold mb-4 underline text-center text-white">
        Projects
      </h3>
      <div className="flex justify-around flex-wrap m-4 p-2">
        {projects.map((project) => (
          <div key={project.id} className="relative m-2">
            <div
              style={{
                border: "1px solid #718096",
                borderRadius: "0.375rem",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              className={`rounded-lg hover:translate-x-0.5 hover:shadow-2xl transition-all ${
                hoveredProject === project.id ? "translate-x-1" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                className="w-96 h-60 rounded-lg"
                src={project.image}
                alt={project.name}
              />
              {hoveredProject === project.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-center bg-white">
                      {project.name}
                    </h4>
                    <p className="text-black font-medium m-2">{project.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        
    </div>
    </>
  );
};

export default Project;
