import Image from "next/image";
import ProjectList from "../ProjectList";
import Styles from "./sidebarProjects.module.scss";

import Calendar from "../../public/images/Calendar.svg";
import Document from "../../public/images/Document.svg";
import Folder from "../../public/images/Folder.svg";
import Plus from "../../public/images/Plus.svg";

const SidebarProjects = ({ folderSrc = Folder, plusSrc = Plus, documentSrc = Document, titleColor, bgColor  }) => {
    return ( 
        <div className={Styles.projects__container}>
            <div className={Styles.projects__date}>
                <Image src={Calendar} alt="Calendar Icon" /> 
                Hoje
            </div>
            <div className={Styles.projects__title} style={{ background: bgColor}}>
                <div className={Styles.projects__titleleft}>
                    <Image src={folderSrc} alt="Folder Icon" /> 
                    <p style={{ color: titleColor }}>Meus Projetos</p>
                </div>
                <Image src={plusSrc} alt="Plus Icon" />
            </div>
            <ProjectList 
            documentSrc={documentSrc}
            bgColor={bgColor}
            titleColor={titleColor}
            />
        </div>
    );
};

export default SidebarProjects;