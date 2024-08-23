import { useState, useContext } from "react";
import { ProjectContext } from "@/hooks/ProjectContext";
import Styles from "./addProjectForm.module.scss";

const AddProjectForm = ({onClose}) => {
    const [inputValue, setInputValue] = useState('');
    const {addProject } = useContext(ProjectContext);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            addProject(inputValue);
            setInputValue('');
            onClose();
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