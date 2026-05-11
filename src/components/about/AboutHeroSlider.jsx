// About Hero Slider – artisanal mining, miners at work
import BaseSlider from '../common/BaseSlider'

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/0/06/Artisanal_gold_Dodoma001.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/ea/Coal_miner_spraying_rock_dust.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9c/Caterpillar_Highwall_Mine_HW300.jpg',
]

export default function AboutHeroSlider() {
  return <BaseSlider images={images} />
}
