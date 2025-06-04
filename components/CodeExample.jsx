"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("javascript", js);

const CodeExample = ({ code, output }) => {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg mb-4 shadow-lg max-w-md">
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ background: "transparent", padding: 0 }}
      >
        {code}
      </SyntaxHighlighter>

      <button
        onClick={() => setShowResult(!showResult)}
        className="mt-4 flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
      >
        <FontAwesomeIcon icon={faPlay} className="mr-2" />
        Run
      </button>

      {showResult && (
        <div className="mt-4 p-3 bg-black text-green-400 rounded text-sm whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
};

export default CodeExample;
