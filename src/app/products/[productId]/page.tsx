import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product Details for ${id}`,
  };
};

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Furry Kittens ${productId}`);
    }, 100);
  });
  return (
    <h1 className="title" style={{ fontSize: "2rem" }}>
      Product Details for {title}
    </h1>
  );
}
