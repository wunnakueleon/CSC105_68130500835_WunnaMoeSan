import { useParams, useSearchParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();

  const size = searchParams.get("size");
  const color = searchParams.get("color");

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product ID: <strong>{productId}</strong></p>
      {size && <p>Size: <strong>{size}</strong></p>}
      {color && <p>Color: <strong>{color}</strong></p>}
    </div>
  );
}

export default ProductPage;
