import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review"); // Simulate an error
  }
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
    // redirect("/products");
  }
  return (
    <h1 className="title" style={{ fontSize: "2rem" }}>
      Reviews {reviewId} for product {productId}
    </h1>
  );
}
