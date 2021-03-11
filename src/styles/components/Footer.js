import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    background:var(--orange);
    display:flex;
    min-width: 100vw;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    min-height:60vh;
    align-content:space-between;
    @media (max-width:481px){
            padding:3rem 0;
        }

    h1 {
        color:white;
        @media (max-width:481px){
            font-size: 2.35rem;
        }
    }    
    div {
        color:white;
        width:50%; 
    }
    div > p{
        padding:1rem;
        text-align:center;
        @media (max-width:481px){
            font-size: 1.35rem;
        }
    }
    div > ul {
    display: flex;
    align-items:center;
    justify-content:center;
}

ul > li{
    margin: 1rem 3rem 0 3rem;
}
a > img {
    width:2.5rem;
}
`