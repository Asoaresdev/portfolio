import styled from 'styled-components'

export const ContainerApresentation = styled.div`
    min-height:50vh;
    /* position: absolute;
    top:0; */
    display:flex;
    margin-top:-5rem;
    min-width:100vw; 
        div{
            display:flex;
        }

        img{
            max-height:95vh;
            max-width:50vw;
        }

        div:last-child{
            background: var(--orange);
            width: 100%;
            display:grid;
            grid-template-columns: 3fr 1fr;
            align-items:center;
            justify-content: center;
        }

        div > div {
            display:flex;
            flex-direction: column;
            align-self:center;
            justify-self:center;
        }
        
        div > h1 {
            font-weight: bold;
            color: #ffffff;
            font-size: 50px;
            letter-spacing: -0.29px;
        }

        div > h2 {
            margin-top:1rem;
            color: #ffffff;
            font-size: 24px;
            letter-spacing: -0.29px;
            font-weight:normal;
        }

        li > img {
            
        }
        
`
export const ContainerSocialMedia = styled.div`
    ul{
        text-align:end;
    }

    li{
        margin:1.5rem 0;
    }
`
export const Teste = styled.div`
/* position: relative; */
`
