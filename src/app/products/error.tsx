"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      {error.message} <button onClick={reload}>Try again</button>
    </div>
  );
}

// "use client";

// import { useRouter } from "next/router";
// import { startTransition } from "react";

// export default function ErrorBoundarry({
//   error,
//   reset,
// }: {
//   error: Error;
//   reset: () => void;
// }) {
//   const router = useRouter();
//   const reload = () => {
//     startTransition(() => {
//       router.reload();
//       reset();
//     });
//   };
//   return (
//     <div className="container" style={{ textAlign: "center" }}>
//       <p className="title" style={{ fontSize: "2rem" }}>
//         Error: {error.message}
//       </p>
//       <button onClick={() => reload()}>Try Again</button>
//     </div>
//   );
// }
