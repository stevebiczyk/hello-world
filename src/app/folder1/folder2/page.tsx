import Link from "next/link";

export default function Folder2() {
  return (
    <h1>
      Folder 2 Page
      <Link href={"/folder4"}>Folder 4 Page</Link>
    </h1>
  );
}
