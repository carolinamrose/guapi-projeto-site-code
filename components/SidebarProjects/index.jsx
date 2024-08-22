import Image from "next/image";
import Styles from "./sidebarProjects.module.scss";
import Calendar from "../../public/images/Calendar.svg";
import Folder from "../../public/images/Folder.svg";
import Plus from "../../public/images/Plus.svg";

const SidebarProjects = () => {
    return <div className={Styles.projects__container}>
        <div className={Styles.projects__date}>
            <Image src={Calendar} /> 
            Hoje
        </div>
        <div className={Styles.projects__title}>
            <div className={Styles.projects__titleleft}>
                <Image src={Folder} /> 
                Meus Projetos
            </div>
            <Image src={Plus} />
        </div>
    </div>
}

export default SidebarProjects;