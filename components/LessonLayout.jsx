import React from "react";

const LessonLayout = ({ title, description, children }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="border-t pt-4">{children}</div>
    </div>
  );
};

export default LessonLayout;
