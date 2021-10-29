import React from "react";

function Section({ title, paragraph }) {
  return (
    <>
      {title && <h1>{title}</h1>}

      <p>{paragraph}</p>
    </>
  );
}

export default Section;
