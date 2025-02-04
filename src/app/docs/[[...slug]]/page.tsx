export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1 className="title" style={{ fontSize: "2rem" }}>
        Viewing docs for feature {slug[0]} and version {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return (
      <h1 className="title" style={{ fontSize: "2rem" }}>
        Viewing docs for feature {slug[0]}
      </h1>
    );
  }
  return (
    <h1 className="title" style={{ fontSize: "2rem" }}>
      Docs Home Page
    </h1>
  );
}
