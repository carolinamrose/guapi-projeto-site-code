import Image from "next/image";
import Link from "next/link"; 
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
                            {link.href === "/projects" ? (
                                <Link href="/" passHref>
                                    {link.text}
                                </Link>
                            ) : (
                                <Link href={link.href} passHref>
                                    {link.text}
                                </Link>
                            )}
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