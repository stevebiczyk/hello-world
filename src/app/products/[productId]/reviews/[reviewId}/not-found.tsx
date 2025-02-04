"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1 className="title" style={{ fontSize: "2rem" }}>
        404: Page Not Found
      </h1>
      <p>
        Review {reviewId} not found for product {productId}
      </p>
    </div>
  );
}
