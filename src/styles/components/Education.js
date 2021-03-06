import styled from 'styled-components'

export const ContainerEducation = styled.section`
    div{
        display:grid;
        grid-template-columns:1fr 1fr;  
    }
     h2 {
        background:#f2c12e;
        font-weight:bold;
        text-align: center;
    }
    div > div{
        display:flex;
        flex-direction:column;
        /* align-items:center;
        justify-content:center; */
        padding:1.5rem 3rem;
        height:40vh;
    }
    p{
        letter-spacing:-0.16px
    }
`

export const ContainerCard1 = styled.div`
    background:var(--pink);   
    h4{
        margin:2.5rem 0 1rem 0;
        font-size:1.25rem;
    }
    p:last-child{
        margin:1.5rem 0;
    }
`
export const ContainerCard2 = styled.div`
    background:var(--brown);
    h4{
        margin:2.5rem 0 1rem 0;
        font-size:1.25rem;
    }
    p:last-child{
        margin:1.5rem 0;
    }
`