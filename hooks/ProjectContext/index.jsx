import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const storedProjects = localStorage.getItem('projects');
        if (storedProjects) {
          setProjects(JSON.parse(storedProjects));
        }
      }, []);

      useEffect(() => {
        const uniqueProjects = Array.from(new Set(projects));
        localStorage.setItem('projects', JSON.stringify(uniqueProjects));
      }, [projects]);

      const addProject = (project) => {
        const capitalizedProject = capitalizeFirstLetter(project);
        setProjects((prevProjects) => {
          if (prevProjects.includes(capitalizedProject)) {
            return prevProjects;
          }
          return [...prevProjects, capitalizedProject];
        });
      };

      console.log(projects)

      return (
        <ProjectContext.Provider value={{ projects, addProject }}>
          {children}
        </ProjectContext.Provider>
      );
};