import PageWrapper from '../components/layout/PageWrapper'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import AboutPreviewSection from '../components/home/AboutPreviewSection'
import ServicesSection from '../components/home/ServicesSection'
import ProjectsSection from '../components/home/ProjectsSection'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <StatsSection />
      <AboutPreviewSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
    </PageWrapper>
  )
}
