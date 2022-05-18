export const useProductCard = (productInfo, addToCart) => {
  const { _id, name, brand, size, color, price, imageUrl } = productInfo;

  const handleAddToCart = () => {
    const itemToAdd = {
      id: _id,
      brand,
      color,
      imageUrl,
      name,
      price,
      qty: 1,
      size,
    };
    addToCart(itemToAdd);
  };

  return {
    id: _id,
    name,
    imageUrl,
    price,
    handleAddToCart: () => handleAddToCart(),
  };
};
