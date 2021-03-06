import styled from 'styled-components'

export const ContainerAboutMe = styled.section`
display:grid;
grid-template-columns: 1fr 1fr;
background: var(--yellow);
min-width:100vw; 

div {
    max-height: 70vh;
    padding:5rem 2rem 2rem 10rem;
}

div > h1 {
    margin-bottom:1rem;
    font-size:2.65rem;
    
}

div > p{
    letter-spacing:-0.16px;
}

div > ul {
    display: flex;
}

ul > li{
    margin: 3rem 1rem 0 0;
    border-left: 5px solid white;
    padding-left: 0.3rem;
}
`