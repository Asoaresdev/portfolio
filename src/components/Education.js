import { ContainerEducation, ContainerCard1, ContainerCard2} from "../styles/components/Education";

export default function Education() {
    return(
        <ContainerEducation>
            <h2>Educação</h2>
            <div>
                <ContainerCard1>
                    <h4>Curso de Front End com React na Labenu</h4>
                    <p>6 meses-2021</p>
                    <p>Curso de 500 horas com o seguinte contéudo: HTML, CSS, JavaScript, aplicação responsiva, React, styled-components, hooks, consumo de API com Axios, Material-UI.</p>
                </ContainerCard1>
                <ContainerCard2>
                    <h4>Curso de Front End na Reprograma</h4>
                    <p>3 meses-2019</p>
                    <p>Curso de 80 horas com o seguinte conteúdo: HTML, CSS, JavaScrip, aplicação responsiva, Bootstrap, jQuery. </p>
                </ContainerCard2>
            </div>
        </ContainerEducation>
    )

}