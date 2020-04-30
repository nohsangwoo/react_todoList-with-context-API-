import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './componenets/TodoTemplate';
import TodoHead from './componenets/TodoHead';
import TodoList from './componenets/TodoList';
import TodoCreate from './componenets/TodoCreate';
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
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
