import Link from "next/link";

export default function Folder1() {
  return (
    <div>
      <h1>Folder 1</h1>
      <Link href={"/folder1/folder2"}>Folder 2</Link>
      <Link href={"/folder3"}>Folder 3</Link>
    </div>
  );
}
