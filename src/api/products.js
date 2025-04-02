export async function getProducts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/products.json`);

    if (!response.ok) {
      throw new Error(`Failed to fetch products, status: ${response.status}`);
    }

    const products = await response.json();

    return products;
  } catch (error) {
    return { error: error.message };
  }
}
