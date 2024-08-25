import Image from "next/image";
import Styles from "./sidebar.module.scss";
import SidebarProjects from "../SidebarProjects";

import Profile from "../../public/images/Profile.svg";
import Arrow from "../../public/images/Arrow.svg";
import Alert from "../../public/images/Alert.svg";
import Collage from "../../public/images/Collage.svg";

const Sidebar = ({ folderSrc, plusSrc, documentSrc, titleColor, bgColor }) => {
    return <div className={Styles.sidebar__container}>
        <div className={Styles.sidebar__topcontainer}>
            <div className={Styles.sidebar__topleft}>
                <Image src={Profile} alt="Profile Icon" />
                Nome do Usuário
                <Image src={Arrow} alt="Arrow Icon"/>
            </div>
            <div className={Styles.sidebar__topright}>
                <Image src={Alert} alt="Alert Icon"/>
                <Image src={Collage} alt="Collage Icon"/>
            </div>
        </div>
        <SidebarProjects
            folderSrc={folderSrc} 
            plusSrc={plusSrc} 
            documentSrc={documentSrc}
            titleColor={titleColor}
            bgColor={bgColor}
         /> 
    </div>
}

export default Sidebar;