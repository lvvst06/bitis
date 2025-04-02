export async function getProducts() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.__NEXT_PRIVATE_ORIGIN;
    const response = await fetch(`${apiUrl}/data/products.json`);

    if (!response.ok) {
      throw new Error(`Failed to fetch products, status: ${response.status}`);
    }

    const products = await response.json();

    return products;
  } catch (error) {
    return { error: error.message };
  }
}
