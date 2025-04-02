import Slides from './Slides';
import { getSlides } from '@/api/slides';

export default async function Slider() {
  const slides = await getSlides();

  return <Slides slides={slides} />
}
