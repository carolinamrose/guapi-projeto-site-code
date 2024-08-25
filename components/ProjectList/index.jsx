import { useContext } from 'react';
import { ProjectContext } from '@/hooks/ProjectContext';
import Image from 'next/image';
import Document from "../../public/images/Document.svg";
import Styles from "./ProjectList.module.scss";

const ProjectList = ({ documentSrc = Document, bgColor ="none", titleColor = "#444648" }) => {
  const { projects } = useContext(ProjectContext);

  return (
    <div>
      <ul className={Styles.projects__list} style={{ background: bgColor }}> 
        {projects.map((project, index) => (
          <li className={Styles.projects__name} key={index} style={{ color: titleColor }}>
            <Image src={documentSrc} alt="Document Icon"/> 
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
