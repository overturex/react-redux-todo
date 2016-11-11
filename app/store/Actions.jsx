function addToDo(name){
    return {
        type: 'ADD_TODO',
        name: name,
        completed: false
    };
}

function deleteToDo(index){
    return{
        type: 'DELETE_TODO',
        index: index
    }
}

export {addToDo, deleteToDo};