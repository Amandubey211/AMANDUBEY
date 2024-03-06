import React from "react";
import EEresume from "./EEresume";

const EducationDataBar = ({ data }) => {
  const { bgImage, color, source, period, title, subTitle, grade } = data;
  return (
    <div
      className="rounded-3"
      style={{
        backgroundImage: bgImage,
        color: color,
      }}
    >
      <EEresume
        period={period}
        title={title}
        subTitle={subTitle}
        grade={grade}
        source={source}
      />
    </div>
  );
};

export default EducationDataBar;
