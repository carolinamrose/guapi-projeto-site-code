import { useRouter } from 'next/router';
import estilos from "../Home.module.scss";
import Styles from "./styles.module.scss";
import Header from '@/components/Header';
import Sidebar from "@/components/Sidebar";
import PageIndex from '@/components/PageIndex';

import FolderPurple from "../../public/images/FolderPurple.svg";
import DocumentPurple from "../../public/images/DocumentPurple.svg";
import PlusPurple from "../../public/images/PlusPurple.svg";

const ProjectPage = () => {
    const router = useRouter();
    const { name } = router.query;

    const headerLinks = [
        { href: '/projects', text: 'Meus Projetos /' }
    ];

    return (
        <div>
            <div  className={estilos.container}>
                <Sidebar
                folderSrc={FolderPurple} 
                plusSrc={PlusPurple}
                documentSrc={DocumentPurple} 
                titleColor="#7C00BE"
                bgColor="rgba(124, 0, 190, 0.15)"
                listColor="rgba(124, 0, 190, 0.15)" 
                /> 
                <div className={Styles.main__container}>
                    <Header title={`Projeto: ${name}`} links={headerLinks} /> 
                    <PageIndex/>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;