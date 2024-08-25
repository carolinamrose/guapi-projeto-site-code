import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { ProjectContext } from "@/hooks/ProjectContext";
import Styles from "./addProjectForm.module.scss";

const AddProjectForm = ({onClose}) => {
    const [inputValue, setInputValue] = useState('');
    const {addProject } = useContext(ProjectContext);
    const router = useRouter();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const capitalizedProject = capitalizeFirstLetter(inputValue);
            addProject(capitalizedProject);
            setInputValue('');
            onClose(); 
            router.push(`/projects/${encodeURIComponent(capitalizedProject)}`); 
        }
    };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className={Styles.modal__form}>
                    <label>Nome</label>
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Inserir..."
                    />
                </div>
                <div className={Styles.modal__formbuttons}>
                    <button className={Styles.modal__formcancel} type="button" onClick={onClose}>Cancelar</button>
                    <button className={Styles.modal__formcreate} type="submit">Criar</button>
                </div>
            </form>
        </div>
    );
};

export default AddProjectForm;