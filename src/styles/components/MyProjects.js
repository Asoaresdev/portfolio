import styled from 'styled-components'

export const ContainerMyProjects = styled.section`
    display:grid;
    grid-template-rows: 1fr 3fr 3fr 3fr;
    margin: 0 auto;
    justify-items:center;
    max-width: 50vw;
    h1{
        letter-spacing:-0.15px;
        font-size:1.56rem;
        margin-top: 2.68rem;
    }
 
`

export const ContainerProject = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:2rem;
    justify-content:center;
    align-items:center;
    margin-bottom: 4rem;
    h1{
        font-size:2.65rem;
        letter-spacing:-0.15px;
    }
    h2{
        margin:0 0 1rem 0;
        font-weight:normal;
    }
    button {
        background: var(--yellow);
        border:none;
        width: 8.75rem;
        height:1.85rem;
        border-radius:0.25rem;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        margin:1.39rem;
        
    }
    a{
        color: white;
    }
`
