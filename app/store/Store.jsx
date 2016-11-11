import {createStore} from 'redux';

var defaultState = {
    todos: [
        {name: 'todo1', completed: false},
        {name: 'todo2', completed: false}
    ]
};

var reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        name: action.name,
                        completed: false
                    }
                ]
            });
        case 'DELETE_TODO':{
            var todos = Object.assign([], state.todos);
            todos.splice(action.index, 1);
            return Object.assign({}, state, {
               todos: todos
            });
        }
        default:
            return state;
    }
};

let Store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;