import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const InfoSection = ({ title, children }) => {
  return (
    <section className="border-2 rounded-xl border-blue-500/50 p-3">
      <h3 className="text-xl font-bold mb-2">
        <FontAwesomeIcon
          icon={faCircleInfo}
          className="me-2 text-blue-500 text-2xl"
        />
        <span
          className="info_section_title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </h3>
      {children}
    </section>
  );
};

export default InfoSection;
