import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectModal from "../ProjectModal";
import Modal from "../ProjectModal/Modal";
import Styles from "./body.module.scss";

import Bullet from "../../public/images/Bullet.svg";
import Folder from "../../public/images/Folder.svg";
import Magnifier from "../../public/images/Magnifier.svg";
import NotFound from "../../public/images/NotFound.png";
import PlusWhite from "../../public/images/PlusWhite.svg";

import { ProjectContext } from "@/hooks/ProjectContext";

const Body = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { projects } = useContext(ProjectContext);

    const openDialog = () => setIsVisible(true);
    const closeDialog = () => setIsVisible(false);

    return ( 
        <main className={Styles.body__container}>
            <div className={Styles.body__title}>
                <Image src={Folder} width={32} height={32} alt="Folder Icon"/>
                <h1>Meus Projetos</h1>
            </div>

            <div className={Styles.body__search}>
                <div className={Styles.body__searchform}>
                    <button type="submit"><Image src={Magnifier} alt="Magnifier Icon"/></button>
                    <input type="search" placeholder="Faça sua busca..."></input>
                    <select id="cars" name="cars">
                        <option value="ativos">Projetos ativos</option>
                    </select>
                </div> 
                <button className={Styles.addproject__button} onClick={openDialog}> Novo Projeto <Image src={PlusWhite} alt="Plus Icon"/></button>  
            </div>

            <Modal isVisible={isVisible} onClose={closeDialog}>
                <ProjectModal onClose={closeDialog} />
            </Modal>

            {projects.length > 0 ? (
                <div className={Styles.body__projects}>
                    {projects.map((project, index) => (
                        <Link key={index} href={`/projects/${encodeURIComponent(project)}`}>
                            <div className={Styles.project__item}>
                                <Image src={Bullet} alt="Bullet Icon"/>
                                {project}
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={Styles.body__notfound}>
                    Parece que ainda não há nenhum projeto criado
                    <Image src={NotFound} width={400} height={400} alt="Nenhum projeto encontrado"/>
                </div>
            )}
        </main>
    );
};

export default Body;
