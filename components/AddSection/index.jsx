import Image from "next/image";
import Frame from "../../public/images/Frame.svg";
import CurvyArrow2 from "../../public/images/CurvyArrow2.png";
import Styles from "./addSection.module.scss";

const AddSection = () => {
    return (
        <div className={Styles.section__container}>
            <div className={Styles.section__item}>
                <Image src={Frame} alt="Frame Icon"/>
                Adicionar seção
            </div>
            <div className={Styles.section__create}>
                <Image src={CurvyArrow2} alt="Seta Curva" />
                <span>Crie sua Primeira Sessão aqui</span>
            </div>
        </div>
    );
};

export default AddSection;