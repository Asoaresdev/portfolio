import Head from 'next/head'
import Header from '../components/Header'
import Apresentation from '../components/Apresentation'
import { ContainerApp } from './styles'
import AboutMe from '../components/AboutMe'
import MyKnowledge from '../components/MyKnowledge'
import Education from '../components/Education'
import MyProjects from '../components/MyProjects'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
    <ContainerApp>
      <Header />
      <Apresentation />
    </ContainerApp>
    <AboutMe />
    <MyKnowledge />
    <Education />
    <MyProjects />
    <Footer />
    </div>
  )
}
