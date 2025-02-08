import { notFound, redirect } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }
  return (
    <h1 className="title" style={{ fontSize: "2rem" }}>
      Reviews {reviewId} for product {productId}
    </h1>
  );
}
