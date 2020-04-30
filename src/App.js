import React from 'react';
import { createGlobalStyle } from 'styled-components';

// 이름에서 유추할수있듯 global 하게 적용할수있는 body css
const GobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;
function App() {
  return (
    <>
      <GobalStyle />
      <div>안녕하세요</div>
    </>
  );
}

export default App;
