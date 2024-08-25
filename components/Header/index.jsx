import Image from "next/image";
import Styles from "./header.module.scss";
import Folder from "../../public/images/Folder.svg";
import Setting from "../../public/images/Setting.svg";

const Header = ({ title, links }) => {
    return (
        <header className={Styles.header__container}>
            <nav>
                <ul className={Styles.header__list}>
                    {links && links.map((link, index) => (
                        <li key={index}>
                            <Image src={Folder} alt="Folder Icon" />
                            <a href={link.href}>{link.text}</a>
                            </li>
                    ))}
                </ul>
            </nav>
            <div className={Styles.header__right}>
                <Image src={Setting} alt="Setting Icon" />
                Configurações
            </div>
        </header>
    );
};

export default Header;