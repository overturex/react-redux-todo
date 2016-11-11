import React from 'react';
import ToDoList from 'ToDoList';
import ToDoForm from 'ToDoForm';
import {connect} from 'react-redux';
import {addToDo, deleteToDo} from 'Actions';

class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {name: 'todo1', completed: false},
                {name: 'todo2', completed: false}
            ]
        }
    }
    addToDo(name){
        var todos = Object.assign([], this.state.todos);
        todos.push({name: name, competed: false});
        this.setState({todos: todos});
    }
    deleteToDo(index){
        var todos = Object.assign([], this.state.todos);
        todos.splice(index, 1);
        this.setState({todos: todos});
    }
    render(){
        return(
            <div>
                {/*<ToDoForm addToDo={this.props.addToDo}></ToDoForm>*/}
                {/*<ToDoList todos={this.props.todos} deleteToDo={this.props.deleteToDo}></ToDoList>*/}
                <ToDoForm addToDo={this.addToDo.bind(this)}></ToDoForm>
                <ToDoList todos={this.state.todos} deleteToDo={this.deleteToDo.bind(this)}></ToDoList>
            </div>
        )
    }
}

// var mapStateToProps = function(state){
//     return {
//         todos: state.todos
//     }
// };
//
// var mapDispatchToProps = function(dispatch, ownProps){
//     return{
//         addToDo: function(name) {
//             dispatch(addToDo(name));
//         },
//         deleteToDo: function(index){
//             dispatch(deleteToDo(index));
//         }
//     }
// };

export default ToDoApp; //connect(mapStateToProps, mapDispatchToProps)(ToDoApp);