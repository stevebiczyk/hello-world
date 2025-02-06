import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>
        Welcome to my blog!
      </h1>
    </div>
  );
}
