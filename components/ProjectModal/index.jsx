import Image from "next/image";
import AddProjectForm from "../AddProjectForm";
import Styles from "./projectModal.module.scss";
import Folder from "../../public/images/Folder.svg";

const ProjectModal = ({onClose}) => {

    return <div role="dialog">
            <div className={Styles.modal__header}>
                <div className={Styles.modal__title}>
                    <Image src={Folder} alt="Folder Icon"/>
                    <h2>Novo Projeto</h2>
                </div>
                <button onClick={onClose} className={Styles.modal__closebutton}>X</button>
            </div>
            <AddProjectForm onClose={onClose} />
    </div>
}

export default ProjectModal;