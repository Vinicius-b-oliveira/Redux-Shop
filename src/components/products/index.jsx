import { Product } from "../product";

const Products = ({ products, page }) => {
  return (
    <>
      <ul>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product key={index} name={product.name} price={product.price} page={page} id={product.id} />
          ))
        ) : (
          <li>Nenhum produto encontrado</li>
        )}
      </ul>
    </>
  );
};

export { Products };
