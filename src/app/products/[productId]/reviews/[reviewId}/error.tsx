"use client";

import { useRouter } from "next/router";
import { startTransition } from "react";

export default function ErrorBoundarry({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.reload();
      reset();
    });
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <p className="title" style={{ fontSize: "2rem" }}>
        Error: {error.message}
      </p>
      <button onClick={() => reload()}>Try Again</button>
    </div>
  );
}
