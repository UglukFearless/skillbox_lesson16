import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './containers/app';
import { createStore } from 'redux';
import todos from './redusers';

//свой редюсер для каждого пункта (для более сложных состояний)
// const store = {
//   todos: [],
//   filter: 'visible',
//   foo: 'bar'
// };

const initialState = [
  { id: 1, name: "Настроить webpack", checked: true },
  { id: 2, name: "Запустить webpack-dev-server", checked: true },
  { id: 3, name: "Написать TodoApp", checked: false }
];

const store = createStore( todos, initialState );

ReactDOM.render(
  <TodoApp store={store} />,
  document.querySelector('#app')
)
