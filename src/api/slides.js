import { unstable_cache } from 'next/cache'

export const getSlides = unstable_cache(
  async () => {
    try {
      const response = await fetch(`${process.env.__NEXT_PRIVATE_ORIGIN}/data/slides.json`);

      if (!response.ok) {
        throw new Error(`Failed to fetch slides, status: ${response.status}`);
      }

      const slides = await response.json();

      return slides;
    } catch (error) {
      return { error: error.message };
    }
  },
  ['slides'],
  { revalidate: 3600, tags: ['slides'] }
)
