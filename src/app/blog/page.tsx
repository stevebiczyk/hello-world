import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>
        Welcome to my blog!
      </h1>
    </div>
  );
}
