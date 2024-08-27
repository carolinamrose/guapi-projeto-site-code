import { useState, useEffect } from "react";
import Image from "next/image";

import AddPlus from "../../public/images/AddPlus.svg";
import Bullet from "../../public/images/Bullet.svg";
import CalendarSquare from "../../public/images/CalendarSquare.svg";
import FlagSquare from "../../public/images/FlagSquare.svg";
import Frame from "../../public/images/Frame.svg";
import TagSquare from "../../public/images/TagSquare.svg";
import ThreeDots from "../../public/images/ThreeDots.svg";

import SettingsModal from "../SettingsModal"; 
import TaskForm from "../TaskForm";
import Styles from "./sectionList.module.scss";

const SectionList = ({ sections }) => {
    const [isTaskFormVisible, setTaskFormVisible] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [isTaskAdded, setIsTaskAdded] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedSection, setSelectedSection] = useState(""); 
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    const handleAddTaskClick = () => {
        setTaskFormVisible(true);
    };

    const handleTaskFormSubmit = (name, description) => {
        const newTask = { name, description };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
        setTaskFormVisible(false);
        setIsTaskAdded(true);
    };

    const handleCancelTaskClick = () => {
        setTaskFormVisible(false);
        setIsTaskAdded(false);
    };

    const handleAddSectionClick = () => {
        // Função para adicionar uma nova seção
    };

    const handleMenuIconClick = (section, task, index) => {
        setSelectedSection(section);
        setSelectedTaskId(index); 
        setModalVisible(true);  
    };

    const closeModal = (updatedTask) => {
        if (updatedTask) {
            const updatedTasks = [...tasks];
            updatedTasks[selectedTaskId] = updatedTask;
            setTasks(updatedTasks);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
        }
        setModalVisible(false);
    };

    // Verificar se há alguma seção com tarefas associadas
    const hasSectionWithTasks = sections.length > 0 && tasks.length > 0;

    const showSectionAddButton = sections.length > 0 && !hasSectionWithTasks;

    return (
        <div className={Styles.section__container}>
            <div className={Styles.section__wrapper}>
                <ul className={Styles.section__list}>
                    {sections.map((section, index) => (
                        <li key={index} className={Styles.section__listcontainer}>
                            <div></div>
                            {section}
                            <Image 
                                src={ThreeDots} 
                                alt="Menu Icon" 
                                onClick={() => handleMenuIconClick(section, tasks[index] || {}, index)}
                            />
                        </li>
                    ))}
                    {tasks.map((task, index) => (
                        <li key={index} className={Styles.section__content}>
                            <div className={Styles.section__name}>
                                <Image src={Bullet} alt="Bullet Icon" /> 
                                {task.name}
                            </div>
                            <div className={Styles.section__description}>
                                {task.description}
                            </div>
                            <div className={Styles.section__icons}>
                                <Image src={CalendarSquare} alt="Calendar Icon" />
                                <Image src={FlagSquare} alt="Flag Icon" />
                                <Image src={TagSquare} alt="Tag Icon" />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={Styles.section__itemwrapper}>
                    {showSectionAddButton && (
                        isTaskFormVisible ? (
                            <TaskForm 
                                onSubmit={handleTaskFormSubmit} 
                                onCancel={handleCancelTaskClick}
                            />
                        ) : (
                            <button 
                                className={Styles.section__addtask} 
                                onClick={handleAddTaskClick}
                            >
                                <Image src={AddPlus} alt="Add Icon" />
                                <span>Adicionar Tarefa</span>
                            </button>
                        )
                    )}
                    {showSectionAddButton && (
                        <div className={Styles.section__item}>
                            <Image src={Frame} alt="Frame Icon" />
                            <span type="button" onClick={handleAddSectionClick}>Adicionar Seção</span>
                        </div>
                    )}
                </div>
            </div>
            {isModalVisible && (
                <SettingsModal 
                    section={selectedSection} 
                    taskId={selectedTaskId}
                    taskName={tasks[selectedTaskId]?.name || ""} 
                    taskDescription={tasks[selectedTaskId]?.description || ""} 
                    onClose={closeModal} 
                />  
            )}
        </div>
    );
};

export default SectionList;
