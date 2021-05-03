import reducer from './todo'

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()
    })

    test('adds a todo', () => {
        const startState = {
            todos:[
                {id: 1, name: 'Render Static UI', isComplete: true},
                {id: 2, name: 'Take Yuvi To Wiggle Works', isComplete: false},
                {id: 3, name: 'More Items', isComplete: true}
            ]
        }

        const expectedState = {
            todos:[
                {id: 1, name: 'Render Static UI', isComplete: true},
                {id: 2, name: 'Take Yuvi To Wiggle Works', isComplete: false},
                {id: 3, name: 'More Items', isComplete: true},
                {id: 3, name: 'Added a Todo', isComplete: false}
            ]
        }
        const result = reducer(startState, {type: 'TODO_ADD', payload: {id: 3, name: 'Added a Todo', isComplete: false}})
        expect(result).toBeDefined()
    })
});