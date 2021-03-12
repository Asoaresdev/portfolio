import styled from 'styled-components'

export const ContainerMyProjects = styled.section`
    display:grid;
    grid-template-rows: 1fr 4fr 4fr 4fr;
    justify-items:center;
    align-items:center;
    min-width:100vw;
    margin-bottom:2.12rem;
    
    h1{
        letter-spacing:-0.15px;
        font-size:1.56rem;
        margin-top: 2.12rem;
        @media (max-width:481px){
            font-size: 3.35rem
        }
    }
 
`

export const ContainerProject = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    margin-bottom: 1rem;
    padding-right:4rem;
    @media (max-width:481px){
        font-size: 3.35rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin:3rem;
        padding-right:0;
        }
    div:last-child{
        @media (max-width:481px){
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center
        }
    }
    h1{
        font-size:2.65rem;
        letter-spacing:-0.15px;
        @media (max-width:481px){
            font-size: 4.35rem
        }
    }
    div:first-child {
        display:flex;
        align-items:center;
        justify-content:center;
    }
    h2{
        margin:0 0 1rem 0;
        font-weight:normal;
        @media (max-width:481px){
            font-size: 4.35rem;
            padding-bottom:1rem;
        }
    }
    p{
        @media (max-width:481px){
            font-size: 2.35rem;
            text-align:center;
            padding:1.5rem;
        }
    }
    button {
        background: var(--yellow);
        border:none;
        width: 8.75rem;
        height:1.85rem;
        border-radius:0.25rem;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        margin:1.39rem 1.39rem 0 0; 
        cursor: pointer; 
        @media (max-width:481px){
            font-size: 2.5rem;
            width: 21.75rem;
            height:4rem
        } 
    }
    button:hover{
        transform: scale(1.05);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.7);
    }
    a{
        color: white;
    }
`

export const ContainerButtons = styled.div`
display:flex;
`
