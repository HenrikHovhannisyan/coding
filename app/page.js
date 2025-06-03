import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Уроки по JavaScript</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link href="/lessons/javascript/hosting">Hoisting</Link>
        </li>
        <li>
          <Link href="/lessons/javascript/array/map">Array.map()</Link>
        </li>
      </ul>
    </div>
  );
}
