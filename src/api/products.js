export async function getProducts() {
  try {
    const response = await fetch(`${process.env.__NEXT_PRIVATE_ORIGIN}/data/products.json`);

    if (!response.ok) {
      throw new Error(`Failed to fetch products, status: ${response.status}`);
    }

    const products = await response.json();

    return products;
  } catch (error) {
    return { error: error.message };
  }
}
