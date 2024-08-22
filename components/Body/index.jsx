import Image from "next/image";
import Styles from "./body.module.scss";

import CurvyArrow from "../../public/images/CurvyArrow.png";
import Folder from "../../public/images/Folder.svg";
import Magnifier from "../../public/images/Magnifier.svg";
import NotFound from "../../public/images/NotFound.png";
import PlusWhite from "../../public/images/PlusWhite.svg";

const Body = () => {
    return <div className={Styles.body__container}>
        <div className={Styles.body__title}>
            <Image src={Folder} width={32} height={32}/>
            Meus Projetos
        </div>

        <div className={Styles.body__search}>
            <div className={Styles.body__searchform}>
                <button type="submit"><Image src={Magnifier}/></button>
                <input type="search" placeholder="Faça sua busca..."></input>
                <select id="cars" name="cars">
                    <option value="ativos">Projetos ativos</option>
                </select>
            </div> 
            <button className={Styles.addproject__button} type="button">Novo Projeto <Image src={PlusWhite}/></button>  
        </div>

        <div className={Styles.body__add}>
            <span>Crie seu primeiro projeto aqui</span>
            <Image src={CurvyArrow}/>
        </div>     

        <div className={Styles.body__notfound}>
            Parece que ainda não há nenhum projeto criado

            <Image src={NotFound} width={400} height={400} alt="Nenhum projeto encontrado"/>
        </div>
    </div>
}

export default Body;