import styled from 'styled-components'

export const ContainerEducation = styled.section`
    min-width:100vw;
    div{
        display:grid;
        grid-template-columns:1fr 1fr;  
        margin-top: -2rem;
        z-index:0;
        
        
    }
     h2 {
        /* background:#f2c12e; */
        font-weight:bold;
        text-align: center;
        font-size: 1.56rem;
        z-index:10;
        position:relative;
        color:white;
        /* margin-top:0.5rem; */
    }
    div > div{
        display:flex;
        flex-direction:column;
        padding:1.5rem 3rem;
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
    div{
        max-width:70%;
    }
    h4{
        margin:4.5rem 0 1rem 0;
        font-size:1.31rem;
        letter-spacing:-0.28px;
        color:white;
    }
    p:last-child{
        margin:1.5rem 0;
    }
`
export const ContainerCard2 = styled.div`
    background:var(--brown);
    div{
        max-width:75%;
    }
    h4{
        margin:4.5rem 0 1rem 0;
        font-size:1.31rem;
        letter-spacing:-0.28px;
        color:white;
    }
    p:last-child{
        margin:1.5rem 0;
    }
`