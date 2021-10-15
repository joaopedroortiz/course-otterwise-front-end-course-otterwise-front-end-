import React from "react";
import styled from "styled-components";
function Home() {
  return (
    <div>
      <Texto1>texto1</Texto1>
      <Texto2>texto2</Texto2>
      <h2>texto3</h2>
      <h2>texto4</h2>
    </div>
  );
}

export default Home;

const Texto1 = styled.h2`
  color: red;
  font-size: 30px;
`;

const Texto2 = styled.h2`
  color: green;
  font-size: 20px;
`;
