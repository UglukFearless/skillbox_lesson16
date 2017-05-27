import React from 'react';

const TodoAdd = ({ addTodo }) => {
  return (
    <input
      type='text'
      placeholder='введите текст задачи'
      onKeyDown={ ev => {
        if (ev.keyCode === 13 ) {
          addTodo(ev.target.value);
          ev.target.value = '';
        }
      }}
    />
  );
}

export default TodoAdd;
