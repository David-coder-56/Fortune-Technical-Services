export default function WaveDivider({ topColor = 'fill-charcoal', bottomColor = 'bg-navy' }) {
  return (
    <div className={`w-full overflow-hidden leading-none rotate-180 ${bottomColor} relative -mt-[1px]`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-16 md:h-28 ${topColor}`}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C130.63,80.79,219.78,74.96,321.39,56.44Z" />
      </svg>
    </div>
  )
}
