"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const page = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-4 flex items-center">
        <FontAwesomeIcon icon={faJs} className="text-yellow-400 mr-2" />
        JavaScript
      </h1>
      <ul className="list-decimal list-inside space-y-2">
        <li>
          <Link
            className="hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            href="/lessons/javascript/hosting"
          >
            Hoisting
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            href="/lessons/javascript/array/map"
          >
            Array.map()
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
