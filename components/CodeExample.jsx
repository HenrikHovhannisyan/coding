import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeExample = ({ code, output }) => {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="bg-stone-950 text-white p-4 rounded-lg mb-4 mt-4 overflow-auto w-full max-w-2xl">
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        customStyle={{
          background: "transparent",
          fontSize: "0.875rem",
          padding: "0",
          margin: "0",
        }}
        wrapLongLines
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>

      {output && (
        <button
          onClick={() => setShowResult(!showResult)}
          className="mt-4 flex items-center bg-green-600 hover:bg-green-700 text-white font-medium text-sm py-1 px-2 rounded cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlay} className="mr-2" />
          Run
        </button>
      )}

      {showResult && (
        <div className="mt-4 p-3 bg-black text-teal-600 rounded text-sm whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
};

export default CodeExample;
