import Link from "next/link";

export default function Home() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>
        Welcome to my Page!
      </h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
