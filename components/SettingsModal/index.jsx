import { useState, useEffect } from "react";
import Image from "next/image";
import AddPurpleSquare from "../../public/images/AddPurpleSquare.svg";
import ArrowDown from "../../public/images/ArrowDown.svg";
import ArrowUp from "../../public/images/ArrowUp.svg";
import Bullet from "../../public/images/Bullet.svg";
import Calendar from "../../public/images/Calendar.svg";
import Flag from "../../public/images/Flag.svg";
import Folder from "../../public/images/Folder.svg";
import FrameGrey from "../../public/images/FrameGrey.svg";
import Profile from "../../public/images/Profile.svg";
import Tag from "../../public/images/Tag.svg";
import ThreeDots from "../../public/images/ThreeDots.svg";

import Styles from "./settingsModal.module.scss";

const SettingsModal = ({ section, taskId, taskName: initialTaskName, taskDescription: initialTaskDescription, onClose }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [taskName, setTaskName] = useState(initialTaskName);
    const [taskDescription, setTaskDescription] = useState(initialTaskDescription);
    const [tempTaskName, setTempTaskName] = useState(initialTaskName);
    const [tempTaskDescription, setTempTaskDescription] = useState(initialTaskDescription);

    useEffect(() => {
        setTaskName(initialTaskName);
        setTaskDescription(initialTaskDescription);
    }, [initialTaskName, initialTaskDescription]);

    const handleCloseClick = () => {
        onClose();
    };

    const handleEditClick = () => {
        setTempTaskName(taskName);
        setTempTaskDescription(taskDescription);
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const [name, description] = e.target.value.split("\n", 2);
        setTempTaskName(name);
        setTempTaskDescription(description);
    };

    const handleSaveClick = () => {
        const updatedTask = {
            name: tempTaskName,
            description: tempTaskDescription,
        };

        // Save updated task to localStorage
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
        storedTasks[taskId] = updatedTask;
        localStorage.setItem("tasks", JSON.stringify(storedTasks));

        // Update state
        setTaskName(tempTaskName);
        setTaskDescription(tempTaskDescription);
        setIsEditing(false);
        onClose(updatedTask);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    return (
        <div className={Styles.modal__overlay}>
            <div className={Styles.modal__content}>
                <div className={Styles.modal__header}>
                    <ul className={Styles.modal__headerlist}>
                        <li><Image src={Folder} alt="Folder Icon" /> {section}</li> /
                        <li>
                            <Image src={FrameGrey} alt="Task Icon" />
                            {taskName}
                        </li>
                    </ul>
                    <div className={Styles.modal__icons}>
                        <Image src={ArrowDown} alt="Arrow Down Icon" /> 
                        <Image src={ArrowUp} alt="Arrow Up Icon" /> 
                        <Image src={ThreeDots} alt="Three Dots Icon" />
                        <button className={Styles.modal__close} onClick={handleCloseClick}>X</button> 
                    </div>
                </div>

                <div className={Styles.modal__subcontainer}>
                    <div className={Styles.modal__left}>
                        <div className={Styles.task__details}>
                            {isEditing ? (
                                <div className={Styles.task__editcontainer}>
                                    <textarea
                                        value={`${tempTaskName}\n${tempTaskDescription}`}
                                        onChange={handleInputChange}
                                        autoFocus
                                        className={Styles.task__editinput}
                                    />
                                    <div className={Styles.task__editbuttons}>
                                        <button className={Styles.cancel__button} onClick={handleCancelClick}>Cancelar</button>
                                        <button className={Styles.save__button} onClick={handleSaveClick}>Salvar</button>
                                    </div>
                                </div>
                            ) : (
                                <div onClick={handleEditClick}>
                                    <div className={Styles.task__name}>
                                        <Image src={Bullet} alt="Bullet Icon" /> 
                                        {taskName}
                                    </div>
                                    <div className={Styles.task__description}>
                                        <p>{taskDescription}</p>
                                    </div>
                                </div>
                            )}
                            <button className={Styles.task__addsubtask}>
                                <Image src={AddPurpleSquare} alt="Add Icon" />
                                <span>Adicionar Subtarefa</span>
                            </button>
                        </div>

                        <div className={Styles.task__footer}>
                            <Image src={Profile} alt="Profile Icon" />
                            <input placeholder="Comentar" />
                        </div>
                    </div>

                    <div className={Styles.modal__right}>
                        <h3>Projeto</h3>
                        <ul className={Styles.modal__rightlist}>
                            <li><Image src={Folder} alt="Folder Icon" /> {section}</li> /
                            <li><Image src={FrameGrey} alt="Task Icon" /> {taskName}</li>
                        </ul>
                        <ul className={Styles.modal__actions}>
                            <li>Data de Vencimento <Image src={Calendar} alt="Calendar Icon" /></li>
                            <li>Prioridade <Image src={Flag} alt="Flag Icon" /></li>
                            <li>Etiquetas <Image src={Tag} alt="Tag Icon" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;