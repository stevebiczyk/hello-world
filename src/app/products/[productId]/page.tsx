export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <h1 className="title" style={{ fontSize: "2rem" }}>
      Product Details for {productId}
    </h1>
  );
}
