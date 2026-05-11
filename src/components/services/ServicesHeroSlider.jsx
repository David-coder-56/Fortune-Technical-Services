// Services Hero Slider – haul trucks, highwall mining machines
import BaseSlider from '../common/BaseSlider'

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/5/54/Coal_Haul_Truck_at_North_Antelope_Rochelle.png',
  'https://upload.wikimedia.org/wikipedia/commons/9/9c/Caterpillar_Highwall_Mine_HW300.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/Bagger-garzweiler.jpg',
]

export default function ServicesHeroSlider() {
  return <BaseSlider images={images} />
}
