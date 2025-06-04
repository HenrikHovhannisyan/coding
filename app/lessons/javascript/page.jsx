import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-4">JavaScript</h1>
      <ul className="list-decimal list-inside space-y-2">
        <li>
          <Link
            className="bg-teal-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded"
            href="/lessons/javascript/hosting"
          >
            Hoisting
          </Link>
        </li>
        <li>
          <Link href="/lessons/javascript/array/map">Array.map()</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
