import React, { useState } from "react";
import Section from "./Section";

const sectionsDB = [
  {
    id: 1,
    title: "Título 1",
    paragraph:
      "1111111111111111111111111111111111111111111111111111111111111111111111111111111111",
  },
  {
    id: 2,
    title: "Título 2",
    paragraph:
      "12222222222222222222222222222222222222222222222222222222222222222222222222222222221",
  },
];
function Main() {
  const [sections, setSections ] = useState(sectionsDB);

  const changeTitle = () => {
    const newSections = sections.map((section, i) => {
if(i === 0 ) return {...section, title: 'titulo useEffect'}

    })

  };


  return (
    <div>
      {section.map((section) => {
        return (
          <Section
            key={section.id}
            title={section.title}
            paragraph={section.paragraph}
          />
        );
      })}
      <h3>{state}</h3>
      <button onClick={handleClick}>Altera estado</button>
    </div>
  );
}

export default Main;
