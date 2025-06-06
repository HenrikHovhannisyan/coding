"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const LessonLayout = ({ title, children, page }) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === `/lessons/${page}`;

  return (
    <div className="code_example relative">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-white">{title}</h1>

        {!isCurrentPage && page && (
          <Link
            href={`/lessons/${page}`}
            className="text-teal-400 hover:text-white border border-teal-400 hover:bg-teal-500 rounded p-2 transition"
            title="Показать"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
        )}
      </div>

      <div className="border-t border-gray-700 pt-4">{children}</div>
    </div>
  );
};

export default LessonLayout;
