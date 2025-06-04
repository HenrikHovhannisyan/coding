import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Lessons</h1>
      <Link
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
        href="/lessons/javascript"
      >
        Javascript
      </Link>
    </>
  );
};

export default page;
