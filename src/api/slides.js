import { unstable_cache } from 'next/cache'

export default unstable_cache(
  async () => {
    const response = await fetch(`${process.env.__NEXT_PRIVATE_ORIGIN}/data/slide.json`);
    const jsonData = await response.json();

    return jsonData;
  },
  ['slides'],
  { revalidate: 3600, tags: ['slides'] }
)
