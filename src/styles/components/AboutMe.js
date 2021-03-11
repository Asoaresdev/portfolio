import styled from 'styled-components'

export const ContainerAboutMe = styled.section`
display:grid;
grid-template-columns: 1fr 1fr;
background: var(--yellow);
min-width:100vw; 
min-height:70vh;

div {
    max-height: 70vh;
    padding:5rem 2rem 2rem 10rem;
    @media (max-width: 481px) {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 5rem;
}
}

div > h1 {
    margin-bottom:1rem;
    font-size:2.65rem;
    @media (max-width:481px){
        font-size: 3.35rem;
        padding-top:4rem;
    }
}

div > p{
    letter-spacing:-0.16px;
    @media (max-width:481px){
        font-size: 1.35rem;
    }
}

div > ul {
    display: flex;
}

ul > li{
    margin: 3rem 1rem 0 0;
    border-left: 5px solid white;
    padding-left: 0.3rem;
    @media (max-width:481px){
        font-size: 1.35rem
    }
}

@media (max-width: 481px) {
    grid-template-columns: 1fr;
    justify-content:center;
    align-items:center;
    min-width:100vw;
    padding-top:3rem;
    
}
`

export const Button = styled.button`
width: 8.75rem;
background:var(--green);
margin-top:2rem;
height: 1.87rem;
margin: 32px 12px 27px 0;
padding: 5px 30px 7px 31px;
border-radius: 8px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
cursor:pointer;
a:hover & {
    transform: scale(1.05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.7);
}
    @media (max-width:481px){
        font-size: 1.35rem;
        width: 10.75rem;
        height: 2.87rem;
        padding: 8px 33px 10px 34px;
        margin: 35px 15px 30px 0;
    }

`