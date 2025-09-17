
import Header from './components/Header'
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import ServicesSection from './components/home/ServicesSection'
import PortfolioSection from './components/home/PortfolioSection'
import AdvantagesSection from './components/home/AdvantagesSection'
import ReviewsSection from './components/home/ReviewsSection'
import WorkflowSection from './components/home/WorkFlowSection'
import ContactsSection from './components/ContactsSection'
import Footer from './components/Footer'

export default function WebStudioLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <AdvantagesSection />
      <ReviewsSection />
      <WorkflowSection />
      <ContactsSection />
      <Footer />
    </div>
  )
}
