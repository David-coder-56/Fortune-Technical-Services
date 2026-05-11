import PageWrapper from '../components/layout/PageWrapper'
import VideoSection from '../components/common/VideoSection'
import ProjectsHero from '../components/projects/ProjectsHero'
import ProjectsPortfolio from '../components/projects/ProjectsPortfolio'

export default function Projects() {
  return (
    <PageWrapper>
      <ProjectsHero />
      <ProjectsPortfolio />
      <VideoSection 
        title="Project Execution" 
        subtitle="Watch our teams deploy advanced equipment and methodologies in real-world scenarios." 
        thumbnail="/images/nimba_mountain.png" 
      />
    </PageWrapper>
  )
}
