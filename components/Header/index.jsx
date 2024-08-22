import Image from "next/image";
import Styles from "./header.module.scss";
import Setting from "../../public/images/Setting.svg";

const Header = () => {
    return <div className={Styles.header__container}>
        <Image src={Setting} />
        Configurações
    </div>;
}

export default Header;