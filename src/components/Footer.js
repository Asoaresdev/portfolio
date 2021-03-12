import { ContainerFooter } from '../styles/components/Footer'

export default function Footer() {
    return(
        <ContainerFooter id="footer">
            <h1>Contrate-me!</h1>
            <div>
                <p>
                Procuro oportunidade de trabalho onde eu possa aprender,
                me desenvolver e evoluir na minha carreia profissional.
                </p>
                <p>E-mail para contato: asoaresdev@gmail.com</p>
            </div>
            <div>
                <ul>
                    <li><a href="https://www.linkedin.com/in/andrea-rsoares/" target="_blank"> <img src="group-10-copy.svg" alt="" /></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=5521994001144&text=Olá,%20vamos%20bater%20um%20papo" target="_blank"> <img src="group3.svg" alt="" /></a></li>
                    <li><a href="https://github.com/Asoaresdev"> <img src="fill-1-copy.svg" alt="" /></a></li> 
                </ul> 
            </div>
        </ContainerFooter>
    )
}