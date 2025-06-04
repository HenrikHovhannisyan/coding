import React from "react";

const LessonLayout = ({ title, children }) => {
  return (
    <div className="CodeExample">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="border-t pt-4">{children}</div>
    </div>
  );
};

export default LessonLayout;
