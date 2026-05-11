import StatCounter from '../common/StatCounter'
import { stats } from '../../utils/data'
import ParallaxWrapper from '../common/ParallaxWrapper'

export default function StatsSection() {
  return (
    <section className="bg-navy pt-16 pb-24 relative overflow-hidden">
      <ParallaxWrapper className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-steel-dark/20">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </ParallaxWrapper>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-28 fill-charcoal relative -bottom-1">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C130.63,80.79,219.78,74.96,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
