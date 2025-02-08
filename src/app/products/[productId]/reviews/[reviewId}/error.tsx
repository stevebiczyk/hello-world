"use client";

export default function ErrorBoundarry({ error }: { error: Error }) {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>
        Error: {error.message}
      </h1>
    </div>
  );
}
