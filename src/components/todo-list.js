import React from 'react';

const TodoList = (props) => {

  const { todos , toggleTodo } = props;
  // const todos = this.props.todos;

  return (
    <div>
      <h2>Todo List</h2>
      <ol>
        {
          todos.map( (todo) => {

            const className = todo.checked ? 'checked' : '';

            return (
              <li
                key={todo.id}
                className={className}
                onClick = {ev => toggleTodo(todo.id)}
              >
                {todo.name}
              </li>
            )
          })
        }
      </ol>
    </div>
  );
}

export default TodoList;
