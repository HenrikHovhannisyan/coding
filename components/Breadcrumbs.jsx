"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  let href = "";

  return (
    <nav
      className="flex text-sm text-gray-500 mb-4"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li>
          <Link href="/" className="hover:text-teal-600 font-medium">
            Home
          </Link>
        </li>
        {pathParts.map((part, idx) => {
          href += "/" + part;
          const isLast = idx === pathParts.length - 1;
          return (
            <li key={href} className="inline-flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-700 font-semibold capitalize">
                  {decodeURIComponent(part)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-teal-600 font-medium capitalize"
                >
                  {decodeURIComponent(part)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
