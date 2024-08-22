import Image from "next/image";
import Styles from "./sidebar.module.scss";
import SidebarProjects from "../SidebarProjects";

import Profile from "../../public/images/Profile.svg";
import Arrow from "../../public/images/Arrow.svg";
import Alert from "../../public/images/Alert.svg";
import Collage from "../../public/images/Collage.svg";

const Sidebar = () => {
    return <div className={Styles.sidebar__container}>
        <div className={Styles.sidebar__topcontainer}>
            <div className={Styles.sidebar__topleft}>
                <Image src={Profile} />
                Nome do Usuário
                <Image src={Arrow} />
            </div>
            <div className={Styles.sidebar__topright}>
                <Image src={Alert} />
                <Image src={Collage} />
            </div>
        </div>
        <SidebarProjects /> 
    </div>
}

export default Sidebar;