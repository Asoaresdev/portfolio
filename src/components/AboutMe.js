import { ContainerAboutMe } from "../styles/components/AboutMe";

export default function AboutMe() {
    return(
        <ContainerAboutMe>
            <div>
                <h1>Sobre mim</h1>
                <p>A área de tecnologia sempre me fascinou e quando mudei para São Paulo, no final de 2018, decidi que seria a hora de mudar de carreira, deixando a área de educação física, depois de 18 anos.</p>
                
                <p>E para alcançar meu objetivo venho estudando e me especializando: participei da primeira piscina na 42-SP, fiz o curso online de FrontEnd, na Reprograma, participei do Provi Hack Woman (2021) e, no momento, estudando FrontEnd com React, na Labenu. </p>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Git</li>
                </ul>
            </div>
            <div>
                <img src="group-31.svg" alt="" />
            </div>
        </ContainerAboutMe>
    )
}