import Slides from './Slides';
import { getSlides } from '@/api/slides';

export default async function Slider() {
  const slides = await getSlides();

  return (
    <section className="section-slider">
      <Slides slides={slides} />
    </section>
  );
}
