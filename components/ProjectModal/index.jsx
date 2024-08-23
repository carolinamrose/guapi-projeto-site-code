import Image from "next/image";
import Styles from "./projectModal.module.scss";
import Folder from "../../public/images/Folder.svg";

const ProjectModal = ({onClose}) => {

    return <div role="dialog">
            <div className={Styles.modal__header}>
                <div className={Styles.modal__title}>
                    <Image src={Folder} />
                    <h2>Novo Projeto</h2>
                </div>
                <button onClick={onClose} className={Styles.modal__closebutton}>X</button>
            </div>
            <div className={Styles.modal__form}>
                <label>Nome</label>
                <input></input>
            </div>
            <div className={Styles.modal__formbuttons}>
                <button className={Styles.modal__formcancel} onClick={onClose}>Cancelar</button>
                <button className={Styles.modal__formcreate} type="submit">Criar</button>
            </div>

    </div>
}

export default ProjectModal;