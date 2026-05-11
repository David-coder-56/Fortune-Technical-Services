import PageWrapper from '../components/layout/PageWrapper'
import VideoSection from '../components/common/VideoSection'
import ServicesHero from '../components/services/ServicesHero'
import ServicesGrid from '../components/services/ServicesGrid'
import ServiceFAQ from '../components/services/ServiceFAQ'
import ServicesCTA from '../components/services/ServicesCTA'

export default function Services() {
  return (
    <PageWrapper>
      <ServicesHero />
      <ServicesGrid />
      <VideoSection 
        title="Our Capabilities" 
        subtitle="Watch a comprehensive overview of our diverse mining and drilling operations across West Africa." 
        thumbnail="/images/fabrication.png" 
      />
      <ServiceFAQ />
      <ServicesCTA />
    </PageWrapper>
  )
}
