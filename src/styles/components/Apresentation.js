import styled from 'styled-components'

export const ContainerApresentation = styled.div`
    min-height:580px;
    display:flex;
    margin-top:-5rem;
    min-width:100vw; 
    
    div{
        display:flex;
    }

    div >img {
        @media (max-width: 481px){
            display:none;
        }
    }
    img{
        max-height:90vh;
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
        padding-top:2rem;
        @media (max-width: 481px){
            padding-left:8rem;
            padding-top:4rem;
        }
    }
    
    div > h1 {
        font-weight: bold;
        color: #ffffff;
        font-size: 50px;
        letter-spacing: -0.29px;
        @media (max-width:481px){
            font-size: 3.35rem;
}
    }

    div > h2 {
        margin-top:1rem;
        color: #ffffff;
        font-size: 24px;
        letter-spacing: -0.29px;
        font-weight:normal;
        @media (max-width:481px){
            font-size: 2.35rem;
        }
    }

        
`
export const ContainerSocialMedia = styled.div`
    ul{
        text-align:end;
    }

    li{
        margin:1.5rem 0;
        @media (max-width:481px){
            padding-right:1.8rem;
    }
        
    }
    a > img {
        
        @media (max-width:481px){
            width:80%;
    }
    }
   
`
