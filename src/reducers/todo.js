const initstate = {
    todos: [
        {id: 1, name: 'Render Static UI', isComplete: true},
        {id: 2, name: 'Take Yuvi To Wiggle Works', isComplete: false},
        {id: 3, name: 'More Items', isComplete: true}
      ],
      currentTodo: 'king'
}

export default (state = initstate, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)}
        default:
            break;
    }
    return state
}