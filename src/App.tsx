import { HeroSection } from "@/components/Herosection"
import { ExperienceSection } from "./components/Experiencesection"
import { AboutMe } from "./components/Aboutsection"
import { EducationAchievements } from "./components/EducationAchievements"
import { ContactSection } from "./components/Contactsection"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

export function App() {
  return (
<>
<Navbar />
<HeroSection />
<AboutMe />
<ExperienceSection />
<EducationAchievements />
<ContactSection />
<Footer />
</>
  )
}

export default App
