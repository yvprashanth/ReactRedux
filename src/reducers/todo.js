const initstate = {
    todos: [
        {id: 1, name: 'Render Static UI', isComplete: true},
        {id: 2, name: 'Take Yuvi To Wiggle Works', isComplete: false},
        {id: 3, name: 'More Items', isComplete: true}
      ],
      currentTodo: 'king'
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
const TODO_ADD = 'TODO_ADD'

export const updateCurrentAction = (val) => ({type:CURRENT_UPDATE, payload: val})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initstate, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE:
                debugger
                return {...state, currentTodo: action.payload}
        default:
            break;
    }
    return state
}