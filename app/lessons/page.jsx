import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-4">Lessons</h1>
      <Link
        className="bg-teal-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded"
        href="/lessons/javascript"
      >
        Javascript
      </Link>
    </div>
  );
};

export default page;
