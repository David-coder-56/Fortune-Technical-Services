import PageWrapper from '../components/layout/PageWrapper'
import AboutHero from '../components/about/AboutHero'
import MissionSection from '../components/about/MissionSection'
import TimelineSection from '../components/about/TimelineSection'
import SafetySection from '../components/about/SafetySection'
import TeamSection from '../components/about/TeamSection'

export default function About() {
  return (
    <PageWrapper>
      <AboutHero />
      <MissionSection />
      <TimelineSection />
      <SafetySection />
      <TeamSection />
    </PageWrapper>
  )
}
