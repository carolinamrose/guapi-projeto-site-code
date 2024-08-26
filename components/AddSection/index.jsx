import { useState } from "react";
import Image from "next/image";
import Frame from "../../public/images/Frame.svg";
import CurvyArrow2 from "../../public/images/CurvyArrow2.png";
import Styles from "./addSection.module.scss";
import SectionList from "../SectionList";

const AddSection = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [sections, setSections] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAddSectionClick = () => {
        setFormVisible(true);
    };

    const handleCancelClick = () => {
        setFormVisible(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setSections([...sections, inputValue]);
            setInputValue("");
            setIsSubmitted(true);
        }
    };

    return (
        <div className={Styles.section__container}>
            {!isSubmitted && isFormVisible ? (
                <form className={Styles.section__form} onSubmit={handleFormSubmit}>
                    <input 
                        type="text" 
                        placeholder="Inserir..." 
                        value={inputValue} 
                        onChange={handleInputChange} 
                    />
                    <div className={Styles.section__formbottom}>
                        <button type="submit">Adicionar</button>
                        <span type="button" onClick={handleCancelClick}>Cancelar</span>
                    </div>
                </form>
            ) : !isSubmitted && (
                <>
                    <div className={Styles.section__item} onClick={handleAddSectionClick}>
                        <Image src={Frame} alt="Frame Icon" />
                        <span type="button">Adicionar seção</span>
                    </div>
                    <div className={Styles.section__create}>
                        <Image src={CurvyArrow2} alt="Seta Curva" />
                        <span>Crie sua Primeira Sessão aqui</span>
                    </div>
                </>
            )}

            <SectionList sections={sections} />
        </div>
    );
};

export default AddSection;
