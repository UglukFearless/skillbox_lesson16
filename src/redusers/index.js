const todos = (state = [], action) => {

  // let action1 = {
  //   type: "ADD_TODO",
  //   id: 4,
  //   name: 'Learn Redux'
  // };
  //
  // let action2 = {
  //   type: "TOGGLE_TODO",
  //   id: 2
  // };

  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        { id: action.id, name: action.name, chacked: false }
      ]
      break;

    case 'TOGGLE_TODO':
      return state.map( todo => {
        if (todo.id === action.id) {
          return { id: todo.id, name: todo.name, checked: !todo.checked };
        }
        return todo;
      })
      break;

    default:
      return state;
  }
}

export default todos;
