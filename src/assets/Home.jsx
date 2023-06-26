import React from 'react'
import Contact from "../components/Contact"
import CounterSection from '../components/CounterSection'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

function Home() {
  return (
    <>
     <Header/> 
     <Skills/> 
     <CounterSection></CounterSection>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home