import { useState } from "react";
import Image from "next/image";
import Styles from "./taskForm.module.scss";

import CalendarSquare from "../../public/images/CalendarSquare.svg";
import FlagSquare from "../../public/images/FlagSquare.svg";
import TagSquare from "../../public/images/TagSquare.svg";

const TaskForm = ({ onSubmit, onCancel }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleTaskDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim()) {
            onSubmit(taskName, taskDescription);
            setTaskName("");
            setTaskDescription("");
        }
    };

    return (
        <form 
            className={Styles.task__form} 
            onSubmit={handleFormSubmit}
        >
            <input 
                type="text" 
                placeholder="Nome da tarefa" 
                value={taskName}
                onChange={handleTaskNameChange}
                className={Styles.task__name}
            />
            <input 
                type="text" 
                placeholder="Descrição" 
                value={taskDescription}
                onChange={handleTaskDescriptionChange}
            />
            <div className={Styles.task__formbottom}>
                <button type="submit">Adicionar</button>
                <span onClick={onCancel}>Cancelar</span>
            </div>

            <div className={Styles.section__icons}>
                <Image src={CalendarSquare} alt="Calendar Icon" />
                <Image src={FlagSquare} alt="Flag Icon" />
                <Image src={TagSquare} alt="Tag Icon" />
            </div>
        </form>
    );
};

export default TaskForm;
