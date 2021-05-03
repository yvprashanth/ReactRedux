const initstate = {
    todos: []
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