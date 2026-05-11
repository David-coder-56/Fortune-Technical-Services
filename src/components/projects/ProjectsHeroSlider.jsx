// Projects Hero Slider – open-pit Chuquicamata, Bingham Canyon
import BaseSlider from '../common/BaseSlider'

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/6/69/Chuquicamata-002.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/54/Bingham_Canyon_April_2005.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/0/06/Artisanal_gold_Dodoma001.jpg',
]

export default function ProjectsHeroSlider() {
  return <BaseSlider images={images} />
}
