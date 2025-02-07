import Link from "next/link";

export default function ProductsPage() {
  const productId = 88;
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>
        Products List
      </h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3">Product 3</Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
      <Link href="/">Home</Link>
    </div>
  );
}
