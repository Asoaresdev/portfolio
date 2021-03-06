import styled from 'styled-components'

export const ContainerMyKnowledge = styled.section`
    background: var(--green);
    min-height:50vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:2rem 0 3.5rem 0;
    min-width:100vw;

    h3{
        margin:1rem 0;
        font-weight:normal;
        @media (max-width:481px){
            font-size: 2.35rem
        }
    }

    h1{
        margin-bottom:2rem;
        font-weight:bold;
        font-size:2.65rem;
        @media (max-width:481px){
            font-size: 3.65rem;
        }
    }

    p{
        text-align:center;
        padding-bottom:2rem;
        @media (max-width:481px){
            font-size: 2.35rem
        }
    }
    
`