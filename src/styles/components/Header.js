import styled from 'styled-components'

export const ContainerHeader = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem;
    position: relative;
    z-index: 10;
    h2{
        margin:0;
        color:#fff;
        @media (max-width:481px){
            font-size: 2rem;
        }
    }
    ul{
        display:inline;
        list-style:none;
        margin:0;
    }
    a, li{
        padding:0.3rem 0.8rem;
        display:inline;
        justify-content: space-between;
        text-decoration: none;
        font-weight:bold;
        color: #3d3635;
        @media (max-width:481px){
            font-size: 2rem;
        }
    }
`
