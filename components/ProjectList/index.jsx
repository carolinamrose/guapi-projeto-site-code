import { useContext } from 'react';
import { ProjectContext } from '@/hooks/ProjectContext';
import Image from 'next/image';
import Document from "../../public/images/Document.svg";
import Styles from "./ProjectList.module.scss";

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div>
      <ul className={Styles.projects__list}> 
        {projects.map((project, index) => (
          <li className={Styles.projects__name} key={index}><Image src={Document}/> {project}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
