import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <h1>Next.js</h1>
        <Link href="/lessons">Lessons</Link>
      </div>
    </>
  );
}
