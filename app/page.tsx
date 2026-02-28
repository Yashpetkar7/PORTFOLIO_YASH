"use client"

import { useState } from "react"
import SplashScreen from "@/components/SplashScreen"
import NeuralNetworkBG from "@/components/NeuralNetworkBG"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsGrid from "@/components/SkillsGrid"
import ProjectsSection from "@/components/ProjectsSection"
import JourneySection from "@/components/JourneySection"
import CredentialsNodeGraph from "@/components/CredentialsNodeGraph"
import ContactTerminal from "@/components/ContactTerminal"
import Footer from "@/components/Footer"

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <SplashScreen onComplete={() => setLoaded(true)} />}

      {/* 3D Background */}
      {loaded && <NeuralNetworkBG />}

      <div
        className="relative z-10 group/page"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease-in",
        }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsGrid />
        <ProjectsSection />
        <JourneySection />
        <CredentialsNodeGraph />
        <ContactTerminal />
        <Footer />

        {/* Dim Overlay for Dynamic Aesthetic Dimming */}
        <div className="fixed inset-0 z-40 pointer-events-none bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-700 group-has-[.dim-trigger:hover]/page:opacity-100" aria-hidden="true" />
      </div>
    </>
  )
}
