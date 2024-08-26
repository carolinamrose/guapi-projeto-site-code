import { useContext } from 'react';
import Link from 'next/link';
import { ProjectContext } from '@/hooks/ProjectContext';
import Image from 'next/image';
import Document from "../../public/images/Document.svg";
import Styles from "./ProjectList.module.scss";

const ProjectList = ({ documentSrc = Document, bgColor ="none", titleColor = "#444648" }) => {
  const { projects } = useContext(ProjectContext);

  return (
    <ul className={Styles.projects__list}> 
      {projects.map((project, index) => (
        <li className={Styles.projects__name} key={index} style={{ background: bgColor, color: titleColor }}>
          <Image src={documentSrc} alt="Document Icon"/> 
          <Link href={`/projects/${encodeURIComponent(project)}`}>
            {project}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
