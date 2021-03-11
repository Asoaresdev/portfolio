import { ContainerButtons, ContainerMyProjects, ContainerProject } from "../styles/components/MyProjects";


export default function MyProjects() {
    return(
        <ContainerMyProjects>
            <h1 id="projects">Meus projetos</h1>
            <ContainerProject>
                <div>
                    <img src="macbook-copy.png" alt="" />
                </div>
                <div>
                    <h1>Ifuture</h1>
                    <h2>Front End com React</h2>
                    <p>Projeto final do curso da Labenu. O objetivo era criar uma aplicação CRUD, mobile, estilo ifood. Foi feito em grupo e utilizamos React, Styled components, Material-UI, consumo de API com Axios, Hooks, Routes. Deploy na Vercel. </p>
                    <ContainerButtons>
                        <button>
                        <a href="https://github.com/Asoaresdev/Projeto-Final-do-bootcamp-Labenu-4foodA" target="blank">
                            Ver no Github
                        </a>
                        </button>
                        <button>
                        <a href="https://labenu-ifuture.vercel.app/" target="blank">
                            Link da aplicação
                        </a>
                        </button>
                    </ContainerButtons>
                </div>
            </ContainerProject>
            <ContainerProject>
            <div>
                    <img src="ipad-copy.png" alt="" />
                </div>
                <div>
                    <h1>MoveDev</h1>
                    <h2>Front End com Next</h2>
                    <p>Projeto realizado durante a Next Level Week da Rocketseat. Ojetivo da aplicação é ser um contador regressivo, no estilo pomodoro. Quando o tempo encerra uma atividade é sugerida para ser realizada. Projeto desenvolvido em Next.js e Typescript. Foi utlizado CSS-Module, useContext, useEffect, useState. Deploy na Vercel. </p>
                    <ContainerButtons>
                    <button>
                        <a href="https://github.com/Asoaresdev/NLW-trilha_React" target="blank">
                            Ver no Github
                        </a>
                        </button>
                        <button>
                        <a href="https://nlw-trilha-react-movedev.vercel.app/" target="blank">
                            Ver no Github
                        </a>
                        </button>
                    </ContainerButtons>
                </div>
            </ContainerProject>
            <ContainerProject>
                <div>
                    <img src="imac-copy.png" alt="" />
                </div>
                <div>
                    <h1>Indique Web</h1>
                    <h2>Front End com React</h2>
                    <p>Projeto realizado durante o hackathon Provi Hack Woman. Foi desenvolvido com o intuito de ajudar jovens de baixa renda a conseguir sua primeira oportunidade de trabalho. Na parte do Front foi utilizado React, Material-UI, Figma, Miro.</p>
                    <button>
                    <a href="https://github.com/Asoaresdev/indique-web-projeto-ProviHackWoman" target="blank">
                        Ver no Github
                    </a>
                    </button>
                </div>
            </ContainerProject>
        </ContainerMyProjects>
    )
}