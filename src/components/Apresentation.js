import { ContainerApresentation, ContainerSocialMedia, Teste } from "../styles/components/Apresentation";
import Header from "./Header";

export default function Apresentation(){
    return(
        <ContainerApresentation>
            <div>
                <img src="image0.jpeg" alt="Andréa" />
            </div>
            <div>
                <div>
                    <h1>Eu sou <br /> Andréa Soares</h1>
                    <h2>Desenvolvedora Frontend</h2>
                </div>
                <ContainerSocialMedia>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/andrea-rsoares/" target="_blank"> <img src="group-10-copy.svg" alt="" /></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5521994001144&text=Olá,%20vamos%20bater%20um%20papo" target="_blank"> <img src="group3.svg" alt="" /></a></li>
                        <li><a href="https://github.com/Asoaresdev"> <img src="fill-1-copy.svg" alt="" /></a></li>  
                    </ul>
                </ContainerSocialMedia>
            </div>
        </ContainerApresentation>
        
    )
}