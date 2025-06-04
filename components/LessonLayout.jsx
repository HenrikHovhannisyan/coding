import React from "react";

const LessonLayout = ({ title, children }) => {
  return (
    <div className="code_example">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="border-t pt-4">{children}</div>
    </div>
  );
};

export default LessonLayout;
