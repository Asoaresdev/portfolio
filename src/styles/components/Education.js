import styled from 'styled-components'

export const ContainerEducation = styled.section`
    min-width:100vw;
    div{
        display:grid;
        grid-template-columns:1fr 1fr;  
        margin-top: -2.5rem;
        z-index:0;
       
        @media (max-width:481px){
            grid-template-columns:1fr;
            margin-top: -3rem;
    }
        
        
    }
     h2 {
        font-weight:bold;
        text-align: center;
        font-size: 1.56rem;
        z-index:10;
        position:relative;
        color:white;
        @media (max-width:481px){
            font-size: 2.56rem;
            /* margin-top:2rem; */
            padding-bottom:2rem;
    }
        
    }
    div > div{
        display:flex;
        flex-direction:column;
        padding:2.5rem 3rem;
        min-height:45vh;
    }
    p{
        letter-spacing:-0.16px;
        color:white;
    }
`

export const ContainerCard1 = styled.div`
    background:var(--pink); 
    padding-right:40rem;
    p{
        @media (max-width:481px){
            font-size: 2.35rem;
        }
    }
    h4{
        margin:5.5rem 0 1rem 0;
        font-size:1.31rem;
        letter-spacing:-0.28px;
        color:white;
        @media (max-width:481px){
            font-size: 3.35rem
        }
    }
    p:last-child{
        margin:1.5rem 0;
        @media (max-width:481px){
            font-size: 2.35rem;
            margin:2.5rem 0;
        }
    }
`
export const ContainerCard2 = styled.div`
    background:var(--orange);
    @media (max-width:481px){
        background:var(--pink);
        }
    p{
        @media (max-width:481px){
            font-size: 2.35rem
        }
    }
    h4{
        margin:5.5rem 0 1rem 0;
        font-size:1.31rem;
        letter-spacing:-0.28px;
        color:white;
        @media (max-width:481px){
            font-size: 3.35rem
        }
    }
    p:last-child{
        margin:1.5rem 0;
        @media (max-width:481px){
            font-size: 2.35rem;
            margin:2.5rem 0;
        }
    }
`